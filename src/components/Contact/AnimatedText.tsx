'use client';

import { useEffect, useReducer, useRef } from 'react';

import usePrefersReducedMotion from '@/hooks/usePrefersReducedMotion';

const ANIMATION_TICK_MS = 50;
const HOLD_TICKS_AFTER_MESSAGE = 50;

function useInterval(callback: () => void, delay: number | null) {
  const savedCallback = useRef<() => void>(callback);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (!delay) return;

    const id = setInterval(() => savedCallback.current?.(), delay);
    return () => clearInterval(id);
  }, [delay]);
}

interface AnimationState {
  idx: number;
  message: string;
  char: number;
  isActive: boolean;
}

type AnimationAction =
  | { type: 'TICK'; loop: boolean; hold: number }
  | { type: 'PAUSE' }
  | { type: 'RESUME'; maxIdx: number };

/** A message's opening frame already shows its first character, so the
 * display is never blank for a tick at a message boundary. */
function startOf(messages: string[], idx: number): AnimationState {
  return {
    idx,
    message: messages[idx].slice(0, 1),
    char: 2,
    isActive: true,
  };
}

function makeReducer(messages: string[]) {
  return function animationReducer(
    state: AnimationState,
    action: AnimationAction,
  ): AnimationState {
    switch (action.type) {
      case 'TICK': {
        if (state.idx >= messages.length) {
          return state;
        }

        const finished = state.char - action.hold >= messages[state.idx].length;

        if (!finished) {
          return {
            ...state,
            message: messages[state.idx].slice(0, state.char),
            char: state.char + 1,
            isActive: true,
          };
        }

        const nextIdx = state.idx + 1;

        if (nextIdx === messages.length) {
          if (action.loop) {
            return startOf(messages, 0);
          }

          return { ...state, idx: messages.length, isActive: false };
        }

        return startOf(messages, nextIdx);
      }
      case 'PAUSE':
        return { ...state, isActive: false };
      case 'RESUME':
        return {
          ...state,
          isActive: state.idx < action.maxIdx,
        };
      default:
        return state;
    }
  };
}

interface AnimatedTextProps {
  messages: string[];
  loop?: boolean;
  className?: string;
}

/**
 * Types out each message, holds, then moves to the next — the same effect
 * the contact email alias used to use. Pauses on hover and shows the first
 * message immediately under prefers-reduced-motion.
 */
export default function AnimatedText({
  messages,
  loop = true,
  className,
}: AnimatedTextProps) {
  const reducedMotion = usePrefersReducedMotion();

  const [state, dispatch] = useReducer(makeReducer(messages), messages, (m) =>
    startOf(m, 0),
  );

  useEffect(() => {
    if (reducedMotion) {
      dispatch({ type: 'PAUSE' });
    }
  }, [reducedMotion]);

  useInterval(
    () => {
      dispatch({ type: 'TICK', loop, hold: HOLD_TICKS_AFTER_MESSAGE });
    },
    state.isActive && !reducedMotion ? ANIMATION_TICK_MS : null,
  );

  const displayMessage = reducedMotion ? messages[0] : state.message;

  const handlePause = () => dispatch({ type: 'PAUSE' });
  const handleResume = () => {
    if (!reducedMotion) {
      dispatch({ type: 'RESUME', maxIdx: messages.length });
    }
  };

  return (
    <span
      className={className}
      onMouseEnter={handlePause}
      onMouseLeave={handleResume}
    >
      {displayMessage}
    </span>
  );
}

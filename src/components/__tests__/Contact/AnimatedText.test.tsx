import { act, fireEvent, render } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import usePrefersReducedMotion from '@/hooks/usePrefersReducedMotion';
import AnimatedText from '../../Contact/AnimatedText';

vi.mock('@/hooks/usePrefersReducedMotion', () => ({
  default: vi.fn(),
}));

const mockedUsePrefersReducedMotion = vi.mocked(usePrefersReducedMotion);

describe('AnimatedText', () => {
  beforeEach(() => {
    vi.useFakeTimers();
    mockedUsePrefersReducedMotion.mockReturnValue(false);
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('never renders blank, even mid-animation', () => {
    const { container } = render(
      <AnimatedText messages={['hello there', 'second message']} />,
    );

    for (let elapsed = 0; elapsed < 10_000; elapsed += 50) {
      act(() => {
        vi.advanceTimersByTime(50);
      });
      expect(container.textContent).not.toBe('');
    }
  });

  it('shows the first message immediately under reduced motion', () => {
    mockedUsePrefersReducedMotion.mockReturnValue(true);

    const { container } = render(
      <AnimatedText messages={['reduced motion message', 'other']} />,
    );

    expect(container.textContent).toBe('reduced motion message');

    act(() => {
      vi.advanceTimersByTime(5000);
    });

    expect(container.textContent).toBe('reduced motion message');
  });

  it('stops on the last message when loop is false', () => {
    const { container } = render(
      <AnimatedText messages={['a', 'bb']} loop={false} />,
    );

    act(() => {
      vi.advanceTimersByTime(10_000);
    });

    expect(container.textContent).toBe('bb');

    const settled = container.textContent;

    act(() => {
      vi.advanceTimersByTime(5000);
    });

    expect(container.textContent).toBe(settled);
  });

  it('loops back to the first message when loop is true', () => {
    const { container } = render(
      <AnimatedText messages={['first', 'second']} loop />,
    );

    let sawFirstAgain = false;
    for (let elapsed = 0; elapsed < 20_000; elapsed += 50) {
      act(() => {
        vi.advanceTimersByTime(50);
      });
      if (container.textContent === 'first') {
        sawFirstAgain = true;
      }
    }

    expect(sawFirstAgain).toBe(true);
  });

  it('pauses on hover and resumes on mouse leave', () => {
    const { container } = render(
      <AnimatedText messages={['a message that types slowly']} loop={false} />,
    );
    const el = container.firstElementChild as HTMLElement;

    act(() => {
      vi.advanceTimersByTime(100);
    });
    const before = container.textContent;

    fireEvent.mouseEnter(el);
    act(() => {
      vi.advanceTimersByTime(500);
    });
    expect(container.textContent).toBe(before);

    fireEvent.mouseLeave(el);
    act(() => {
      vi.advanceTimersByTime(500);
    });
    expect(container.textContent).not.toBe('');
  });
});

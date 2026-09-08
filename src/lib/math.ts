import katex from 'katex';

// A control character no Markdown source will ever contain, so restoring
// protected code blocks afterward can never collide with real prose.
const PLACEHOLDER_MARK = '\x00';

/**
 * Renders LaTeX math to static KaTeX HTML at build time, so a math post ships
 * zero client-side math JS. Must run before markdown-to-jsx sees the content:
 * KaTeX source is full of underscores, asterisks, and backslashes that
 * markdown's own emphasis parsing would otherwise mangle. `$$...$$` renders
 * in display mode, `$...$` inline — code fences and inline code are protected
 * first so a literal `$` in a shell snippet is never mistaken for math.
 */
export function renderMath(markdown: string): string {
  const protectedBlocks: string[] = [];

  const protect = (match: string): string => {
    protectedBlocks.push(match);
    return `${PLACEHOLDER_MARK}${protectedBlocks.length - 1}${PLACEHOLDER_MARK}`;
  };

  let rendered = markdown
    .replace(/```[\s\S]*?```/g, protect)
    .replace(/`[^`\n]+`/g, protect);

  rendered = rendered.replace(/\$\$([\s\S]+?)\$\$/g, (_match, expression) =>
    renderExpression(expression, true),
  );

  // Requires non-whitespace immediately inside both `$` delimiters so a
  // stray currency mention like "$5 and $10" is never read as math.
  rendered = rendered.replace(
    /\$([^\s$](?:[^$\n]*[^\s$])?)\$/g,
    (_match, expression) => renderExpression(expression, false),
  );

  return rendered.replace(
    new RegExp(`${PLACEHOLDER_MARK}(\\d+)${PLACEHOLDER_MARK}`, 'g'),
    (_match, index: string) => protectedBlocks[Number(index)],
  );
}

function renderExpression(expression: string, displayMode: boolean): string {
  return katex.renderToString(expression, {
    displayMode,
    throwOnError: false,
    output: 'htmlAndMathml',
  });
}

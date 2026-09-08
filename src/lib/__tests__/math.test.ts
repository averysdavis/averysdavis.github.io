import { describe, expect, it } from 'vitest';

import { renderMath } from '../math';

describe('renderMath', () => {
  it('renders display math to a KaTeX display block', () => {
    const output = renderMath('Before.\n\n$$E = mc^2$$\n\nAfter.');

    expect(output).toContain('class="katex-display"');
    expect(output).toContain('Before.');
    expect(output).toContain('After.');
    expect(output).not.toContain('$$');
  });

  it('renders inline math without the display wrapper', () => {
    const output = renderMath('The value $x^2$ is squared.');

    expect(output).toContain('class="katex"');
    expect(output).not.toContain('class="katex-display"');
    expect(output).not.toContain('$');
  });

  it('leaves plain currency mentions untouched', () => {
    const output = renderMath('It costs $5 and $10 depending on the plan.');

    expect(output).toBe('It costs $5 and $10 depending on the plan.');
  });

  it('does not treat a fenced code block as math', () => {
    const markdown = ['```bash', 'echo $HOME', '```'].join('\n');

    expect(renderMath(markdown)).toBe(markdown);
  });

  it('does not treat inline code as math', () => {
    const output = renderMath('Run `echo $PATH` in your shell.');

    expect(output).toBe('Run `echo $PATH` in your shell.');
  });

  it('does not throw on invalid LaTeX and still renders the rest', () => {
    const output = renderMath('Broken: $\\frac{1}$ done.');

    expect(output).toContain('Broken:');
    expect(output).toContain('done.');
  });
});

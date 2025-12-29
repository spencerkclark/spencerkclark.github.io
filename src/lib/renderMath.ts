import katex from 'katex';
import 'katex/dist/katex.min.css';

export function renderMathInText(text: string): string {
  if (!text) return "";

  // This regex finds text between $ symbols
  return text.replace(/\$([^$]+)\$/g, (_, math) => {
    try {
      return katex.renderToString(math, {
        throwOnError: false,
        displayMode: false // Inline math
      });
    } catch (e) {
      return math; // Fallback to raw text on error
    }
  });
}

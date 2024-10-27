/**
 * Extracts a code snippet from the content of a file.
 *
 * @param fileContent - The content of a source code file stored in a string.
 * @param snippetId - A unique identifier representing the snippet to be extracted.
 * @param lang - The language of the source code.
 * @returns A code snippet or null if one wasn't found.
 */
export const snip = (fileContent: string, snippetId: string, lang: string): string | null => {
  let start: string;
  let end: string;

  switch (lang) {
    case "ts":
    case "js":
    default:
      start = `// Snip start ${snippetId}`;
      end = `// Snip end ${snippetId}`;
      break;
  }

  const regex = new RegExp(`(?<=${start})([\\s\\S]*?)(?=${end})`);
  const match = regex.exec(fileContent);
  if (!match) {
    return null;
  }

  return match[0];
};

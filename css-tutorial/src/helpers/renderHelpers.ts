export const renderAsInlineCode = (text: string): string => {
  return `<span class="font-mono text-gray-600">${text}</span>`;
};

export const stylesRecordToString = (
  styles: Record<string, string>
): string => {
  let result = "";

  Object.keys(styles).forEach(
    (key) => (result += `\n  ${key}: ${styles[key]};`)
  );

  return result.trim();
};

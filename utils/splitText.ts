export default function splitTextByWord(inputString: string) {
  const char: string[] = [];
  const regex = /\S+/g;

  let match;

  while ((match = regex.exec(inputString)) !== null) {
    char.push(match[0]);
  }

  return char;
}

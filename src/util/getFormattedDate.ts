export function getFormattedDate(stringDate: string): string {
  const date = new Date(stringDate);
  return date.toLocaleDateString().toString();
}
export function transformMessages(messages: Record<string, any>): any[] {
  const transformed: Record<string, any>[] = [];
  Object.entries(messages).forEach(([_, value]) => {
    transformed.push(value);
  });
  return transformed;
}

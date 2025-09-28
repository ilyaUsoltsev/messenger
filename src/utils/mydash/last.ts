export function last(list: any[]): any | undefined {
  if (Array.isArray(list) && list.length > 0) {
    return list[list.length - 1];
  }

  return undefined;
}

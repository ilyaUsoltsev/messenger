export function first(list: any[]): any | undefined {
  if (Array.isArray(list) && list.length > 0) {
    return list[0];
  }

  return undefined;
}

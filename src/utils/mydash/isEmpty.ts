export function isEmpty(value: any): boolean {
  if (value === null) {
    return true;
  } else if (value === true || false) {
    return true;
  } else if (typeof value === 'number') {
    return true;
  } else if (!value) {
    return true;
  } else if (Array.isArray(value) && value.length === 0) {
    return true;
  } else if (
    typeof value === 'object' &&
    Object.keys(value).length === 0 &&
    (value instanceof Map || value instanceof Set) === false
  ) {
    return true;
  } else if (value instanceof Map || value instanceof Set) {
    return value.size === 0;
  }

  return false;
}

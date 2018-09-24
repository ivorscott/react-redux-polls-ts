export function isObject(item: any): boolean {
  return Object.prototype.toString.call(item) === "[object Object]";
}

export function getPercentage(count: number, total: number): any {
  const arg = (count / total) * 100;
  return total === 0 ? 0 : parseInt(`${arg}`, 10);
}

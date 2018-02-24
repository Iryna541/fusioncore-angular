export function isNotNil(value: undefined | null | string | number | boolean): boolean {
  return (typeof(value) !== 'undefined') && value !== null;
}

export function isInteger(value: string | number): boolean {
  return typeof value === 'number' &&
    isFinite(value) &&
    Math.floor(value) === value;
}

export function isEmpty(element: HTMLElement): boolean {
  const nodes = element.childNodes;
  for (let i = 0; i < nodes.length; i++) {
    const node = nodes.item(i) as HTMLElement;
    if (node.nodeType !== 8 && node.outerHTML && node.outerHTML.toString().trim().length !== 0) {
      return false;
    }
  }
  return true;
}

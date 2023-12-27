// export function getElementDocument(element: Element) {
//   return element?.ownerDocument;
// }
//
// export function getElementWindow(element: Element) {
//   return getElementDocument(element)?.defaultView;
// }
//
// export function isDOMElement(element: Element) {
//   const elementWindow = getElementWindow(element);
//   if (elementWindow) {
//     return Boolean(elementWindow) && element instanceof elementWindow.HTMLElement;
//   } else {
//     return Boolean(elementWindow);
//   }
// }
//
// export function isFunction(value: any) {
//   return typeof value === 'function';
// }
//
// export function findLastIndex(array: string[], predicate: (x: string, i: any) => boolean) {
//   for (let i = array.length - 1; i >= 0; i--) {
//     const x = array[i];
//     if (predicate(x, i)) {
//       return i;
//     }
//   }
//   return -1;
// }
//
// export function repeat(string: string, n = 1) {
//   let result = '';
//   for (let i = 0; i < n; i++) {
//     result += string;
//   }
//   return result;
// }
//
// export function toString(value: any) {
//   return `${value}`;
// }
// export function defer(fn: any) {
//   return requestAnimationFrame(fn);
// }
//
// export function cancelDefer(deferId: number) {
//   cancelAnimationFrame(deferId);
// }

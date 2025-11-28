"use strict";

export function destroyer(arr, ...args) {
  return arr.filter((element) => !args.includes(element));
}

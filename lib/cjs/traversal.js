"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var traversal_exports = {};
__export(traversal_exports, {
  traverseDFS: () => traverseDFS
});
module.exports = __toCommonJS(traversal_exports);
function traverseDFS(rootNode, getChildren, onEntry, onExit) {
  const visited = /* @__PURE__ */ new Set();
  let time = 0;
  const stack = [rootNode];
  while (stack.length > 0) {
    const node = stack[stack.length - 1];
    if (!visited.has(node)) {
      visited.add(node);
      time++;
      onEntry?.(node, time);
      const children = getChildren(node);
      for (let child of children) {
        if (!visited.has(child)) {
          stack.push(child);
        }
      }
    } else {
      stack.pop();
      time++;
      onExit?.(node, time);
    }
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  traverseDFS
});
//# sourceMappingURL=traversal.js.map

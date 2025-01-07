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
var validator_util_exports = {};
__export(validator_util_exports, {
  uniquePropertyValidator: () => uniquePropertyValidator
});
module.exports = __toCommonJS(validator_util_exports);
function uniquePropertyValidator(nodes, propertyName, accept, formatter, severity = "error") {
  if (nodes.length) {
    const reported = /* @__PURE__ */ new Set();
    for (const node of nodes) {
      const propertyValue = node[propertyName];
      if (reported.has(propertyValue)) {
        accept(severity, formatter({ propertyValue }), {
          node,
          property: propertyName
        });
      }
      reported.add(propertyValue);
    }
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  uniquePropertyValidator
});
//# sourceMappingURL=validator-util.js.map

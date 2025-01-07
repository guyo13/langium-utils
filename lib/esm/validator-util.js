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
export {
  uniquePropertyValidator
};
//# sourceMappingURL=validator-util.js.map

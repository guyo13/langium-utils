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
export {
  traverseDFS
};
//# sourceMappingURL=traversal.js.map

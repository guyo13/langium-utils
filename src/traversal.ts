/**
 * Traverses the input rootNode in a Depth-First order, keeping track on node entry and exit times.
 * @param rootNode - The node to start traversing from.
 * @param getChildren - A callback which returns an iterable of child nodes given an input node.
 * @param onEntry - A callback which is called when a node is pulled out of the stack BEFORE its children are collected.
 * @param onExit - A  callback which is called AFTER a node's children have been traversed.
 * @typeParam T - The type of the nodes in the graph.
 * */
export function traverseDFS<T>(
    rootNode: T,
    getChildren: (node: T) => Iterable<T>,
    onEntry?: (node: T, time: number) => void,
    onExit?: (node: T, time: number) => void,
): void {
    const visited = new Set<T>();
    let time = 0;

    const stack= [rootNode];

    while (stack.length > 0) {
        // Peek at the top of the stack so that we can hook into a node's entry time
        const node = stack[stack.length - 1]!;

        if (!visited.has(node)) {
            visited.add(node);
            time++;
            onEntry?.(node, time);

            // Get children of the node
            const children = getChildren(node);

            // Push unvisited children onto the stack
            for (let child of children) {
                if (!visited.has(child)) {
                    stack.push(child);
                }
            }
        } else {
            // Finally remove the node from the stack
            stack.pop();
            time++;
            onExit?.(node, time);
        }
    }
}

/** A helper interface that can be used to wrap a graph node that is being traversed,
 * adding a state of any type and memorized children array. */
export interface NodeState<N, S> {
    node: N;
    state: S;
    children?: Array<NodeState<N, S>>;
}

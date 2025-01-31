/**
 * Traverses the input rootNode in a Depth-First order, keeping track on node entry and exit times.
 * @param rootNode - The node to start traversing from.
 * @param getChildren - A callback which returns an iterable of child nodes given an input node.
 * @param onEntry - A callback which is called when a node is pulled out of the stack BEFORE its children are collected.
 * @param onExit - A  callback which is called AFTER a node's children have been traversed.
 * @typeParam T - The type of the nodes in the graph.
 * */
export declare function traverseDFS<T>(rootNode: T, getChildren: (node: T) => Iterable<T>, onEntry?: (node: T, time: number) => void, onExit?: (node: T, time: number) => void): void;
/** A helper interface that can be used to wrap a graph node that is being traversed,
 * adding a state of any type and memorized children array. */
export interface NodeState<N, S> {
    node: N;
    state: S;
    children?: Array<NodeState<N, S>>;
}
//# sourceMappingURL=traversal.d.ts.map
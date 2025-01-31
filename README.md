# @guyo13/langium-utils

[![License](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](LICENSE)

Utilities for language development using [Langium](https://langium.org/). This library provides helpful functions to enhance your Langium-based language development workflows.

## Features

- **Validation Utilities**: Simplify the implementation of custom property validators.
- **Flexible Error Reporting**: Easily customize validation messages and severity levels.
- **Graph Traversal**: Depth-first search traversal of a graph with node entry and exit hooks. More algorithms will be added in the future.

## Installation

Install the package via npm:

```bash
npm install @guyo13/langium-utils
```

Or using pnpm:

```bash
pnpm add @guyo13/langium-utils
```

## Usage

### uniquePropertyValidator

This utility helps ensure that a specific property within a list of AstNodes has all unique values. It accepts custom error formatting and severity levels.

Parameters:

* nodes: An array of `AstNodes` to validate.
* propertyName: The property name to check for uniqueness.
* accept: A `ValidationAcceptor` for reporting validation errors.
* formatter: A user defined function to format error messages.
* severity (optional): Severity of the validation message (`'error' | 'warning' | 'info' | 'hint'`). Defaults to `'error'`.


### traverseDFS
Traverses the input rootNode in a Depth-First order, keeping track on node entry and exit times.

Parameters:

* `rootNode`: The node to start traversing from.
* `getChildren`: A callback which returns an iterable of child nodes given an input node.
* `onEntry` (optional): A callback which is called when a node is pulled out of the stack BEFORE its children are collected. Receives the node and its entry time.
* `onExit` (optional): A callback which is called AFTER a node's children have been traversed. Receives the node and its exit time.
* Type Parameters:
  * `T`: The type of the nodes in the graph.

#### NodeState
  A helper interface that can be used to wrap a graph node that is being traversed, adding a state of any type and memorized children array.  This can be useful to store information about the nodes during traversal.

Properties:

* `node`: The actual graph node.
* `state`: A user-defined state associated with the node.
* `children` (optional): An array of NodeState objects representing the children of the node. This can be populated during traversal.
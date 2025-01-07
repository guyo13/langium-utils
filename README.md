# @guyo13/langium-utils

[![License](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](LICENSE)

Utilities for language development using [Langium](https://langium.org/). This library provides helpful functions to enhance your Langium-based language development workflows.

## Features

- **Validation Utilities**: Simplify the implementation of custom property validators.
- **Flexible Error Reporting**: Easily customize validation messages and severity levels.

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
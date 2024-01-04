# minimal-typescript-node-esm-starter

Welcome to the minimal TypeScript ESM (ECMAScript Modules) starter repository! This project provides a streamlined setup for building TypeScript projects with ECMAScript modules support.

## Getting Started
Clone this repository to kickstart your project:

```bash
git clone https://github.com/thaitype/minimal-typescript-node-esm-starter.git [project_name]
```

## Installation
Install dependencies using your preferred package manager:

```
pnpm install
```

You can also use `npm` or `yarn` if you prefer.

## Usage

Explore the provided scripts to enhance your development experience:

```bash
# Start the code
pnpm start

# Start the code with watch mode
pnpm dev

# Test the code
pnpm test

# Test the code with watch mode
pnpm test:watch

# Test the code with coverage report
pnpm test:coverage

# Build the project
pnpm build

# Type check with TypeScript
pnpm lint
```

## Ava Test Runner with TypeScript
For information on configuring Ava Test Runner with TypeScript, refer to [the official documentation](https://github.com/avajs/ava/blob/main/docs/recipes/typescript.md).

To run Ava tests in Node 20, use the following command:

```
NODE_OPTIONS='--loader=tsx --no-warnings=ExperimentalWarning' ava
```

**Node Options:**

- `--loader=tsx`: Use tsx as the loader for Node.js.
- `--no-warnings=ExperimentalWarning`: Hide the "ExperimentalWarning: Custom ESM Loaders is an experimental feature and might change at any time" message. [Learn more](https://github.com/nodejs/node/issues/30810#issuecomment-1446093458)

## Additional TypeScript Compiler Options

Explore more TypeScript compiler options by referring to the [tsconfig cheatsheet](https://www.totaltypescript.com/tsconfig-cheat-sheet) created by Matt Pocock.

Feel free to customize and extend this starter kit based on your project requirements. Happy coding!
# minimal-typescript-esm-starter

## Use this repo

```
git clone https://github.com/thaitype/minimal-typescript-esm-starter.git [project_name]
```

```bash
# start
npm start
# Test watch mode
npm run test:watch
```

## Ava Test Runner with TypeScript
Read [the doc for configuration](https://github.com/avajs/ava/blob/main/docs/recipes/typescript.md)

In Node 20, run with following command

```bash
NODE_OPTIONS='--loader=tsx --no-warnings=ExperimentalWarning' ava
```

**Node Options:**

- `--loader=tsx`, use `tsx` as loader for node.js
- `--no-warnings=ExperimentalWarning`, for hiding message "ExperimentalWarning: Custom ESM Loaders is an experimental feature and might change at any time", [read more](https://github.com/nodejs/node/issues/30810#issuecomment-1446093458)

## More Option TypeScript Compiler
Read [tsconfig cheatsheet](https://www.totaltypescript.com/tsconfig-cheat-sheet) by Matt Pocock
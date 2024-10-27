# code-snips

Quickly generate code snippets from source code files.

```ts
import { snip } from "code-snips/snip";
import { readFileSync } from "fs";

// Snip start myFunc
const myFunc = () => {
    console.log("Hello World!");
}
// Snip end myFunc

const fileContent = readFileSync('./demo.ts', 'utf-8');
const snippet = snip(fileContent, "myFunc", "ts");
console.log(snippet);
```

```
Output:
const myFunc = () => {
    console.log("Hello World!");
}
```

Currently supports TypeScript and JavaScript.
# frontend_side

use for install typescript compiler globally

`npm install -g typescript`


Pros

Quick access to tsc from any project or directory.
Useful for trying commands, learning, or one-off scripts.
Some editors or tools can discover a global compiler automatically.

Cons
Different machines (or teammates) may have different global versions.
Can drift from the version your project expects, causing subtle issues.
May require elevated permissions on some systems to install globally.

how to run typescript



create f.ts file with some typescript code
```f.ts 
# Example of ts code
var a = 4;
var b = 4;
console.log(typeof a);
console.log(typeof b);
a = "xj";
b = "xyz";
console.log(typeof b);
var t = "raj";
console.log(typeof t);
t = 23;
console.log(typeof t);
```

1) way one
type script has first compile with tsc and tsc get argument as f.ts file and generates f.js file
then run f.js file with node f.js

```typscript compiler
tsc f.ts
```
it will generates f.js file
```node
node f.js
```

2) way two
we can combine both the above steps in one.
we need tsx for this.

```installing tsx
npm install -g tsx
```

then do 

```run f.ts
tsx f.js
```





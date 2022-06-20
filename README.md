# Belajar Dengan Jenius Typescript



Typescript







# Typescript

Untuk memulai **typescript project**, buatlah sebuah **folder** kemudian eksekusi perintah berikut :

```bash
$ tsc --init
```

Konfigurasi **minimum tsconfig** yang biasa digunakan :

```json
{
  "compilerOptions": {
    "sourceMap": true,
    "outDir": "./dist",
    "strict": true,
    "lib": ["esnext"],
    "esModuleInterop": true
  },
  "include": ["**/*.ts"],
  "exclude": ["node_modules"]
}
```

Selanjutnya eksekusi perintah :

```bash
$ npm init -y
```

Kemudian tambahkan **build command** di dalam **file package.json** :

```json
  "scripts": {
    "build": "npx tsc"
  },
```

Eksekusi dengan perintah berikut :

```bash
$ npx tsc
```



---



## Node Typings

Buatlah file **test.ts** kemudian tulis kode berikut :

```javascript
console.log("Hello World!"); //Prints Hello World!
```

Maka akan muncul informasi **error** seperti berikut :

```
any
Cannot find name 'console'. Do you need to change your target library? Try changing the 'lib' compiler option to include 'dom'.ts(2584)
```

Jika kita memasang :

```bash
$ npm install @types/node --save-dev
```

Jika kita arahkan **cursor** kita pada **keyword console** maka akan muncul tooltips berisi **information** terkait **namespace console** :

```javascript
namespace console
var console: Console
The console module provides a simple debugging console that is similar to the JavaScript console mechanism provided by web browsers.

The module exports two specific components:

A Console class with methods such as console.log(), console.error() andconsole.warn() that can be used to write to any Node.js stream.
A global console instance configured to write to process.stdout and process.stderr. The global console can be used without callingrequire('console').

Warning: The global console object's methods are neither consistently synchronous like the browser APIs they resemble, nor are they consistently asynchronous like all other Node.js streams. See the note on process I/O for more information.

Example using the global console:

console.log('hello world');
// Prints: hello world, to stdout
console.log('hello %s', 'world');
// Prints: hello world, to stdout
console.error(new Error('Whoops, something bad happened'));
// Prints error message and stack trace to stderr:
//   Error: Whoops, something bad happened
//     at [eval]:5:15
//     at Script.runInThisContext (node:vm:132:18)
//     at Object.runInThisContext (node:vm:309:38)
//     at node:internal/process/execution:77:19
//     at [eval]-wrapper:6:22
//     at evalScript (node:internal/process/execution:76:60)
//     at node:internal/main/eval_string:23:3

const name = 'Will Robinson';
console.warn(`Danger ${name}! Danger!`);
// Prints: Danger Will Robinson! Danger!, to stderr
Example using the Console class:

const out = getStreamSomehow();
const err = getStreamSomehow();
const myConsole = new console.Console(out, err);

myConsole.log('hello world');
// Prints: hello world, to out
myConsole.log('hello %s', 'world');
// Prints: hello world, to out
myConsole.error(new Error('Whoops, something bad happened'));
// Prints: [Error: Whoops, something bad happened], to err

const name = 'Will Robinson';
myConsole.warn(`Danger ${name}! Danger!`);
// Prints: Danger Will Robinson! Danger!, to err
@see — source
```







## Modules

Setiap kode yang kita tulis dalam **typescript** konteksnya langsung berada di dalam **global scope**. Jika kita memiliki beberapa **file** dalam satu **project** maka semua **variable**, **function**, **class** akan diinterpretasikan sebagai satu kesatuan di dalam **global scope**. Kode yang di tulis di dalam salah satu **file** dapat diakses di dalam kode di **file** lainnya.






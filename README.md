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


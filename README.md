[![Strict TypeScript Checked](https://badgen.net/badge/TS/Strict "Strict TypeScript Checked")](https://www.typescriptlang.org)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

# VamUved

API library for VamUved, service for developers for delivering simple notifications about your program.

## Installation

```bash
npm i vamuved
```

## Usage

Get new `channelId` from [Telegram bot](http://t.me/vamuvedbot) that you want to deliver you notifications.

```ts
import { vamuved } from 'vamuved'

// ...

// second argument is optional
await vamuved('5fbc2c25a5efd72bf4f503a1', 'hello world!!!')
```

Error handling:

```ts
try {
  await vamuved('5fbc2c25a5efd72bf4f503a1')

  console.log('done')
} catch (e) {
  console.log(e) // Error: Invalid channel
}
```

Set hosthame for custom VamUved server:

```ts
import { vamuved, setVamUvedHosthame } from 'vamuved'

setVamUvedHosthame('example.com')

await vamuved(...)
```

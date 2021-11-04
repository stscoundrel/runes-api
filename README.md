# Runes API

Simple REST API for transforming text to runes in Koa.

## Usage

API transforms content to four different rune dialects.

### With a Node.js server.

- Start with `yarn dev`
- Make requests to localhost:3000

`localhost:3000/younger-futhark/[YOUR_CONTENT]` -> Younger Futhark

`localhost:3000/elder-futhark/[YOUR_CONTENT]` -> Elder Futhark

`localhost:3000/futhorc/[YOUR_CONTENT]` -> Anglo-Saxon Futhorc runes

`localhost:3000/futhork/[YOUR_CONTENT]` -> Medieval Futhork runes

### With serverless endpoints.

- Start with `yarn dev-serverless`
- Make requests to localhost:3000/dev

`localhost:3000/dev/younger-futhark/[YOUR_CONTENT]` -> Younger Futhark

`localhost:3000/dev/elder-futhark/[YOUR_CONTENT]` -> Elder Futhark

`localhost:3000/dev/futhorc/[YOUR_CONTENT]` -> Anglo-Saxon Futhorc runes

`localhost:3000/dev/futhork/[YOUR_CONTENT]` -> Medieval Futhork runes

### Related projects

- [Runic (Next.js)](https://github.com/stscoundrel/runes)
- [Younger Futhark transformer](https://github.com/stscoundrel/younger-futhark)
- [Elder Futhark transformer](https://github.com/stscoundrel/elder-futhark)
- [Futhorc transformer (Anglo-Saxon runes)](https://github.com/stscoundrel/futhorc)
- [Futhork transformer (Medieval runes)](https://github.com/stscoundrel/futhork)

# Runes API

Simple REST API for transforming text to runes in Koa.

- Start with `yarn dev`
- Make requests to localhost:3000

## Rune routes

API transforms content to three different rune dialects.

`localhost:3000/younger-futhark/[YOUR_CONTENT]` -> Younger Futhark

`localhost:3000/elder-futhark/[YOUR_CONTENT]` -> Elder Futhark

`localhost:3000/futhorc/[YOUR_CONTENT]` -> Anglo-Saxon Futhorc runes

### Related projects

- [Runic (Next.js)](https://github.com/stscoundrel/runes)
- [Younger Futhark transformer](https://github.com/stscoundrel/younger-futhark)
- [Elder Futhark transformer](https://github.com/stscoundrel/elder-futhark)
- [Futhorc transformer](https://github.com/stscoundrel/futhorc)

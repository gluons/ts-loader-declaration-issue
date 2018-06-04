# ts-loader-declaration-issue

A repo to repro [`ts-loader`](https://github.com/TypeStrong/ts-loader) declaration issue.

---

I'm using [`ts-loader`](https://github.com/TypeStrong/ts-loader) with [Vue](https://vuejs.org/).  
So, I have to include Vue in this repo. It'll close to my `ts-loader` usage.

## Step to reproduce

```
yarn
yarn build
```

You will see TypeScript declaration in `./dist/src` directory.  
- `./dist/src/index.d.ts`
- `./dist/src/components/Hello.d.ts`

My webpack output `path` is `./dist`.  
Why declarations aren't in just `./dist`?

That's weird. 🤔

## Issue

[#190](https://github.com/TypeStrong/ts-loader/issues/190)

created at 2021-08-05 by gp6

- 环境搭建
```
cnpm i create-react-app -g
create-react-app react-admin --template typescript
cd react-admin
npm start
```

- 文件命名：
  - .js / .jsx / .ts / .tsx
  - 如果代码用到了JSX变量，文件名用.jsx或.tsx。
  - 如果代码没有用到JSX，文件名用.js或.ts。

- TypeScript
  - 它是JS的超集，在TS环境可以兼容JS代码（也就是你说可以ES5、ES6代码）
  - 在脚手架环境中（node+webpack），还做不到实时地对TS类型进行检测。但每次运行项目时，却可以做到对代码的检测。
  - 所以在工作中，TS项目几乎都用的是VScode来做开发（因为VScode这个编辑器内置了TS检测工具）。
  - VScode只能.ts/.tsx文件进行类型检测。不能在.js/.jsx中写TS代码。
  - 如何理解TS报红的错误？它只是提示你类型错误了，但不影响代码的正确编译和运行。

```
create-react-app react-admin --template redux-typescript
```

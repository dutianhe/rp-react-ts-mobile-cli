<h1 align="center">ruubypay mobile React ts cli</h1>

<br />

by.如易行前端团队
<br />
适用于构建移动端开发页面
<br />

```
CLI内置集成工具：
Redux Toolkit 提供可预测的状态管理
sass 专业级CSS扩展语言
react-router-dom 应用的路由器
flexible 移动端自适应方案
axios 基于 promise 的 HTTP 库
vconsole 移动端调试利器
```
<br />

# 🚀 Available Scripts
 项目采用yarn包管理工具，基于node v16.17.1
<br />
## 环境安装
```
yarn install
```

## ⚡️ start

```
yarn start
```
  
<br />

## 🦾 build

```
yarn run build:debug
```


```
yarn run build:test
```

```
yarn run build:release
```
  

# 🧬 项目结构

This is the structure of the files in the project:

```sh
    │
    ├── public                  # public files (favicon, .htaccess, manifest, ...)
    ├── src                     # source files
    │   ├── async           # 异步请求
    │   │   ├── api.ts      # 存放了api接口 URL
    │   │   └── gainFetch.ts       # 具体api请求实现 按照功能模块划分
    │   ├── components          # 组件目录
    │   │   ├── MyDemo          # Demo组件模块示例 (组件名称要求大驼峰命名法)
    │   │   │   ├── features    # 模块功能
    │   │   │   │   └──counterSlice.ts        # 模块功能切片（功能具体实现）
    │   │   │   ├── MyDemo.interface.ts       # 模块ts接口类型定义
    │   │   │   ├── MyDemo.module.sass        # 模块样式定义
    │   │   │   └── MyDemo.tsx                # 模块view实现
    │   │   └── PageLoadingTip.tsx            # 全局页面loading tip
    │   ├── interfaces          # 全局ts接口类型定义
    │   ├── pages               # 页面入口
    │   │   ├── Home                    # Home页面（大写驼峰命名）
    │   │   │   └── Home.export.rdc.ts  # 导出当前页面reducers
    │   │   └── NotFoundPage.tsx        # NotFound
    │   ├── resources           # 图片/常量以及其他静态资源
    │   │   ├── images          # 图片/资源
    │   │   └── consts          # 常量
    │   ├── routes              # 路由定义
    │   ├── store               # Redux store （采用Redux Toolkit设计实现）
    │   │   ├── features        # 全局功能
    │   │   └── reducers        # 全局reducers在此处注册
    │   ├── styles              # 全局样式及sass常量
    │   ├── utils               # 工具库
    │   ├── App.tsx             # 组件入口
    │   ├── index.tsx           # 项目入口
    │   ├── RootComponent.tsx   # 路由组件
    │   ├── serviceWorker.ts    # serviceWorker
    ├── .env                    # 默认环境变量
    ├── .env.debug              # 开发环境变量
    ├── .env.release            # 生产环境变量
    ├── .env.test               # 测试环境变量
    ├── dev.proxy.ts            # 本地开发代理配置
    ├── craco.config.ts         # webpack增量配置
    ├── .eslintrc.js
    ├── .gitignore
    ├── package.json
    ├── README.md
    └── tsconfig.json
```

 

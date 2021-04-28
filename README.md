# React搭建好的轮子

使用时请删除master之外的任何分支

## 项目使用
使用yarn命令，尽量不要使用npm命令;
```bash
# 安装依赖
yarn

# 开发
yarn start

# 打包
yarn build
```

## 已安装插件
* `rematch`  加入数据持久化、数据加载
  * 在models下面创建一个个文件即可
  * 加入数据持久化;
  * 文档地址：[https://rematch.netlify.app/#/](https://rematch.netlify.app/#/)
  * 安装了immer，让操作redux更简单，不需要每个函数都返回store状态；
  * 安装loading插件, 只需要从state中取入即可, 
    * 通过`state.loading.global`取入全局异步加载的loading;
    * 通过`state.loading.effects.list`，取入list整个模块的加载loading
    * 通过`state.loading.effects.list[异步函数名]`,取入list某个函数名的loading;
  * 安装updated插件，用于获取最后更新时间, 通过`state.updated.list[异步函数名]`获取；
需要派发数据时，引入config.js使用dispatch即可；

* 安装`craco`作为webpack管理
  * 文档地址：[https://github.com/gsoft-inc/craco/blob/master/packages/craco/README.md#installation](https://github.com/gsoft-inc/craco/blob/master/packages/craco/README.md#installation)

* 配置`eslint`，配置项参考地址：[https://github.com/yannickcr/eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react)
  * 记得配置eslint自动保存选项, 按ctrl+s即可自动格式化;

* dayjs 引入dayjs插件和moment使用方法一样，比moment体积更小

## mock使用
在mock文件夹下面添加假数据即可
```js
module.exports = {
  // 支持值为 Object 和 Array
  'GET /api/users': { users: [1, 2] },
  // GET 可忽略
  '/api/users/1': { id: 1 },
  // 支持自定义函数，API 参考 express@4
  'POST /api/users/create': (req, res) => {
    // 添加跨域请求头
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.end('ok');
  },
}
```
使用Mock
```js
const mockjs = require('mockjs')
module.exports = {
  'GET /api/list': Mock.mock({
    'data|80-100': [
      {
        id: '@id',
        name: '@name',
        nicName: '@last',
        phone: /^1[345678]\d{9}$/,
        'age|11-99': 1,
        address: '@county(true)',
        isMale: '@boolean',
        email: '@email',
        createTime: '@datetime',
        avatar() {
          return Mock.Random.image('200*100', '#894FC4', '#FFF', 'png', '!')
        }
      }
    ]
  })
}
```

## commit提交规范
- build：主要目的是修改项目构建系统(例如 glup，webpack，rollup 的配置等)的提交
- ci：主要目的是修改项目继续集成流程(例如 Travis，Jenkins，GitLab CI，Circle等)的提交
- docs：文档更新
- feat：新增功能
- fix：bug 修复
- perf：性能优化
- refactor：重构代码(既没有新增功能，也没有修复 bug)
- style：不影响程序逻辑的代码修改(修改空白字符，补全缺失的分号等)
- test：新增测试用例或是更新现有测试
- revert：回滚某个更早之前的提交
- chore：不属于以上类型的其他类型

如：git commit -m 'docs 修改了文档'

## 更新说明
* 添加scss, 配置全局scss变量
* 模拟mock
* 加入懒加载
* 添加axios全局拦截器
* 添加reach/router路由

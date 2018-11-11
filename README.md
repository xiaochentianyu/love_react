# 原计划使用短网址来实现地址栏加载数据，由于没有找到合适的短网址api，故此无期限延期，目前仅能修改boy和girl名进行使用，
# edi编辑页 ， reset 通过弹窗设置boy和girl
# 还是有不少不合理的地方，就这样吧，懒得动了
# 先这样用吧，目前为1版本，接下来使用高阶组件做(别问我为什么一开始不用，因为我特么才刚想起来)
# 鬼知道我为什么要用装饰器，到底发生了什么？
# 既然用上装饰器了，redux也用上吧；
# 嗯，一个小项目硬是被我做出了大项目的感觉
# 话说，我为什么要这么为难我自己
# 没有然后了，没动力改了，tj了

### react-redux
```
  npm i react-redux -S
  npm i redux -S
```

### 装饰器使用掘金方案 https://juejin.im/post/5abb776bf265da23793c37ae
    其他参考文章 https://segmentfault.com/q/1010000010491983
```
npm i babel-plugin-import -S
npm i babel-plugin-transform-decorators-legacy -D

// package.json里配置plugins添加"transform-decorators-legacy"
"babel": {
    "plugins":[
      "transform-decorators-legacy"
    ]
  },

```
---
title: 全局变量和环境变量
---

## 问题

多种环境：开发环境、测试环境、生产环境 <br>
接口关联：需要手动关联 <br>
随机参数：参数需要手动修改

## 多种环境

### 环境变量

1. 在 `Environments` 创建环境并设置参数
2. 在请求中右上角选择环境
3. 在请求中以 `{{ variable }}` 包裹变量名称取得变量

### 全局变量

全局变量应用于任何接口，环境变量优先于全局变量，获取方式与[环境变量](#环境变量)相同

## 接口关联

### Json 提取器

```javascript
// 获取响应体
const result = JSON.parse(pm.response.text());
// 设置全局变量
pm.globals.set('access_token', result.access_token);
```

### 正则表达式

```javascript
// 正则表达式匹配token
const access_token = pm.response.text().match(new RegExp('"access_token":"(.*?)"'));
// 设置全局变量
pm.globals.set('access_token', access_token[1]);
```

## 随机参数

### Postman 内置动态参数

[Postman 内置动态参数](https://learning.postman.com/docs/tests-and-scripts/write-scripts/variables-list/)

格式：`{{$}}`

- `{{$timestamp}}` 当前时间戳
- `{{$randomInt}}` 0-1000随机数
- `{{$guid}}` 随机guid字符串

### 自定义动态函数

```javascript
const times = Date.now();
pm.globals.set('times', times);
```

- `Date.now()` 当前时间戳

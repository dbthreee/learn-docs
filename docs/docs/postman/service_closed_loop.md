---
title: 业务闭环
---

## 以用户信息举例子

### 创建信息

在创建的时候把数据存为全局变量<br>
请求体：

```json
{
  "name": "zhangsan",
  "email": "zhangsan@gmail.com"
}
```

响应体：

```json
{
  "user_id": 1,
  "name": "zhangsan", // 可选
  "email": "zhangsan@gmail.com" // 可选
}
```

后置脚本：

```javascript
const response = JSON.parse(pm.response.text());
pm.globals.set('xxx_id', response.xxx_id);
```

### 查询信息

### 修改信息

在修改的时候从全局变量中获取<br>
请求体：

```json
{
  "user_id": {{ xxx_id }},
  "需要修改的字段": "新值"
}
```

### 删除信息

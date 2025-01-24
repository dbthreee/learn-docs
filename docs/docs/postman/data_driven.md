---
title: 数据驱动
---

这个数据驱动在集合 Run Collection 中选择 Data

## CSV

```csv
grant_type,appid,secret,assert_value
client_credential,appid,secret,access_token
,appid,secret,40002
client_credential,,secret,41002
client_credential,appid,,41004
```

请求参数取值（全局变量）：`{{ grant_type }}` `{{ appid }}` `{{ secret }}`

```javascript
// 当返回结果中有 access_token 才通过正则取值
if (pm.response.text().search('access_token') != -1) {
  // 正则表达式匹配token
  const access_token = pm.response.text().match(new RegExp('"access_token":"(.*?)"'));
  // 设置全局变量
  pm.globals.set('access_token', access_token[1]);
}

// 业务断言
pm.test('检查响应中包括access_token', function () {
  pm.expect(pm.response.text()).to.include(data.assert_value);
});
```

## JSON

```json
[
  {
    "grant_type": "client_credential",
    "appid": "appid",
    "secret": "secret",
    "assert_value": "access_token"
  },
  {
    "grant_type": "",
    "appid": "appid",
    "secret": "secret",
    "assert_value": "40002"
  },
  {
    "grant_type": "client_credential",
    "appid": "",
    "secret": "secret",
    "assert_value": "41002"
  },
  {
    "grant_type": "client_credential",
    "appid": "appid",
    "secret": "",
    "assert_value": "41004"
  }
]
```

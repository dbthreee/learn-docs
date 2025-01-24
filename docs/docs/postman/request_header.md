---
title: 请求头
---

## 必须请求头

访问 https 网站，如果无返回数据，可以关闭 SSL 请求验证查看响应体<br>

如：`https://www.baidu.com/s?wd=极客时间`
需要在 Header 中加入 `user-agent:Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Safari/537.36 Edg/132.0.0.0`

## 常用请求头

|字段|解释|
|:--:|:--:|
|Host|请求主机地址|
|Connection|连接方式|
|`Accept`|客户端接收到的数据格式|
|`X-Requested-With`|异步请求|
|`User-Agent`|客户端用户类型|
|Referer|来源|
|`Cookie`|Cookie信息|
|`Content-Type`|请求内容格式|
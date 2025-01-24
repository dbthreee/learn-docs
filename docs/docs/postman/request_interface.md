---
title: 请求界面
---

## Params

`Query Params`：请求参数，`?key1=value1&key2=value2`<br>
`Path Variables`：路径变量，`/:var1/:var2`

## Authorization

鉴权

## Headers

请求头

## Body

请求体:

- `none` 没有参数
- `form-data` 键值对，文件
- `x-www-form-urlencoded` 键值对
- `raw` json、text、xml、html、javascript
- `binary` 二进制文件
- `GraphQL` api查询语言

## Script

### Pre-request

前置脚本

### Post-response

后置脚本

## Settings

设置：

- `HTTP version` 发送 HTTP 请求的版本
- `Enable SSL certificate verification` 启用 SSL 证书验证，发送请求验证 SSL 证书
- `Automatically follow redirects` 自动遵循重定向，HTTP 3xx
- `Follow original HTTP Method` 遵循原始 HTTP 方法重定向
- `Follow Authorization header` 遵循授权头，重定向不同主机、保留授权头
- `Remove referer header on redirect` 删除重定向上的引用头
- `Enable strict HTTP parser` 启用 HTTP 解析器，限制无效 HTTP 头响应
- `Encode URL automatically` 自动编码 URL
- `Disable cookie jar` 禁用 Cookie
- `Use server cipher suite during handshake` 握手使用服务器密码套件
- `Maximum number of redirects` 最大重定向数
- `TLS/SSL protocols disabled during handshake` 指定握手禁用的 TLS/SSL 协议版本
- `Cipher suite selection` 密码组选择，SSL 服务器配置文件用于建立安全连接的密码套件顺序

## Cookies

管理 Cookie 信息

---
title: 介绍文档
---

## 接口测试的简介和分类

接口测试就是测试系统组件接口之间的一种测试。<br>
分类：

- 测试外部接口：测试被测系统和外部系统之间的接口。（商城-支付宝微信，正例）
- 测试内部接口：
  1. 内部接口提供给内部系统使用。（正例）
  2. 内部接口提供给外部系统使用。（正例，异常，权限）

## 接口测试的流程以及用例的设计

1. api接口文档（抓包工具获取），接口业务，接口地址，鉴权方式，入参，出参，错误码。
2. 编写接口用例以及评审。<br>
   思路：

- 正例：输入正常参数，接口能够成功返回数据。
- 反例：
  - 鉴权反例：
    鉴权码为空，鉴权码错误，鉴权码过期，....
  - 参数反例：
    参数为空，参数类型异常，参数长度异常。
  - 错误码覆盖：
    根据业务而定。
  - 其他错误场景：
    接口黑名单，接口调用次数，分页场景。

3. 使用接口测试工具Postman执行接口测试。
4. Postman+Newman+Jenkins实现持续集成，输出测试报告发送邮件。

## 微信公众平台接口

获取权限：<br>
appid（ID）：<br>
secret（密钥）：

## Postman 的简介、安装、注册

安装：[PostmanDownload](https://www.postman.com/downloads/)<br>
注册：[PostmanRegister](https://www.postman.com/postman-account/)
介绍：

- `Home` 主页
- `Workspace` 工作空间
  - `Collections` 集合，项目集合
  - `Apis` api文档
  - `Enviromments` 环境变量，全局变量
  - `Mock Server` 虚拟服务器
  - `Monitors` 监听器
  - `History` 历史记录

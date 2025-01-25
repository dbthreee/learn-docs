---
title: Mock Servers 服务器
---

## 作用

模拟数据

## 应用场景

后端接口没有开发完成，前端业务需要后端接口

## 创建 mock server

1. 输入 `Mock server name`
2. 添加请求 `Add requests`
3. 选择环境 `Environment`
4. 固定网络延时 `Simulate a fixed network delay`
5. 模拟服务器url保存为一个环境变量 `Save the mock server URL as an new environment variable`
6. 设置为私有，需要加上 `x-api-key` 头，`Make mock server private`

会在 `Collection` 中新建一个 Collection 将 url 存为集合变量，返回的mock数据是通过 `Add example` 获得
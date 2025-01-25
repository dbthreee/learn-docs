---
title: newman
---

运行命令：`newman run`
常用参数：
    `-e` 引用环境变量
    `-g` 引用全局变量
    `-d` 引用数据文件
    `-n` 指定测试用例迭代次数
    `-r cli,html,json,junit --reporter-html-export` 指定生成HTML的报告

## 操作流程

1. 导出 `Collection` testcase.json
2. 导出 `Environment` environment.json
3. 导出 `Globals Env` globals.json
4. 准备数据驱动文件 data.json

```bash
newman run testcase.json \
    -e environment.json \
    -g globals.json \
    -d data.json \
    -r cli,html,json,junit --reporter-html-export report.html
```
# 快速开始

这是一个普通页面，包含了VuePress的基础知识。

## 页面

你可以在你的vuepress目录中添加Markdown文件，每个Markdown文件都会被转换为你网站中的一个页面。

详情请参阅[路由](https://vuejs.press/guide/page.html#routing)。

## 内容

每个Markdown文件[将被渲染为HTML，然后转换为一个Vue的单文件组件(SFC)](https://vuejs.press/guide/page.html#content)。

VuePress支持基本的Markdown语法和[一些扩展](https://vuejs.press/guide/markdown.html#syntax-extensions)，你也可以在其中[使用Vue的功能](https://vuejs.press/guide/markdown.html#using-vue-in-markdown)。

## 配置

VuePress使用一个`.vuepress/config.js`（或 .ts）文件作为[站点配置](https://vuejs.press/guide/configuration.html#client-config-file)，你可以用它来配置你的站点。

对于[客户端配置](https://vuejs.press/guide/configuration.html#client-config-file)，你可以创建一个`.vuepress/client.js`（或 .ts）文件。

同时，你也可以通过[前置元数据](https://vuejs.press/guide/page.html#frontmatter)为每一页添加配置。

## 布局与自定义

这里是控制`@vuepress/theme-default`主题布局的常见配置：

- [导航栏](https://vuejs.press/reference/default-theme/config.html#navbar)
- [侧边栏](https://vuejs.press/reference/default-theme/config.html#sidebar)

查阅[默认主题文档](https://vuejs.press/reference/default-theme/)以获取完整的参考信息。

你可以通过`.vuepress/styles/index.scss`文件[添加额外样式](https://vuejs.press/reference/default-theme/styles.html#style-file)。

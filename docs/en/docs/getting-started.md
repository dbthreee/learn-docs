# Quick Start

This is a regular page that includes the basics of VuePress.

## Pages

You can add Markdown files to your VuePress directory, and each Markdown file will be converted into a page on your site.

For more details, please refer to [Routing](https://vuejs.press/guide/page.html#routing).

## Content

Each Markdown file [will be rendered as HTML and then transformed into a single-file Vue component (SFC)](https://vuejs.press/guide/page.html#content).

VuePress supports basic Markdown syntax and [some extensions](https://vuejs.press/guide/markdown.html#syntax-extensions), and you can also [use Vue features within Markdown](https://vuejs.press/guide/markdown.html#using-vue-in-markdown).

## Configuration

VuePress uses a `.vuepress/config.js` (or .ts) file as the [site configuration](https://vuejs.press/guide/configuration.html#client-config-file), which you can use to configure your site.

For [client-side configuration](https://vuejs.press/guide/configuration.html#client-config-file), you can create a `.vuepress/client.js` (or .ts) file.

Additionally, you can add configuration for each page using [frontmatter](https://vuejs.press/guide/page.html#frontmatter).

## Layout and Customization

Here are common configurations for controlling the layout of the `@vuepress/theme-default` theme:

- [Navbar](https://vuejs.press/reference/default-theme/config.html#navbar)
- [Sidebar](https://vuejs.press/reference/default-theme/config.html#sidebar)

Refer to the [Default Theme Documentation](https://vuejs.press/reference/default-theme/) for complete reference information.

You can [add extra styles](https://vuejs.press/reference/default-theme/styles.html#style-file) by creating a `.vuepress/styles/index.scss` file.

const source = 'docs';
const sourceDir = source;

const dest = `${sourceDir}/.vuepress/dist`;

const temp = `${sourceDir}/.vuepress/.temp`;

const cache = `${sourceDir}/.vuepress/.cache`;

const public_ = `${sourceDir}/.vuepress/public`;

const pagePatterns = ['**/*.md', '!.vuepress', '!node_modules'];

const permalinkPattern = null;

const buildDir = {
  source,
  dest, // vuepress build 输出目录
  temp, // 临时文件目录
  cache, // 缓存文件目录
  public: public_, // public 文件目录
  pagePatterns, // 指定页面文件的 Patterns，这些 Patterns 是相对于 Source 目录的
  permalinkPattern, // 指定为页面生成永久链接的 Pattern，它会被每个页面的 Frontmatter 中的 permalinkPattern 字段覆盖
};

export default buildDir;

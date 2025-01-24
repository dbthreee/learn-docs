import locales from './locales';
import buildDir from './buildDir';
import devConfig from './dev';

const common = {
  locales,
  ...buildDir,
  ...devConfig,
};

export default common;

import { viteBundler } from '@vuepress/bundler-vite';
import { defaultTheme } from '@vuepress/theme-default';
import { defineUserConfig } from 'vuepress';
import commonConfig from './config/common';
import defaultThemeConfig from './config/default-theme';

export default defineUserConfig({
  ...commonConfig,
  bundler: viteBundler(),
  theme: defaultTheme({
    ...defaultThemeConfig,
    sidebarDepth: 3,
  }),
});

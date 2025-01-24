import sidebar_root_zhCN from './root/zhCN';
import sidebar_postman_zhCN from './postman/zhCN';
import { createSidebarWithPrefix } from '../../../../utils/createSidebarWithPrefix';

const sidebar_zhCN = {
  '/docs/': [...sidebar_root_zhCN, ...createSidebarWithPrefix(sidebar_postman_zhCN, 'postman/')],
};

export default sidebar_zhCN;

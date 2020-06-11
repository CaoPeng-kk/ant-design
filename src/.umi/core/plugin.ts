// @ts-nocheck
import { Plugin } from 'E:/IDEA WorkSpace/ant-design/node_modules/@umijs/runtime';

const plugin = new Plugin({
  validKeys: ['patchRoutes','rootContainer','render','onRouteChange','dva','getInitialState','request',],
});
plugin.register({
  apply: require('E:/IDEA WorkSpace/ant-design/src/.umi/plugin-dva/runtime.tsx'),
  path: 'E:/IDEA WorkSpace/ant-design/src/.umi/plugin-dva/runtime.tsx',
});
plugin.register({
  apply: require('../plugin-initial-state/runtime'),
  path: '../plugin-initial-state/runtime',
});
plugin.register({
  apply: require('../plugin-model/runtime'),
  path: '../plugin-model/runtime',
});

export { plugin };

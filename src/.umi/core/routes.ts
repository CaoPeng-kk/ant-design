// @ts-nocheck
import { ApplyPluginsType } from 'E:/IDEA WorkSpace/ant-design/node_modules/@umijs/runtime';
import { plugin } from './plugin';

const routes = [
  {
    "path": "/",
    "component": require('E:/IDEA WorkSpace/ant-design/src/layouts').default,
    "routes": [
      {
        "path": "/Hello",
        "component": require('E:/IDEA WorkSpace/ant-design/src/pages/Hello').default,
        "exact": true
      },
      {
        "path": "/List",
        "component": require('E:/IDEA WorkSpace/ant-design/src/pages/List').default,
        "exact": true
      },
      {
        "path": "/Transac",
        "component": require('E:/IDEA WorkSpace/ant-design/src/pages/Transac').default,
        "exact": true
      }
    ]
  }
];

// allow user to extend routes
plugin.applyPlugins({
  key: 'patchRoutes',
  type: ApplyPluginsType.event,
  args: { routes },
});

export { routes };

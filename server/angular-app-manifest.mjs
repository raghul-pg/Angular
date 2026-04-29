
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/your-repo-name/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/your-repo-name"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1037, hash: 'd5f5f18bcc18f8d55d86e8d0568bd13616545ec25d96f9c9bde5aa1b01267b73', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 962, hash: '3d1f82157a0706b29c1d74490bd9b2d5dac10f958150d95a643b23737bb5dee5', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 16459, hash: '3d3a8adb5c014bb906ff8ca54fd853f315fa9bd4a6767e29ccfda98d3d4f7d63', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-XEDEUV75.css': {size: 470, hash: 'WKdclMM65EE', text: () => import('./assets-chunks/styles-XEDEUV75_css.mjs').then(m => m.default)}
  },
};

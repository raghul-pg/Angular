
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Angular/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Angular"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1030, hash: 'e9aa263e7aa1a4c8ac2a6a176488f21eb2d759cf02e6aa82e839388d72d83f09', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 955, hash: '4d9471f9b227a29eb8398247891937ed91148f617007978d31b43923fe6d1d89', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 16452, hash: 'c39ed3172fda22bdbc86a065e5b08cad422bdf760aae62d3f7f4f402c502fdf6', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-XEDEUV75.css': {size: 470, hash: 'WKdclMM65EE', text: () => import('./assets-chunks/styles-XEDEUV75_css.mjs').then(m => m.default)}
  },
};

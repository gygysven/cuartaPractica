
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'C:/Program Files/Git/cuartaPractica/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Program%20Files/Git/cuartaPractica"
  },
  {
    "renderMode": 2,
    "route": "/Program%20Files/Git/cuartaPractica/about"
  },
  {
    "renderMode": 2,
    "route": "/Program%20Files/Git/cuartaPractica/products"
  },
  {
    "renderMode": 2,
    "route": "/Program%20Files/Git/cuartaPractica/contact"
  },
  {
    "renderMode": 2,
    "redirectTo": "/Program%20Files/Git/cuartaPractica",
    "route": "/Program%20Files/Git/cuartaPractica/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5364, hash: '818423dec546de2e2fe7b76b0df85ecda394195a28f857bfd8724c7e3444e7cb', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1181, hash: '1c9cb95fef9a42e07535126ee1d9c655e47f0ef6b8017e39923f8f36de269014', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-Y226JDBH.css': {size: 231184, hash: '7tZD6SJQTio', text: () => import('./assets-chunks/styles-Y226JDBH_css.mjs').then(m => m.default)}
  },
};

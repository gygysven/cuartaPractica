
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/about"
  },
  {
    "renderMode": 2,
    "route": "/products"
  },
  {
    "renderMode": 2,
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "redirectTo": "/",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5329, hash: '022792ee0469eb1c67ec6e478a4ba24282dc52c65dede0161707df721f0e5f67', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1146, hash: 'ceb0b8f32fc4091ab5a55eb3495d7ebc1c42e91e81b79251fc29b8c3eb6fb467', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'products/index.html': {size: 11688, hash: '907a8dff362043b7fd72e6fcab26af3774c41275fdb380103563e8345d0f23bc', text: () => import('./assets-chunks/products_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 11679, hash: '6bc00c4bf81138f331b39f72bf6edc193ae07d6af62cee42eb0daecbb3b9aa1c', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 11685, hash: 'a8f398ddaf142f5b006f515dcc6d8933424b2c46c0da186953759033ff48c29c', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'index.html': {size: 18107, hash: '6045d06e1f8024bf921de8cd57b26132cfd986bd78009f0909664a3cf65cdc34', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-Y226JDBH.css': {size: 231184, hash: '7tZD6SJQTio', text: () => import('./assets-chunks/styles-Y226JDBH_css.mjs').then(m => m.default)}
  },
};

# vue-qrcode

> Qrcode component for [Vue.js](https://vuejs.org/). It is based on [QRious](https://github.com/neocotic/qrious).

- [Website](https://xkeshi.github.io/vue-qrcode)

## Table of contents

- [Main](#main)
- [Getting started](#getting-started)
- [Props](#props)
- [Browser support](#browser-support)
- [Versioning](#versioning)
- [License](#license)

## Main

```text
dist/
├── vue-qrcode.js        (75 KB, UMD)
├── vue-qrcode.min.js    (18 KB, UMD, compressed)
├── vue-qrcode.common.js (75 KB, CommonJS)
└── vue-qrcode.esm.js    (75 KB, ES Module)
```

## Getting started

### Install

```shell
npm install @xkeshi/vue-qrcode
```

### Usage

- Browser: `window.VueQrcode`
- CommonJS: `var VueQrcode = require('@xkeshi/vue-qrcode')`
- ES2015: `import VueQrcode from '@xkeshi/vue-qrcode'`

```js
Vue.component('qrcode', VueQrcode);
```

```html
<qrcode value="Hello, World!" :options="{ size: 200 }"></qrcode>
```

[⬆ back to top](#table-of-contents)

## Props

### value

- Type: `String`

The value of the qrcode.

### options

- Type: `Object`

The options for the qrcode generator. References the [QRious's options](https://github.com/neocotic/qrious#api).

### tag

- Type: `String`
- Default: `'canvas'`
- Options: `'canvas'` and `'img'`

The tag of the component root element.

## Browser support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Opera (latest)
- Edge (latest)
- Internet Explorer 9+

## Versioning

Maintained under the [Semantic Versioning guidelines](http://semver.org/).

## License

[MIT](http://opensource.org/licenses/MIT) © [Xkeshi](http://xkeshi.com)

[⬆ back to top](#table-of-contents)

# vue-input-dropdown

[![npm](https://img.shields.io/npm/v/vue-input-dropdown.svg) ![npm](https://img.shields.io/npm/dm/vue-input-dropdown.svg)](https://www.npmjs.com/package/vue-input-dropdown)
[![vue2](https://img.shields.io/badge/vue-2.x-brightgreen.svg)](https://vuejs.org/)

A simple to use, highly customizable input dropdown component for Vue

## Table of contents

- [Installation](#installation)
- [Usage](#usage)
- [Example](#example)

# Installation

```
npm install --save vue-input-dropdown
```

## Default import

Install all the components (theres just one for now):

```javascript```
import Vue from 'vue'
import VueInputDropdown from 'vue-input-dropdown'

Vue.use(VueInputDropdown)

```

**⚠️ A css file is included when importing the package. You may have to setup your bundler to embed the css in your page.**

## Distribution import

Install all the components:

```javascript
import 'vue-input-dropdown/dist/vue-input-dropdown.css'
import VueInputDropdown from 'vue-input-dropdown/dist/vue-input-dropdown.common'

Vue.use(VueInputDropdown)
```


**⚠️ You may have to setup your bundler to embed the css file in your page.**

## Browser

```html
<link rel="stylesheet" href="vue-input-dropdown/dist/vue-input-dropdown.css"/>

<script src="vue.js"></script>
<script src="vue-input-dropdown/dist/vue-input-dropdown.browser.js"></script>
```

The plugin should be auto-installed. If not, you can install it manually with the instructions below.

Install all the components:

```javascript
Vue.use(VueInputDropdown)
```

## Source import

Install all the components:

```javascript
import Vue from 'vue'
import VueInputDropdown from 'vue-input-dropdown/src'

Vue.use(VueInputDropdown)
```

Use specific components:

```javascript
import Vue from 'vue'
import { VueInputDropdown } from 'vue-input-dropdown/src'

Vue.component('vue-input-dropdown', VueInputDropdown)
```

**⚠️ You need to configure your bundler to compile `.vue` files.** More info [in the official documentation](https://vuejs.org/v2/guide/single-file-components.html).

# Usage

> TODO

# Example

> TODO

---

# Plugin Development (feel free to create pull requests and I'll look over them)

> TODO: 
    - CREATE PROPER DEV ENVIRONMENT TO TEST USAGE AND IMPORTS
    - EDIT ESLINT OR JUST REMOVE 

## Installation

The first time you create or clone your plugin, you need to install the default dependencies:

```
npm install
```

## Watch and compile

This will run webpack in watching mode and output the compiled files in the `dist` folder.

```
npm run dev
```

## Use it in another project

While developping, you can follow the install instructions of your plugin and link it into the project that uses it.

In the plugin folder:

```
npm link
```

In the other project folder:

```
npm link vue-input-dropdown
```

This will install it in the dependencies as a symlink, so that it gets any modifications made to the plugin.

## Publish to npm

You may have to login to npm before, with `npm adduser`. The plugin will be built in production mode before getting published on npm.

```
npm publish
```

## Manual build

This will build the plugin into the `dist` folder in production mode.

```
npm run build
```

---

## License

[MIT](http://opensource.org/licenses/MIT)

# vue-schema-microdata

> Vue plugin/directive for adding schema.org microdata tags to your markup

## Install
```sh
npm install vue-schema-microdata
# or
yarn add vue-schema-microdata
```

## Basic usage
```js
// Import and install plugin
import VueSchemaMicrodata from 'vue-schema-microdata'
Vue.use(VueSchemaMicrodata)
```

```html
<!-- Use v-schema directive in your markup -->

<div v-schema:scope="{ type: 'Product', prop: 'itemListElement' }">
    <a href="#" v-schema="{ prop: 'url'}">
        <img src="https://via.placeholder.com/150x100?text=ProductImage" v-schema="{ prop: 'image' }" />
    </a>
    <h2 v-schema="{ prop: 'name' }">Product name</h2>
    <h4 v-schema="{ prop: 'category' }">Product category</h4>
    <div v-schema:scope="{ type: 'Offer', prop: 'offers' }">
        <span v-schema="{ prop: 'priceCurrency', content: 'USD' }">$</span>
        <span v-schema="{ prop: 'price' }">129.80</span>
    </div>
</div>
```

### Itemscope
```html
<div v-schema:scope> ... </div>

<!-- or -->

<div v-schema="{ scope: true }"> ... </div>
```

### Itemtype
```html
<div v-schema:scope="{ type: 'Movie' }"> ... </div>
```
Types will be prefixed with "https://schema.org/" by default. You can change this URL with the `schemaUrl` property in the plugin settings.

### Itemprop
```html
<img v-schema="{ prop: 'image' }" />

<!-- with additional tags -->
<span v-schema="{ prop: 'priceCurrency', content: 'USD' }">$</span>
```
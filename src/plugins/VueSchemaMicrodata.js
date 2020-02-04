/**
 * Vue plugin/directive for adding schema.org microdata tags to your markup
 * Author: Jonas Schwendener <jonas.schwendener@gmail.com>
 */
export default {
    install(Vue, pluginOptions = {}) {
        const defaultOptions = {
            schemaUrl: 'https://schema.org/'
        }

        pluginOptions = {
            ...defaultOptions,
            ...pluginOptions
        }

        Vue.directive('schema', {
            bind(el, bindings) {
                if (bindings.arg === 'scope') {
                    el.setAttribute('itemscope', '')
                }
        
                const schema = bindings.value
                if (!schema) {
                    return
                }
        
                Object.keys(schema).forEach(key => {
                    if (key === 'scope') {
                        el.setAttribute('itemscope', '')
                    } else if (key === 'type') {
                        el.setAttribute('itemtype', pluginOptions.schemaUrl + schema[key])
                    } else if (key === 'prop') {
                        el.setAttribute('itemprop', schema[key])
                    } else {
                        el.setAttribute(key, schema[key])
                    }
                })
            }
        })
    }
}
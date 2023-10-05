import Vue from 'vue'
import App from './App.vue'
import VueDataDict from 'vue-data-dict'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

const pluginOptions = {
  onCreated(dict) {
    console.log('dict created: %o', dict)
  },
  onReady(dict) {
    console.log('dict ready: %o', dict)
  },
  DEFAULT_LABEL_FIELDS: ['label', 'name', 'title'],
  DEFAULT_VALUE_FIELDS: ['value', 'id', 'uid', 'key'],
  metas: {
    '*': {
      request(meta) {
        console.log(meta)
        return []
      }
    },
    lang: {
      type: 'lang',
      request() {
        return new Promise((resolve) => {
          setTimeout(function() {
              resolve([
                { label: 'js', value: 1 },
                { label: 'java', value: 2 },
                { label: 'c', value: 3 },
              ])
          }, 1000)
        })
      },
      responseConverter(response, dictMeta) {
        return response.map(e => VueDataDict.convertData(e, dictMeta))
      },
      labelField: 'label',
      valueField: 'value',
      lazy: false,
      lookup: false,
    }
  }
}


Vue.use(ElementUI)
Vue.use(VueDataDict, pluginOptions)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

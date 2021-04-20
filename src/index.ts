try {
  // 判断是否能引用的到，并不真的引用
  require.resolve('dayjs/dayjs.min')
} catch (e) {
  throw new Error(
    'vite-plugin-vue-antd-dayjs plugin requires dayjs to be present in the devDependency ' +
      'tree.'
  )
}
import { Plugin } from './my-types'
import momentToDayjsPluginsInAntdVue from './map-to-dayjs-plugins'

export default function vitePluginVueForAntdDayjs(): Plugin {
  const isAntdvueId = 'moment-to-dayjs-for-antd-vue'
  return {
    name: 'vite-plugin-vue-for-antd-dayjs',
    enforce: 'pre', // 加载vite内置插件之前加载
    config: () => ({
      resolve: {
        alias: {
          moment: 'dayjs', // set dayjs alias 
        }
      }
    }), // 在被解析之前修改 Vite 配置
    resolveId(id: string) { // 每个传入的模块请求时被调用
      if (isAntdvueId === id) {
        console.log('resolveid id test', id)
        return id
      }
    },
    load(id: string) { // 每个传入的模块请求时被调用
      if (isAntdvueId === id) {
        console.log('load id', id)
        const momentTransforeToDayjs = `import dayjs from 'dayjs';`
        const depStr = momentToDayjsPluginsInAntdVue().join('')
        return momentTransforeToDayjs + depStr 
      }
    },
  }
}

// overwrite for cjs require('...')() usage
module.exports = vitePluginVueForAntdDayjs
vitePluginVueForAntdDayjs['default'] = vitePluginVueForAntdDayjs
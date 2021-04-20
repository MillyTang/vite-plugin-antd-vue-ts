import { momentToDayjsPluginsInAntdVue } from './my-types'

const presets = {
  'antd-design-vue': {
    plugins: [
      'isSameOrBefore',
      'isSameOrAfter',
      'advancedFormat',
      'customParseFormat',
      'weekday',
      'weekYear',
      'weekOfYear',
      'isMoment',
      'localeData',
      'localizedFormat',
    ]
  }
}
export default function momentToDayjsPluginsInAntdVue(): momentToDayjsPluginsInAntdVue {
  const plugins = presets['antd-design-vue'].plugins.map(plugin => {
    return `import ${plugin} from 'dayjs/plugin/${plugin}';` 
  })
  const extendPlugins =  presets['antd-design-vue'].plugins.map(plugin => {
    return `dayjs.extend(${plugin});` 
  })
  const specialPlugin = [`import 'dayjs/locale/zh-cn';dayjs.locale('zh-cn');`]
  return [...plugins, ...extendPlugins, ...specialPlugin]
}
import Button from './packages/components/button/index' //按钮组件
import Icon from './packages/components/icon/index' //Icon组件
const components = [
  Button,Icon
]

const install = (Vue) => {
  components.forEach((component) => Vue.component(component.name, component))
}

export default {
  version: 1.0,
  install,
  Button,

}

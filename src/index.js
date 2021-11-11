import Button from './packages/components/button/index' //按钮组件

const components = [
  Button,
]

const install = (Vue) => {
  components.forEach((component) => Vue.component(component.name, component))
}

export default {
  version: 1.0,
  install,
  Button,

}

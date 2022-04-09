import components from'./components'

const breezzyUi = {
  install (Vue) {
     for (const prop in components) {
          if (components.hasOwnProperty(prop)) {
               const component = components[prop]
               Vue.component(component.name, component)
          }
     }
  }
}

export default breezzyUi
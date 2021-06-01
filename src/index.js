import CodeMirror from './components/codemirror.vue'

const install = (Vue, config) => {
  if (config) {
    if (config.options) {
      CodeMirror.props.globalOptions.default = () => config.options
    }
    if (config.events) {
      CodeMirror.props.globalEvents.default = () => config.events
    }
  }
  Vue.component(CodeMirror.name, CodeMirror)
}

export default { install }

export { default as CodeMirror } from './components/codemirror.vue'

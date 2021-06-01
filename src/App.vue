<template>
  <div class="codePanel">
    <CodeMirror ref="cmEditor" class="cmEditor" v-model:value="code" :options="cmOptions"/>
  </div>
</template>

<script>

// region codemirror

import 'codemirror/lib/codemirror.css'
// 代码高亮
import 'codemirror/mode/javascript/javascript.js'
// 主题
import 'codemirror/theme/idea.css'
// vim keyMap
import 'codemirror/addon/dialog/dialog.css'
import 'codemirror/keymap/sublime.js'
import 'codemirror/addon/search/search'
import 'codemirror/addon/search/searchcursor.js'
import 'codemirror/addon/dialog/dialog.js'
// 代码折叠
import 'codemirror/addon/fold/foldgutter.css'
import 'codemirror/addon/fold/foldcode.js'
import 'codemirror/addon/fold/foldgutter.js'
import 'codemirror/addon/fold/brace-fold.js'
import 'codemirror/addon/fold/comment-fold.js'
// 全屏
import 'codemirror/addon/display/fullscreen.css'
import 'codemirror/addon/display/fullscreen.js'
// 括号匹配
import 'codemirror/addon/edit/matchbrackets.js'
import 'codemirror/addon/edit/closebrackets.js'
// 自动补全
import 'codemirror/addon/hint/show-hint.css'
import 'codemirror/addon/hint/show-hint.js'
import 'codemirror/addon/hint/anyword-hint.js'
// 行注释
import 'codemirror/addon/comment/comment.js'
// 代码错误
import jsonlint from 'jsonlint-mod'
import 'codemirror/addon/lint/lint.css'
import 'codemirror/addon/lint/lint.js'
import 'codemirror/addon/lint/json-lint.js'
import CodeMirror from '@/components/codemirror.vue'
window.jsonlint = jsonlint
// endregion

export default {
  name: 'JSON编辑器',
  data: () => ({
    code: '{}',
    cmOptions: {
      // Js高亮显示
      mode: {
        name: 'javascript',
        json: true
      },
      tabSize: 2,
      indentUnit: 2, // 缩进单位，默认2
      smartIndent: true, // 是否智能缩进
      // 显示行号
      styleActiveLine: true,
      lineNumbers: true,
      // 设置主题
      theme: 'idea',
      // 绑定Vim
      keyMap: 'sublime',
      // 代码折叠
      lineWrapping: true,
      foldGutter: true,
      gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter', 'CodeMirror-lint-markers'],
      // CodeMirror-lint-markers是实现语法报错功能
      lint: true,

      // 全屏模式
      fullScreen: false,

      // 括号匹配
      matchBrackets: true,
      autoCloseBrackets: true
    }
  }),
  computed: {
    codemirror: function () {
      return this.$refs.cmEditor.codemirror
    }
  },
  components: {
    CodeMirror
  },
  mounted() {
    this.codemirror.setSize('100%', '100%')
  },
  beforeUnmount() {
    this.destroy()
  },
  methods: {
    destroy() {
      const element = this.codemirror.doc.cm.getWrapperElement()
      element && element.remove && element.remove()
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

.codePanel {
  width: 100%;
  max-width: 700px;
  height: 500px;
  border: #16b0f6 1px solid;
  margin: 0 auto;
  overflow: hidden;

  .cmEditor {
    width: 100%;
    height: 100%;
  }
}
</style>

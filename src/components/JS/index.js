import Vue from 'vue'
import MessageBox from './MessageBox'

export let messageBox = (function (){
  return function (opts){  // 配置参数
    let defaults = {  // 默认值
      title: '',
      content: '',
      cancel: '',
      ok: '',
      handleCancel: null,
      handleOk: null
    }

    for(let attr in opts){
      defaults[attr] = opts[attr]
    }

    let MyComponent = Vue.extend(MessageBox)

    let vm = new MyComponent({
      el: document.createElement('div'),
      data: {
        title: defaults.title,
        content: defaults.content,
        cancel: defaults.cancel,
        ok: defaults.ok
      },
      methods: {
        handleCancel(){
          defaults.handleCancel && defaults.handleCancel.call(this)
          document.body.removeChild( vm.$el )
        },
        handleOk(){
          defaults.handleOk && defaults.handleOk.call(this)
          document.body.removeChild( vm.$el )
        }
      }
    })
    console.log(666)
    document.body.appendChild( vm.$el )
  }
})()
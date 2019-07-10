import Vue from 'vue'
import Modal from './Modal.vue'

const createElement = (marker,calback) => {
    let target = document.getElementById(marker)
    let block = document.querySelector('block')
    let parent = document.querySelector('#app') || document.body
    parent.appendChild(block)
    let el = document.createElement('div')
    if(target === null) { 
        el.setAttribute('id',marker)
        el.setAttribute(marker,'')
        parent.appendChild(el)
    }
    calback(target)
}


class ModalManager {
    constructor () {
        this.modal = null
    }
    createComponent(component,options)  {
        createElement('block')
        if (!document.querySelector('[block]')) {
            createElement('block')
            let ClickBlockComponent = Vue.extend(ClickBlock)
            new ClickBlockComponent().$mount('[block]')
        }    

        let ModalComponent = Vue.extend(Modal)
        this.modal = new ModalComponent({
            propsData : {
                options : options
            }
        })
        createElement('block',(target) => {
            this.modal.$mount(target)
        })
        if(component) {
            let ContentComponent = Vue.extend(component)
            let content = new ContentComponent()
            content.$mount(this.modal.$el.querySelector('#_north_modal_content'))
            this.modal.content = content
        } 
        return new Promise((resolve) => {
            resolve(this.modal)
        })
    }
    
    destory(modal) {
        if(modal) {
            modal.$destroy()
        }
    }
}

window.$modal = new ModalManager()
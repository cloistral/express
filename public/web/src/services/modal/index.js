import Vue from 'vue'
import Modal from './Modal.vue'

const createElement = (marker,tag) => {
    console.log(marker)
    let target =document.querySelector( '#' + marker)
    console.log(target)
    let body = document.body
    if(!target) {
        let el = document.createElement(tag || 'div')
        el.setAttribute('id',marker)
        body.appendChild(el)
    }
}


class ModalManager {
    constructor () {
        this.modal = null
    }
    createComponent(component,options)  {
        
       
        let ModalComponent = Vue.extend(Modal)
        this.modal = new ModalComponent({
            propsData : {
                options : options
            }
        })
        this.modal.$mount('#modal')
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
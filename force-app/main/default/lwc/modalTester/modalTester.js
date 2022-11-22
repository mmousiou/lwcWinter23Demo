import { LightningElement } from 'lwc'
import MyModal from 'c/lwcModal'

export default class ModalTester extends LightningElement {
  okPressed = false
  cancelPressed = false
  openModal () {
    MyModal.open({
      label: 'Modal',
      size: 'medium',
      header: 'Lightning Modal example',
      description: 'test modal',
      content: '<h3> This is a modal body tittle</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><br><a href="https://developer.salesforce.com/docs/component-library/bundle/lightning-modal/documentation">Lighting-modal documentation</a>',
      buttons: [
        {label: 'Cancel', name: 'cancel'},
        {label: 'Ok', name:'ok', variant:'brand'}
      ],
      onselect: (e) => {
        e.stopPropagation()
        this.handleSelect(e)
      }
    }).then((res) => {
      console.log('👾 Modal close mode: ', res)
    })
  }

  handleRemove () {
    this.okPressed = false
    this.cancelPressed = false
  }

  handleSelect (e) {
    const name = e.detail
    if (name === 'ok') {
      this.okPressed = true
    } else {
      this.cancelPressed = true
    }
    console.log('🪀 event dispatched!! ',name)
  }
}
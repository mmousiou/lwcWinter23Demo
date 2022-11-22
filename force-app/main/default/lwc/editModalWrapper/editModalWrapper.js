import { LightningElement } from 'lwc';
import MyModal from 'c/editRecordModal'

export default class EditModalWrapper extends LightningElement {
  async openModal () {
    await MyModal.open({
      label: 'Modal',
      size: 'medium',
      header: 'Create new Account',
      description: 'Modal with create record form'})
  }
}
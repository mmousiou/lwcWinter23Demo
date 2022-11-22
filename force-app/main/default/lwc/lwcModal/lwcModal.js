import { api } from 'lwc'
import LightningModal from 'lightning/modal'

export default class LwcModal extends LightningModal {
  @api header
  @api content
  @api buttons

  handleButtonClick (e) {
    const name = e.target.dataset.id
    const event = new CustomEvent('select', { detail: name })
    this.dispatchEvent(event)
    this.close(name)
  }
}
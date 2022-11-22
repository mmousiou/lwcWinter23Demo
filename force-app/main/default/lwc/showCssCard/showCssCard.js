import { LightningElement, wire } from 'lwc'
import { subscribe, MessageContext  } from 'lightning/messageService'
import DemoMC from '@salesforce/messageChannel/DemoMessageChannel__c'

export default class ShowCssCard extends LightningElement {
  subscription = null
  payload
  showApp
  text = 
  '.myButton {</br>'+
    '&nbsp--slds-c-button-brand-color-background: purple;</br>' + 
    '&nbsp--slds-c-button-brand-color-border: purple;</br>'+
  '}</br>'+
  '</br>'+
  '.myLightningButton {</br>'+
    '&nbsp--slds-c-button-brand-color-background: rgb(36, 225, 36);</br>' + 
    '&nbsp--slds-c-button-brand-color-border: rgb(36, 225, 36);</br>' +
  '}</br>'

  closeCard () {
    this.showApp=false
  }
  

  @wire(MessageContext)
    messageContext

  subscribeToMessageChannel() {
    this.subscription = subscribe(
        this.messageContext,
        DemoMC,
        (message) => { 
          this.payload = message.payload
          this.showApp = this.payload.showCss
        }
    )
  }

  connectedCallback() {
    this.subscribeToMessageChannel();
  } 
}
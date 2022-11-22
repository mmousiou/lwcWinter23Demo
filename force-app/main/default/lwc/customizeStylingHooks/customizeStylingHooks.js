import { LightningElement, wire } from 'lwc'
import DemoMC from '@salesforce/messageChannel/DemoMessageChannel__c'
import {publish, MessageContext} from 'lightning/messageService'

export default class CustomizeStylingHooks extends LightningElement {
  @wire(MessageContext)
    messageContext;

    // Respond to UI event by publishing message
    openLightningCard(event) {
        const payload = { payload: { showCss: true } }
        publish(this.messageContext, DemoMC, payload)
    }
}
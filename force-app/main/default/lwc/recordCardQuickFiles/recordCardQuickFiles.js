import { LightningElement, api } from 'lwc'
import LightningConfirm from "lightning/confirm"
import LightningAlert from 'lightning/alert'
import LightningPrompt from 'lightning/prompt'

export default class RecordCardQuickFiles extends LightningElement {
  async confirm() {
  const confirmation = await LightningConfirm.open({
    message: 'This is a confirm message. Press ok to confirm.​',
    variant: 'header', 
    theme: 'warning',
    label: 'Please Confirm'})
    if (confirmation) {
      console.log('🐾 If you press ok true is returned as a result!!')
    } else {
      console.log('🐾 If you press cancel false is returned as a result!!')
    }
  }

  async alert() {
    await LightningAlert.open({
      message: 'This is an alert message​',
      theme: 'error',
      label: 'Alert!'})
  }

  async prompt() {
    LightningPrompt.open({
      message: 'this is the prompt message',
      theme: 'offline',
      label: 'Please Respond', // this is the header text
      defaultValue: 'initial input value', //this is optional
    }).then((result) => {
        //Prompt has been closed
        //result is input text if OK clicked
        //and null if cancel was clicked
        console.log('✨ prompt input ',result)
    });
  }
}
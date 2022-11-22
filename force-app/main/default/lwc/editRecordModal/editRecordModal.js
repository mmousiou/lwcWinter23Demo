import { api, wire } from 'lwc'
import LightningModal from 'lightning/modal'
import { ShowToastEvent } from 'lightning/platformShowToastEvent'
import NAME_FIELD from '@salesforce/schema/Account.Name'
import REVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue'
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry'
import TYPE_FIELD from '@salesforce/schema/Account.Type'

export default class EditRecordModal extends LightningModal {
  @api header
  @api content
  @api buttons
  objectApiName = 'Account'

  handleCancel (e) {
    this.close('Cancel')
  }

  fields = [NAME_FIELD, TYPE_FIELD, REVENUE_FIELD, INDUSTRY_FIELD]

  handleSuccess(event) {
      const evt = new ShowToastEvent({
          title: 'Account created',
          message: 'Record ID: ' + event.detail.id,
          variant: 'success',
      })
      this.dispatchEvent(evt)
      this.close('Save')
  }
}
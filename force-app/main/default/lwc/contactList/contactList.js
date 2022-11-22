import { LightningElement, api, wire } from "lwc"

import getContact from "@salesforce/apex/AccountListController.getContacts"

const CONTACT_COLUMNS = [
    { fieldName: "Name", label: "Name" },
    { fieldName: "Email", label: "Email", type: "email" },
    { fieldName: "Phone", label: "Phone", type: "phone" }
]
export default class ContactList extends LightningElement {
    @api recordId
    @api accountName

    columnsList = CONTACT_COLUMNS

    get showData () {
        return this.wiredContacts?.data?.length > 0 || false
    }

    @wire(getContact, { accountId: "$recordId" })
    wiredContacts
}
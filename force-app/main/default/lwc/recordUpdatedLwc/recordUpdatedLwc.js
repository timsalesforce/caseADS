import { LightningElement, api, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import IS_CLOSED from '@salesforce/schema/Case.IsClosed';

export default class RecordUpdatedLwc extends LightningElement {
    @api recordId;

    @wire(getRecord, { recordId: '$recordId', fields: [IS_CLOSED] })
    record;
}
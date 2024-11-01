import { LightningElement, track,wire } from 'lwc';
import wirePropertyMerthod from '@salesforce/apex/WireProperty.wirePropertyMerthod';
export default class WirePropertyWithDataTable extends LightningElement 
{
    @track WireProperty;

    @track clms=[{label:'AccountName', fieldName:'Name', type:'text'},
                 {label:'Rating', fieldName:'Rating', type:'text'},
                 {label:'Industry', fieldName:'Industry', type:'text'},
                 {label:'Phone', fieldName:'Phone', type:'text'},
                 {label:'Fax', fieldName:'Fax', type:'text'},
                 {label:'AnnulRevenue', fieldName:'AnnulRevenue', type:'currency'},
                 {label:'Active', fieldName:'Active__c', type:'boolean'},];
        
    @wire(wirePropertyMerthod)WireProperty;

}
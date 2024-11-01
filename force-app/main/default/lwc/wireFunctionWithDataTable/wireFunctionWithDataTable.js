import { LightningElement,track,wire } from 'lwc';
import wirePropertyMerthod from '@salesforce/apex/WireProperty.wirePropertyMerthod';
export default class WireFunctionWithDataTable extends LightningElement 
{

    @track myvarible;
    @track numberofRecords;

    @track clms = [{label:'Account Name', fieldName:'Name', type:'text'},
                   {label:'Rating', fieldName:'Rating', type:'text'},
                   {label:'Industry', fieldName:'Industry', type:'text'},
                   {label:'Phone', fieldName:'Phone', type:'text'},
                   {label:'Fax', fieldName:'Fax', type:'text'},
                   {label:'AnnulRevenue', fieldName:'AnnulRevenue', type:'currency'},
                   {label:'Active', fieldName:'Active__c', type:'boolean'}];


    @wire(wirePropertyMerthod)wirefunction({data,error})
    {
        if(data)
        {
              this.myvarible = data;
              this.numberofRecords = data.length;
        }
        else if(error)
        {
              this.myvarible = error;
        }
    }


}
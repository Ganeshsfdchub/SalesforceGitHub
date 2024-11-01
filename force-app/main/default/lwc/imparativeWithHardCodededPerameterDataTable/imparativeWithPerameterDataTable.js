import { LightningElement, track } from 'lwc';
import imparativeMethod from '@salesforce/apex/impareive.imparativeMethod';
export default class ImparativeWithPerameterDataTable extends LightningElement 
{

    @track myvarible;
    @track lengthvarible;

    @track clms =  [{label:'Account Name',fieldName:'Name', type:'text'},
                   {label:'Account Rating',fieldName:'Rating', type:'text'},
                   {label:'Account Industry',fieldName:'Industry', type:'text'},
                   {label:'Account Phone',fieldName:'Phone', type:'text'},
                   {label:'Account Active',fieldName:'Active__c', type:'boolean'},
                   {label:'Annualrevenue', fieldName:'AnnualRevenue', type:'currency'},
                   {label:'Account Fax',fieldName:'Fax', type:'text'}]; 

        
    hndlbtn()
    {
        (imparativeMethod)({txt:'Ga'})
        .then(result=>
            {
               this.myvarible = result;
               this.lengthvarible = result.length;  
            })
        .catch(error=>
            {
                this.myvarible = error;
            })
    }
}
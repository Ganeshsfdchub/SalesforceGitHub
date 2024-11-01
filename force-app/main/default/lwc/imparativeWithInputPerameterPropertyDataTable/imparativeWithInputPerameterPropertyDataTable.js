import { LightningElement, track } from 'lwc';
import imparativeMethod from '@salesforce/apex/impareive.imparativeMethod';
export default class ImparativeWithInputPerameterPropertyDataTable extends LightningElement 
{
   @track inputvariable;
   @track myrsult;


   @track clm = [{label:'Name', fieldName:'Name', type:'text'},
                 {label:'Industry', fieldName:'Industry', type:'text'},
                 {label:'Rating', fieldName:'Rating', type:'text'},
                 {label:'Annualrevenue', fieldName:'AnnualRevenue', type:'currency'},
                 {label:'Phone', fieldName:'Phone', type:'phone'},
                 {label:'Fax', fieldName:'Fax', type:'fax'},
                 {label:'Active', fieldName:'Active__c', type:'boolean'}];



    hndlchnge(event)
    {
        this.inputvariable = event.target.value;
    }
    hnlbtn()
    {
        (imparativeMethod)({txt:this.inputvariable})
        .then(result=>{

            this.myrsult =result

        })
        .catch(error=>{

            this.myrsult = error;

        })
    }

}
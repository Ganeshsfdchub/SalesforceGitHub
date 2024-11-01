import { LightningElement, track } from 'lwc';
import imparatingMethod from '@salesforce/apex/Imparating.imparatingMethod';
export default class ImparativeWithInputPerameterDataTable extends LightningElement 
{
   @track namevariable;
   @track resultvarible;
   @track lengthvarible;
   @track clms =  [{label:'Account Name',fieldName:'Name', type:'text'},
                   {label:'Account Rating',fieldName:'Rating', type:'text'},
                   {label:'Account Industry',fieldName:'Industry', type:'text'},
                   {label:'Account Phone',fieldName:'Phone', type:'text'},
                   {label:'Account Active',fieldName:'Active__c', type:'boolean'},
                   {label:'Annualrevenue', fieldName:'AnnualRevenue', type:'currency'},
                   {label:'Account Fax',fieldName:'Fax', type:'text'}]; 
                   
   hndlename(event)
   {
      this.namevariable = event.target.value;
   }               
   hndlsbmt()
   {
      (imparatingMethod)({txt:this.namevariable})
      .then(result=>{
   
            this.resultvarible = result;
            this.lengthvarible = result.length; 
      })
      .catch(error=>{
            
               console.log('Error Occured'+error);
               this.resultvarible = error;
      })
   }              
}
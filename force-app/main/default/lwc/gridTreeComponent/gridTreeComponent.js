import { LightningElement,track } from 'lwc';
import TreeGridmethod from '@salesforce/apex/TreeGridClass.TreeGridmethod';
export default class GridTreeComponent extends LightningElement 
{

   @track Ename;
   @track griddata;
   @track selectionrows;
   @track lenghthrecords;
   
   @track gridclms = [{label:'Account Name', fieldName:'Name', type:'text'},
                      {label:'FirstName', fieldName:'FirstName', type:'text'},
                      {label:'LastName', fieldName:'LastName', type:'text'},
                      {label:'Industry', fieldName:'Industry', type:'text'},
                      {label:'Rating', fieldName:'Rating', type:'text'},
                      {label:'Annualrevenue', fieldName:'AnnualRevenue', type:'currency'},
                      {label:'Phone', fieldName:'Phone', type:'phone'},
                      {label:'Fax', fieldName:'Fax', type:'fax'},
                      {label:'Active', fieldName:'Active__c', type:'boolean'}];
    hndname(event) 
    {
        this.Ename = event.target.value;
    }
    submithandle()
    {
        (TreeGridmethod)({})
        .then(result=>
            {
               const temp = JSON.parse(JSON.stringify(result));

                for(let i=0; i<temp.length ; i++)
                    {
                           let RelatedContacts = temp[i]['Contacts'];

                       if(RelatedContacts)
                        {
                            temp[i]._children = RelatedContacts;
                            delete temp[i].Contacts;
                        }
                    }

                   this.griddata = temp;
                

            })
        .catch(error=>
            {
                console.error(error);
            })
    }
      /* selectionrows(event)
       {
              const selectedData = event.detail.selectedRows;
       } */                  

}
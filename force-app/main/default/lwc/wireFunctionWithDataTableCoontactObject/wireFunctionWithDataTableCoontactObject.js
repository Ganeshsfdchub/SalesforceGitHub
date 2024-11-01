import { LightningElement,track, wire } from 'lwc';
import Mywiremethod from '@salesforce/apex/wireclass.Mywiremethod';
export default class WireFunctionWithDataTableCoontactObject extends LightningElement 
{

   @track mydatavariable;
   @track mylengthvarible;

   @track clms = [{label:'FirstName', fieldName:'FirstName', type:'text'},
                  {label:'LastName', fieldName:'LastName', type:'text'},
                  {label:'Email', fieldName:'Email', type:'email'},
                  {label:'Phone', fieldName:'Phone', type:'text'},
                  {label:'Fax', fieldName:'Fax', type:'text'},
                  {label:'Account Name', fieldName:'AccountId', type:'text'}
   ];

   @wire(Mywiremethod)myfunction({data,error})
   {
      if(data)
      {       
        let temvariable = JSON.parse(JSON.stringify(data));
        temvariable.forEach(currentIten=>
          {
            currentIten.AccountId = currentIten.AccountId != undefined ?  currentIten.Account.Name : '';
          });

        this.mydatavariable = temvariable ;
        this.mylengthvarible = temvariable.length;
      }
      else if(error)
      {
        this.mydatavariable = error;
      }
   }
}
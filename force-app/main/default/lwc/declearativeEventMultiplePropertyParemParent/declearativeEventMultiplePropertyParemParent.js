import { LightningElement, track } from 'lwc';

export default class DeclearativeEventMultiplePropertyParemParent extends LightningElement 
{
  @track pname;
  @track pphone;
  @track pcompany;

   mymethod(event)
   {
     this.pname = event.detail.Name
     this.pphone = event.detail.Phone
     this.pcompany = event.detail.company
     
   }

}
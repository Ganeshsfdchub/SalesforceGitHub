import { LightningElement, track,api } from 'lwc';

export default class ApiMethodPerameterInputValuesPropertyChildComponent extends LightningElement 
{
    
  @track ShowResult; 
  @track secResult;

     @api inputmethod(capture)
     {
         this.ShowResult = capture.Name;
         this.secResult = capture.Company;
     }

} 
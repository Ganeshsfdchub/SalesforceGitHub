import { LightningElement, api, track } from 'lwc';

export default class ApiMethodPerameterHardcodedValuesChildComponent extends LightningElement 
{
      @track sriniproperty;
      

      @api sriniMethod(myperameter)
      {
          this.sriniproperty = myperameter.name +'  '+ myperameter.initial;
      }



      
     
    }
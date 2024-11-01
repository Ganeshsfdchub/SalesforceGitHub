import { LightningElement, track,wire } from 'lwc';
import  wirePropertyMerthod from '@salesforce/apex/WireProperty.wirePropertyMerthod';
export default class WireFunctionWithLightningCard extends LightningElement 
{
    @track myvarible;
    @track numberofRecords;

    @wire(wirePropertyMerthod)wirefunction({data,error})
    {
        if(data)
        {
           this.myvarible = data;
           this.numberofRecords =data.length;
        }
        else if(error)
        {
            this.myvarible = error;
        }
    }
}
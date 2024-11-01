import { LightningElement,track,wire } from 'lwc';
import wirePropertyMerthod from '@salesforce/apex/WireProperty.wirePropertyMerthod';
export default class WirePropertyWithLightningCard extends LightningElement 
{

    @track WireProperty;
    

    @wire(wirePropertyMerthod)WireProperty;
    

    
    
}
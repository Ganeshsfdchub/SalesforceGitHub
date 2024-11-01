import { LightningElement} from 'lwc';

export default class ApiMethodPerameterHardcodedValuesParentComponent extends LightningElement 
{
    
    
    btnhndl()
    {
       var showall = this.template.querySelector('c-api-method-perameter-hardcoded-values-child-component'); 
       var mesage = {'name':'srinivas', 'initial':'Ravinuthala'};
       showall.sriniMethod(mesage);

    } 
}


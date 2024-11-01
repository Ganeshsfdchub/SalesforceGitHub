import { LightningElement, track } from 'lwc';

export default class ApiMethodPerameterInputValuesPropertyParentComponent extends LightningElement 
{
    
    @track myvariable;
    @track mysecndvariable;

    hndleinput(event)
    {
       this.myvariable  = event.target.value;
    }
    hndlesecdinput(event)
    {
        this.mysecndvariable  = event.target.value;
    }
    ndlbtn()
    {
       var showall = this.template.querySelector('c-api-method-perameter-input-values-property-child-component');
       var perameter = {'Name':this.myvariable, 'Company':this.mysecndvariable};
       showall.inputmethod(perameter);
    } 
}
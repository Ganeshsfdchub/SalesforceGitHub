import { LightningElement } from 'lwc';

export default class ApiMethodNonPerameterParent extends LightningElement 
{

    hndlbtn()
    {
        var showmsg = this.template.querySelector('c-api-method-non-perameter-child');
        showmsg.mymthod();

    }

}
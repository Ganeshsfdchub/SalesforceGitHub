import { MessageContext, subscribe, unsubscribe } from 'lightning/messageService';
import { LightningElement, track, wire } from 'lwc';
import LMS_LWC_to_LWC_Component from '@salesforce/messageChannel/LMS_LWC_to_LWC_Component__c';
export default class LmsSubcriberComponent1 extends LightningElement 
{

    @track firstname;
    @track lastname;

    @track subcription = null;
    
    @wire (MessageContext)messageContext;

    connectedCallback()
    {
       this.SubcribeFunction();
    }
    disconnectedCallback()
    {
        this.UnSubcribeFunction();
    }


    SubcribeFunction()
    {
       if(!this.subcription)
        {
             this.subcription = subscribe(this.messageContext, LMS_LWC_to_LWC_Component,

                (myfunctionparameter)=>
                    {
                        this.firstname = myfunctionparameter.FirstName;
                        this.lastname = myfunctionparameter.LastName;
                    }
            );
        }
    }
    UnSubcribeFunction()
    {
        unsubscribe(this.subcription);
        this.subcription = null;
    }

}
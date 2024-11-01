import { MessageContext, publish } from 'lightning/messageService';
import { LightningElement, track, wire } from 'lwc';
import LMS_LWC_to_LWC_Component from '@salesforce/messageChannel/LMS_LWC_to_LWC_Component__c';
export default class LmsPublisherComponent1 extends LightningElement 
{
    @track firstname;
    @track lastname;

    @wire(MessageContext) messageContext

    hanlechange(event)
    {
       this.firstname = event.target.value
    }
    hndlchng(event)
    {
      this.lastname = event.target.value;
    }
    handleclick()
    {
       // Pass the code to subcribers
       const msg = {
                     FirstName:this.firstname, 
                     LastName:this.lastname
                  };
       publish(this.messageContext, LMS_LWC_to_LWC_Component, msg);
    }

} 
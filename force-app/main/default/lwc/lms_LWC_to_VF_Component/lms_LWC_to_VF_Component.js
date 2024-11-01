import { LightningElement, track} from 'lwc';
import SAMPLEMC from '@salesforce/messageChannel/LMS_LWC_to_VF_Component__c';
import {createMessageContext,publish, subscribe, unsubscribe } from 'lightning/messageService';
export default class Lms_LWC_to_VF_Component extends LightningElement 
{
      @track ReceivedMessage ='';
      @track MyMessage = '';
      Context = createMessageContext();
      Subcription = null;
     
  
         
      hnadlechange(event)
      {
        this.MyMessage =event.target.value;
      }

     PublishMC()
     {
           const msg = {
                          
                                    Message_To_Send: this.MyMessage ,
                                    Source_System: 'From lightning  Page',
                                    Mobile_Number: '7396056808'
                       };

          publish(this.Context, SAMPLEMC, msg);
     }
     SubcribeMC()
     {
             if(this.Subcription)
             {
               return;
             }
                this.Subcription = subscribe(this.Context, SAMPLEMC, 
                    (msg)=>
                        {
                           this.displyMessage(msg);
                            
                        });
        }

      
      displyMessage(msg)
      {
        this.ReceivedMessage = msg ? JSON.stringify(msg,null,'\t'):'no message'; 
      }
            
     
     unSubcribeMC()
     {
           unsubscribe(this.Subcription);
           this.Subcription = null;

     }  
  }

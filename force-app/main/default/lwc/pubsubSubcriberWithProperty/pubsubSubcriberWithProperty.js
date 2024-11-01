import { LightningElement, track } from 'lwc';
import pubsub from 'c/pubsub';
export default class PubsubSubcriberWithProperty extends LightningElement 
{

    @track myvariable;

   connectedCallback()
   {
      this.register()
   }
   register()
   {
       pubsub.register('publishevent', this.mymethod.bind(this))
   }
   mymethod(msg)
   {
      this.myvariable = msg ? JSON.stringify(msg,null,'\t'):'no message';
   }


}
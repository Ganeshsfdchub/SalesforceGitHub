import { LightningElement, track } from 'lwc';
import pubsub from 'c/pubsub';
export default class PubsubPublisherWithProperty extends LightningElement 
{

     @track inputvariable;


    handlinput(event)
    {
       this.inputvariable = event.target.value;
    } 
    hndlebtn()
    {
         let messag = 
                   {
                       'Sender Ganesh':this.inputvariable

                   };
        pubsub.fire('publishevent',messag);
    }
}

import { LightningElement, track } from 'lwc';
import pubsubconnect from 'c/pubsubconnect';
export default class PubsubSubcriberWithHardCoatedValues extends LightningElement 
{
    @track myvariable;

   connectedCallback()
   {
       this.register()
   }
   register()
   {
      pubsubconnect.register('myevent', this.mymthd.bind(this))
   }
   mymthd(newmsg)
   {
      this.myvariable =  newmsg ? JSON.stringify(newmsg,null,'\t'):'no messageee';

      //this.myvariable = JSON.stringify(newmsg);
   }

}
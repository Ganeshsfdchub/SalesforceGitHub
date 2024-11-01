import { LightningElement, track } from 'lwc';

export default class TrackMethodDecaratorComponent extends LightningElement 
{
   @track inputvarible;
   @track myvariable;

    handleinput(event)
    {
       this.inputvarible = event.target.value;
    }
    hndlebutn()
    {
        var smsmge = this.template.querySelector('lightning-input');
        var input = {'Name':this.inputvarible}     
        smsmge.showmessage(input);
    }


}
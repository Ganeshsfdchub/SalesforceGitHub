import { LightningElement, track } from 'lwc';

export default class TrackMethodDecaratorComponent extends LightningElement 
{
   @track inputvarible;

    handleinput(event)
    {
       this.inputvarible = event.target.value;
    }
    hndlebutn()
    {
        var smsmge = this.template.querySelector('lightning-input').value;
        var msgnames = {'firstname':'Ganesh', 'lastname':'Chinthakindi'};
        smsmge.showmessage(msgnames);;
    }


}
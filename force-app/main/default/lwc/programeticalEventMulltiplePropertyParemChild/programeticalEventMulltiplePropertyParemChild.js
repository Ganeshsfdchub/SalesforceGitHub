import { LightningElement, track } from 'lwc';

export default class ProgrameticalEventMulltiplePropertyParemChild extends LightningElement 
{
    @track firstvariable;
    @track lastvariable;

    firsthandlinput(event)
    {
       this.firstvariable = event.target.value;
    }
    lasthandlinput(event)
    {
        this.lastvariable = event.target.value;
    }
    hndlebtn()
    {
       const myevent = new CustomEvent("myevent", 
        { detail: { FName:this.firstvariable, LName:this.lastvariable}, bubbles:true, composed:true });
       this.dispatchEvent(myevent);
    }
   

}
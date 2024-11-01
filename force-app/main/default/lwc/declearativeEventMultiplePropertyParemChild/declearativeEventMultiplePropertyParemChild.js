import { LightningElement, track } from 'lwc';

export default class DeclearativeEventMultiplePropertyParemChild extends LightningElement 
{
    @track empName;
    @track empphone;
    @track empcompany;
    


    hndlmsg(event)
    {
       this.empName = event.target.value;
    }
    hndlmsge(event)
    {
       this.empphone = event.target.value;
    }
    hndlmsgee(event)
    {
       this.empcompany = event.target.value;
    }
    clkevnt()
    {
        const event = new CustomEvent("hievent", {
            detail:  {Name:this.empName, Phone:this.empphone, company:this.empcompany},bubbles:true, composed:true});
        this.dispatchEvent(event);
    }

   
}
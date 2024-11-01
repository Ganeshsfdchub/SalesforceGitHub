import { LightningElement, track } from 'lwc';

export default class ProgrameticalEventMulltiplePropertyParemParent extends LightningElement 
{
   @track FirstVariable;
   @track LastVariable;
    constructor()
    {
        super();
        this.template.addEventListener("myevent", this.mymethod.bind(this))
    }
    mymethod(event)
    {
        this.FirstVariable =event.detail.FName;
        this.LastVariable =event.detail.LName;
    }

  
}
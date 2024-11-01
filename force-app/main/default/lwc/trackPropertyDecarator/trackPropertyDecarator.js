import { LightningElement, track } from 'lwc';

export default class TrackPropertyDecarator extends LightningElement 
{
    @track myproperty;
    @track btnproperty;


    hndlename(event)
    {
       this.myproperty = event.target.value; 
       
    }
    hndbtn()
    {
        this.btnproperty = this.myproperty;
    }

}
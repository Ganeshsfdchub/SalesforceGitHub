import { LightningElement } from 'lwc';

export default class ProgrameticalEventMultipleHardCotedParemChild extends LightningElement 
{


    hnlbtn()
    {
        const myevent = new CustomEvent('myeventname',{detail:
            {Firstname:'Ganesh', Lastname:'Chinthakindi'},bubbles:true,composed:true});
            this.dispatchEvent(myevent);
    }

}
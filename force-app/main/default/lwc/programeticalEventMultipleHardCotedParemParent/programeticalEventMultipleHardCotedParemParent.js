import { LightningElement, track } from 'lwc';

export default class ProgrameticalEventMultipleHardCotedParemParent extends LightningElement 
{

   @track FristName;
   @track LastName;

   constructor()
   {
     super();

     this.template.addEventListener("myeventname", this.mymethod.bind(this));

   }
   mymethod(event)
   {
      this.FristName = event.detail.Firstname;
      this.LastName = event.detail.Lastname;
   }

}
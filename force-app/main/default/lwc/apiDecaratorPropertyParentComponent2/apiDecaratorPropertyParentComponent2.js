import { LightningElement,track} from 'lwc';

export default class ApiDecaratorPropertyParentComponent2 extends LightningElement 
{

    @track txtproperty;
    @track txtbutnproperty;

    handltxt(event)
    {
       this.txtproperty = event.target.value;
    }
    hndbutn()
    {
       this.txtbutnproperty = this.txtproperty;
    }




}
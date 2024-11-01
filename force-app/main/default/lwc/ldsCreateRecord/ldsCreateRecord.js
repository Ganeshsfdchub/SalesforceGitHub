import { LightningElement, track,api } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
import { createRecord } from 'lightning/uiRecordApi';
export default class LdsCreateRecord extends LightningElement 
{
   
    @api objectApiName;

    @track fname;
    @track ratng;
    @track phon;

    hndlename(event)
    {
        this.fname = event.target.value;
    }
    hndlesname(event)
    {
        this.ratng = event.target.value;
    }
    hnlphn(event)
    {
        this.phon = event.target.value;
    }
    hndlbtn()
    {
        const fields = {
                            'Name':this.fname,
                            'Rating':this.ratng,
                            'Phone':this.phon
                       };

        const recordinput = {apiName:this.objectApiName, fields};


        createRecord(recordinput)
        .then(result=>
            {
                 this.dispatchEvent(new ShowToastEvent({
                     title: "Success",
                     message: "Success",
                     variant: "success",
                     mode:'sticky'
                 })); 
            })
            .catch(error=>
                {
                      this.dispatchEvent(new ShowToastEvent({
                          title: "Error Occured",
                          message: "Error",
                          variant: "error",
                          mode:'pester'
                      }));
                })
    }
    

    
}
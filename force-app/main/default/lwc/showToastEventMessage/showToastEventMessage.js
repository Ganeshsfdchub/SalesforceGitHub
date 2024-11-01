import { LightningElement } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
export default class ShowToastEventMessage extends LightningElement 
{


    hndlesuccess()
    {
        this.dispatchEvent(new ShowToastEvent({
            title: "Success",
            message: "Inserted Successfully",
            variant: "success",
            mode:'sticky'
        }));
    }
} 

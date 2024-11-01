import { LightningElement } from 'lwc';
import pubsubconnect from 'c/pubsubconnect';
export default class PubsubPublisherWithHardCoatedValues extends LightningElement 
{


    hndlbutn()
    {
        var msg = { 
                      'Sender':'Ganesh',
                      'Message': 'Hello How are You'
                  };

       pubsubconnect.fire('myevent', msg) 
    }


}
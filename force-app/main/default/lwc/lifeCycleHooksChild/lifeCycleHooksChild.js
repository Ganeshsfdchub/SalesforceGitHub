import { LightningElement } from 'lwc';

export default class LifeCycleHooksChild extends LightningElement 
{

    constructor()
     {
          super();
          console.log('Child Constructor Method EXcuted');
     }
    connectedCallback()
    {

        console.log('Child ConnectedCallback Method EXcuted');
    }
    renderedCallback()
    {
        console.log('Child renderedCallback Method EXcuted');
       
    }
    disconnectedCallback()
    {
        console.log('Child DisconnectedCallback Method EXcuted');

    }
    errorCallback(error, stack)
    {
        console.log('Child DisconnectedCallback Method EXcuted'+error);
        console.log(stack);

    }
    
}
import { LightningElement,track } from 'lwc';

export default class LifeCycleHooksParent extends LightningElement 
{

    @track myvarible = true;

     constructor()
     {
          super();
          console.log('Parent Constructor Method EXcuted');
     }
    connectedCallback()
    {

        console.log('Parent ConnectedCallback Method EXcuted');
    }
    renderedCallback()
    {
        console.log('Parent renderedCallback Method EXcuted');
       
    }
    disconnectedCallback()
    {
        console.log('Parent DisconnectedCallback Method EXcuted');

    }
    errorCallback(error, stack)
    {
        console.log('Parent DisconnectedCallback Method EXcuted'+error);
        console.log(stack);

    }
    hanlhook()
    {
       if(this.myvarible == true)
        {
            this.myvarible = false;
        }
        else
        {
            this.myvarible = true;
        }
      
    }
    
    
}


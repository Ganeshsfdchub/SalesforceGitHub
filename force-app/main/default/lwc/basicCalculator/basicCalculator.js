import { LightningElement, track } from 'lwc';

export default class BasicCalculator extends LightningElement 
{
   @track firstnumber;
   @track secondnumber;
   @track Result;
   

    fname(event)
    {
        this.firstnumber = event.target.value;
    }
    sname(event)
    {
        this.secondnumber = event.target.value
    }
    addbtn()
    {
       this.Result = parseInt(this.firstnumber) + parseInt(this.secondnumber);
    }
    subbtn()
    {
        this.Result = parseInt(this.firstnumber) - parseInt(this.secondnumber);
    }
    mulbtn()
    {
        this.Result = parseInt(this.firstnumber) * parseInt(this.secondnumber);
    }
    divbtn()
    {
        if(this.firstnumber > this.secondnumber)
        {
            this.Result = parseInt(this.firstnumber) / parseInt(this.secondnumber); 
        }
        else
        {
           console.log('Divide not possible');
        }
        
    }
}
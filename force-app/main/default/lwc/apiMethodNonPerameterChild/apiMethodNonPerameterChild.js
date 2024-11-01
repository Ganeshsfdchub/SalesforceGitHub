import {  LightningElement,track,api } from 'lwc';

export default class ApiMethodNonPerameterChild extends LightningElement 
{
    @track Myvariable;

    @api mymthod()
    {
       this.Myvariable = 'ShivaRam Chinthakindi'
    }
}
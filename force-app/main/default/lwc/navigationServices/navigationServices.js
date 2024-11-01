import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation';
export default class NavigationServices extends NavigationMixin(LightningElement) 
{


    tab()
    {
        this[NavigationMixin.Navigate]({

            type: 'standard__navItemPage',
            attributes:{
                           apiName:'Lightning_Tab'
                       }
        });
    }

    achm()
    {
        this[NavigationMixin.Navigate]({

            type:'standard__objectPage',
            attributes:{
                          objectApiName:'Account',
                          actionName:'home'  
                       }
        })
    }
    listnv()
    {
        this[NavigationMixin.Navigate]({

            type:'standard__objectPage',
            attributes:{
                          objectApiName:'Account',
                          actionName:'list'  
                       },
                state:{
                         filterName:'00B5j00000fDr3bEAC'
                      }
           })


     }
    recent()
    {
        this[NavigationMixin.Navigate]({

            type:'standard__objectPage',
            attributes:{
                          objectApiName:'Account',
                          actionName:'list'  
                       },
                state:{
                         filterName:'RecentlyViewedAccounts'
                      }
           })

    }
}

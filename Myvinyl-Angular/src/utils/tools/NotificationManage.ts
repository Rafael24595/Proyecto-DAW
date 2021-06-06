import { GlobalVariables } from '../variables/variables';

export class NotificationManage{

    static showMessage(message:string, forceClose:boolean, type?:string, funct?:Function){

        let time = 3500;

        if(!GlobalVariables.notificationIsShowing || forceClose){

            GlobalVariables.notificationIsShowing = true;
            NotificationManage.resetAlert();

            GlobalVariables.notificationStatus = 'show';
            GlobalVariables.notificationMessage = message;

            switch (type){
                case 'manual':
                    GlobalVariables.notificationCloseManual = true;
                break;

                case 'answer':
                    if(funct){
                        GlobalVariables.notificationAnswer = true;
                        GlobalVariables.notificationAnswerFunction = funct;
                    }
                break;

                default:
                    setTimeout(()=>{
                        setTimeout(()=>{
                            GlobalVariables.notificationIsShowing = false;
                            NotificationManage.resetAlert();
                        }, 1500);
                    }, time);
                break;
            }

        }

    }

    static resetAlert(){
        GlobalVariables.notificationCloseManual = false;
        GlobalVariables.notificationAnswer = false;
        GlobalVariables.notificationAnswerFunction = undefined;
        GlobalVariables.notificationIsShowing = false;
        GlobalVariables.notificationStatus = '';
        GlobalVariables.notificationMessage = '';
    }

    static disableScroll(){
        let scrollTop = window.pageYOffset;
         let scrollLeft = window.pageXOffset;
  
        window.onscroll = function() {
            window.scrollTo(scrollLeft, scrollTop);
        };
    }

    static enableScroll(){
        window.onscroll = function() {};
    }

}
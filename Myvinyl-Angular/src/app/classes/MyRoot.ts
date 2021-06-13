
export class MyRoot{

    static instance: MyRoot;

    rootsEye;
    rootsTalk;
    rootsBooring;
    rootsAngry;
    rootTalkTime = 0;
    specialEye = "";
    rootsMouth = "";
    rootsAngryLevel = 0;

    mediaPath = '../../assets/media/images/root/';
    rootContainerElement = document.getElementById('roots-notification-container');
    rootEyeElement = document.getElementById('root-eye') as HTMLImageElement;
    rootBaseElement = document.getElementById('root-base') as HTMLImageElement;

    constructor(){
        this.rootContainerElement?.addEventListener('click', (event:Event)=>{this.rootsClick(event)})
    }

    static getMyRoot(){
        if(!MyRoot.instance){
            MyRoot.instance = new MyRoot();
        }
        return MyRoot.instance;
    }

    callRoot(talk = 0){

        var rotate = Math.floor(Math.random() * 10);

        this.rootsEye = setInterval(()=>{this.rootsEyeAnimation()}, 5000);
        this.rootsBooring = setTimeout(()=>{this.rootsBooringAnimation()}, 15000);

        if (rotate > 5) {
            var openMouth = (rotate >= 7) ? 1 : 0 ;
            this.rootTalkTime = 0;
            this.rootsRotateAnimation(openMouth);
        }
        else{
            this.rootsTalk = setInterval(()=>{this.rootsTalkAnimation()}, 350);
        }

    }

    rootsBooringAnimation(){

        let rootExist = document.getElementById('roots-notification-container');

        if (rootExist) {

            var action = Math.floor(Math.random() * 13);

            if (action == 0 || action == 1) {
                this.rootsRotateAnimation(action);
            }

            if (action == 2 || action == 3) {
                this.rootTalkTime = 5;
                this.rootsTalk = setInterval(()=>{this.rootsTalkAnimation()}, 350);
            }

            if (action == 4 || action == 5) {
                this.rootsTurnAnimation();
            }

            if (action == 6 || action == 7) {
                this.rootsMidTurnAnimation();
            }

            if (action == 8 || action == 9 || action == 10) {
                this.rootsOpenMouthAnimation();
            }

            if (action == 11 || action == 12) {
                this.rootsBooring = setTimeout(()=>{this.rootsBooringAnimation()}, 15000);
            }

        }
        else{
            clearInterval(this.rootsEye);
            clearInterval(this.rootsTalk);
            clearInterval(this.rootsBooring);
            clearInterval(this.rootsAngry);
        }

    }

    rootsEyeAnimation(){

        if(this.rootEyeElement){
            this.rootEyeElement.src = `${this.mediaPath}root_closed_eye${this.specialEye}.png`;

            setTimeout(()=>{
                this.rootEyeElement.src = `${this.mediaPath}root_open_eye${this.specialEye}.png`;
            }, 450);
        }

    }

    rootsTalkAnimation(){

        if(this.rootBaseElement){

            this.rootBaseElement.src = `${this.mediaPath}root_talk.png`;

        }

        setTimeout(()=>{
            this.rootBaseElement.src = `${this.mediaPath}root_base.png`;
        }, 175);

        this.rootTalkTime--;

        if (this.rootTalkTime < 0) {
            clearInterval(this.rootsTalk);
            clearTimeout(this.rootsBooring);
            this.rootsBooring = setTimeout(()=>{this.rootsBooringAnimation()}, 15000);

        }

    }

    rootsClick(event?:Event | undefined){

        let isCalm:string | boolean | undefined = this.rootBaseElement.src;
        isCalm = isCalm.split("/").pop();
        isCalm = (isCalm && isCalm.split(".")[0]) ? isCalm.split(".")[0] : '';
        isCalm = isCalm == "root_base";

        if (event && event.target && this.rootTalkTime <= 0 && isCalm ) {

            let element = event.target as HTMLElement;
            let mouseClick = event as MouseEvent

            clearTimeout(this.rootsBooring);
            
            var imageElement:HTMLElement | undefined = (element.tagName == "IMG") ? event.target as HTMLElement : (element.firstElementChild && element.firstElementChild.tagName == "IMG") ? element.firstElementChild as HTMLElement : (element.firstElementChild && element.firstElementChild.firstChild) ? element.firstElementChild.firstElementChild as HTMLElement : undefined;
            var directionValueX = mouseClick.clientX - (element.getBoundingClientRect().left + element.offsetWidth/2);
            var directionValueY = mouseClick.clientY - (element.getBoundingClientRect().top + element.offsetHeight/2);
            
            imageElement = imageElement as HTMLElement

            var direction = (directionValueX < -imageElement.offsetWidth/5) ? "left" : (directionValueX > imageElement.offsetWidth/5) ? "right" : "centre";
            var mode = Math.floor(Math.random() * 20) + this.rootsAngryLevel;
            
            if (Math.abs(directionValueX) < (imageElement.offsetWidth/2 - 8) && Math.abs(directionValueY) < (imageElement.offsetHeight/2 - 7)) {

                clearInterval(this.rootsAngry);
                this.rootsAngryLevel = (this.rootsAngryLevel < 20) ? this.rootsAngryLevel + 1 : this.rootsAngryLevel;
                this.rootsAngry = setInterval(()=>{(this.rootsAngryLevel < 1) ? clearInterval(this.rootsAngry) : (this.rootsAngryLevel = this.rootsAngryLevel - 1)}, 10000);

                if (this.rootsAngryLevel > 10 && mode > 20) {

                    this.rootsTurnAnimation(this.rootsAngryLevel * 1000)

                }else if (mode < 10 || directionValueY < -imageElement.offsetHeight/6) {

                    setTimeout(()=>{this.rootBaseElement.src =`${this.mediaPath}root_open_mouth_III.png`; this.rootEyeElement.src =`${this.mediaPath}root_closed_eye_mouth_III.png`; this.specialEye = "_mouth_III";
                        setTimeout(()=>{ this.rootBaseElement.src =`${this.mediaPath}root_base.png`; this.rootEyeElement.src =`${this.mediaPath}root_open_eye.png`; this.specialEye = "";
                            this.rootsBooring = setTimeout(()=>{this.rootsBooringAnimation()}, 15000);
                        }, 125);
                    }, 125);
                }
                else{

                    if (direction == "centre") {

                        setTimeout(()=>{this.rootBaseElement.src =`${this.mediaPath}root_talk.png`; this.rootEyeElement.src =`${this.mediaPath}root_open_eye.png`;

                            setTimeout(()=>{this.rootBaseElement.src =`${this.mediaPath}root_open_mouth_I.png`; this.rootEyeElement.src =`${this.mediaPath}root_closed_eye_mouth_I.png`; this.specialEye = "_mouth_I";

                                setTimeout(()=>{this.rootBaseElement.src =`${this.mediaPath}root_open_mouth_II.png`; this.rootEyeElement.src =`${this.mediaPath}root_closed_eye_mouth_II.png`; this.specialEye = "_mouth_II";

                                    setTimeout(()=>{this.rootBaseElement.src =`${this.mediaPath}root_open_mouth_I.png`; this.rootEyeElement.src =`${this.mediaPath}root_closed_eye_mouth_I.png`;this.specialEye = "_mouth_I";

                                        setTimeout(()=>{this.rootBaseElement.src =`${this.mediaPath}root_talk.png`; this.rootEyeElement.src =`${this.mediaPath}root_open_eye.png`; this.specialEye = "";

                                            setTimeout(()=>{this.rootBaseElement.src =`${this.mediaPath}root_base.png`; this.rootEyeElement.src =`${this.mediaPath}root_open_eye.png`; this.specialEye = "";

                                                clearTimeout(this.rootsBooring)

                                                this.rootsBooring = setTimeout(()=>{this.rootsBooringAnimation}, 15000);

                                            }, 100);

                                        }, 100);
                                                    
                                    }, 100);					

                                }, 100);

                            }, 100);

                        }, 100);

                    }
                    else{

                        setTimeout(()=>{this.rootBaseElement.src =`${this.mediaPath}root_${direction}_I.png`; this.rootEyeElement.src =`${this.mediaPath}root_closed_eye_${direction}.png`; this.specialEye = "_" + direction;
                        
                            setTimeout(()=>{this.rootBaseElement.src =`${this.mediaPath}root_talk_${direction}.png`; this.rootEyeElement.src =`${this.mediaPath}root_open_eye_${direction}_talk.png`; this.specialEye = "_" + direction + "_talk";
                            
                                setTimeout(()=>{this.rootBaseElement.src =`${this.mediaPath}root_open_mouth_I_${direction}.png`; this.rootEyeElement.src =`${this.mediaPath}root_closed_eye_mouth_I_${direction}.png`; this.specialEye = "_mouth_I_" + direction;
                                
                                    setTimeout(()=>{this.rootBaseElement.src =`${this.mediaPath}root_open_mouth_II_${direction}.png`; this.rootEyeElement.src =`${this.mediaPath}root_closed_eye_mouth_II_${direction}.png`; this.specialEye = "_mouth_II_" + direction;
                                    
                                        setTimeout(()=>{this.rootBaseElement.src =`${this.mediaPath}root_open_mouth_I_${direction}.png`; this.rootEyeElement.src =`${this.mediaPath}root_closed_eye_mouth_I_${direction}.png`; this.specialEye = "_mouth_I_" + direction;
                                        
                                            setTimeout(()=>{this.rootBaseElement.src =`${this.mediaPath}root_talk_${direction}.png`; this.rootEyeElement.src =`${this.mediaPath}root_open_eye_${direction}_talk.png`; this.specialEye = "_" + direction + "_talk";
                                            
                                                setTimeout(()=>{this.rootBaseElement.src =`${this.mediaPath}root_${direction}_I.png`; this.rootEyeElement.src =`${this.mediaPath}root_closed_eye_${direction}.png`; this.specialEye = "_" + direction;
                                                
                                                    setTimeout(()=>{this.rootBaseElement.src =`${this.mediaPath}root_base.png`; this.rootEyeElement.src =`${this.mediaPath}root_open_eye.png`; this.specialEye = "";

                                                        clearTimeout(this.rootsBooring)

                                                        this.rootsBooring = setTimeout(()=>{this.rootsBooringAnimation()}, 15000);

                                                    }, 100);

                                                }, 100);

                                            }, 100);
                                                        
                                        }, 100);					

                                    }, 100);

                                }, 100);

                            }, 100);

                        }, 100);

                    }

                }

            }

        }

    }

    rootsOpenMouthAnimation(bites = 0){

        if (this.rootTalkTime <= 0) {

            var callBack = (bites < 3) ? Math.floor(Math.random() * 10) : -1;
            var standOpen = (Math.floor(Math.random() * 10) > 5) ? [Math.floor(Math.random() * 375) + 125, 55 ]: [125, 125];
            
            setTimeout(()=>{this.rootBaseElement.src =`${this.mediaPath}root_talk.png`;
            
                setTimeout(()=>{this.rootBaseElement.src =`${this.mediaPath}root_open_mouth_I.png`; this.rootEyeElement.src =`${this.mediaPath}root_open_eye_mouth_I.png`;  this.specialEye = "_mouth_I";

                    if (true) {
                        
                        setTimeout(()=>{this.rootBaseElement.src =`${this.mediaPath}root_open_mouth_II.png`; this.rootEyeElement.src =`${this.mediaPath}root_open_eye_mouth_II.png`; this.specialEye = "_mouth_I";
                        
                            setTimeout(()=>{this.rootBaseElement.src =`${this.mediaPath}root_open_mouth_I.png`; this.rootEyeElement.src =`${this.mediaPath}root_open_eye_mouth_I.png`; this.specialEye = "_mouth_I";
                            
                                setTimeout(()=>{this.rootBaseElement.src =`${this.mediaPath}root_talk.png`; this.rootEyeElement.src =`${this.mediaPath}root_open_eye.png`; this.specialEye = "";
                                
                                    setTimeout(()=>{this.rootBaseElement.src =`${this.mediaPath}root_base.png`;

                                        clearTimeout(this.rootsBooring);

                                        this.rootsBooring = setTimeout(()=>{this.rootsBooringAnimation()}, 15000);

                                        if (callBack > 5) {

                                            setTimeout(()=>{this.rootsOpenMouthAnimation(bites + 1);}, 125);

                                        }

                                    }, standOpen[1]);

                                }, standOpen[1]);

                            }, standOpen[0]);

                        }, 125);

                    }
                    else{
                        
                        setTimeout(()=>{this.rootBaseElement.src =`${this.mediaPath}root_talk.png`; this.rootEyeElement.src =`${this.mediaPath}root_open_eye.png`; this.specialEye = "";
                        
                            setTimeout(()=>{this.rootBaseElement.src =`${this.mediaPath}root_base.png`;

                                clearTimeout(this.rootsBooring)

                                this.rootsBooring = setTimeout(()=>{this.rootsBooringAnimation()}, 15000);

                                if (callBack > 5) {

                                    setTimeout(()=>{this.rootsOpenMouthAnimation(bites + 1);}, 125);

                                }

                            }, 125);

                        }, 125);

                    }

                }, 125);

            }, 125);

        }
        else{

            clearTimeout(this.rootsBooring)

            this.rootsBooring = setTimeout(()=>{this.rootsBooringAnimation()}, 15000);

        }

    }

    rootsMidTurnAnimation(turn:string | number = "", levelTurn:string | number = "", standTurn:string | number = ""){

        if (this.rootTalkTime <= 0) {

            var callBack = (turn == "") ? Math.floor(Math.random() * 10) : -1;
            turn = (turn == "") ? (Math.floor(Math.random() * 10) > 5) ? "left" : "right" : turn;
            levelTurn = (levelTurn == "") ? Math.floor(Math.random() * 10) : levelTurn;
            standTurn = (standTurn == "") ? Math.floor(Math.random() * 3875) + 125 : standTurn;
            
            setTimeout(()=>{this.rootBaseElement.src =`${this.mediaPath}root_${turn}_I.png`; this.rootEyeElement.src =`${this.mediaPath}root_open_eye_${turn}.png`; this.specialEye = "_" + turn;

                    if(levelTurn > 5){
                        
                        setTimeout(()=>{this.rootBaseElement.src =`${this.mediaPath}root_${turn}_II.png`; this.rootEyeElement.src =`${this.mediaPath}root_open_eye_transparent.png`; this.specialEye = "_transparent";
                        
                            setTimeout(()=>{this.rootBaseElement.src =`${this.mediaPath}root_${turn}_I.png`; this.rootEyeElement.src =`${this.mediaPath}root_open_eye_${turn}.png`; this.specialEye = "_" + turn;
                            
                                setTimeout(()=>{this.rootBaseElement.src =`${this.mediaPath}root_base.png`; this.rootEyeElement.src =`${this.mediaPath}root_open_eye.png`; this.specialEye = ""; /*rootsRotate = "";*/

                                    clearTimeout(this.rootsBooring)

                                    this.rootsBooring = setTimeout(()=>{this.rootsBooringAnimation()}, 15000);

                                    if (callBack > 5) {

                                        turn = (turn == "left") ? "right" : "left";

                                        this.rootsMidTurnAnimation(turn, levelTurn, standTurn);

                                    }

                                }, 125);

                            }, standTurn as number);

                        }, 125);

                    }
                    else{
                        
                        setTimeout(()=>{this.rootBaseElement.src =`${this.mediaPath}root_base.png`; this.rootEyeElement.src =`${this.mediaPath}root_open_eye.png`; this.specialEye = ""; /*rootsRotate = "";*/

                            clearTimeout(this.rootsBooring)

                            this.rootsBooring = setTimeout(()=>{this.rootsBooringAnimation()}, 15000);

                            if (callBack > 5) {

                                turn = (turn == "left") ? "right" : "left";

                                this.rootsMidTurnAnimation(turn, levelTurn, standTurn);

                            }

                        }, standTurn as number);

                    }

            }, 125);

        }
        else{

            clearTimeout(this.rootsBooring)

            this.rootsBooring = setTimeout(()=>{this.rootsBooringAnimation()}, 15000);

        }

    }

    rootsRotateAnimation(type = 0){

        var turn = (Math.floor(Math.random() * 10) > 5) ? ["left","right"] : ["right","left"];turn=["right","left"]

        if (this.rootTalkTime <= 0) {
            
            this.rootBaseElement.src =`${this.mediaPath}root_${turn[0]}_I.png`;

            this.rootEyeElement.src =`${this.mediaPath}root_open_eye_${turn[0]}.png`; this.specialEye = "_" + turn[0];
            
            setTimeout(()=>{this.rootBaseElement.src =`${this.mediaPath}root_${turn[0]}_II.png`; this.rootEyeElement.src =`${this.mediaPath}root_open_eye_transparent.png`; this.specialEye = "_transparent";
            
                setTimeout(()=>{this.rootBaseElement.src =`${this.mediaPath}root_${turn[0]}_III.png`;
                
                    setTimeout(()=>{this.rootBaseElement.src =`${this.mediaPath}root_back.png`;
                    
                        setTimeout(()=>{this.rootBaseElement.src =`${this.mediaPath}root_${turn[1]}_III.png`;
                        
                            setTimeout(()=>{this.rootBaseElement.src =`${this.mediaPath}root_${turn[1]}_II.png`;
                            
                                setTimeout(()=>{this.rootBaseElement.src =`${this.mediaPath}root_${turn[1]}_I.png`; this.rootEyeElement.src =`${this.mediaPath}root_open_eye_${turn[1]}.png`; this.specialEye = "_" + turn[1];
                                
                                    setTimeout(()=>{this.rootBaseElement.src =`${this.mediaPath}root_base.png`; this.rootEyeElement.src =`${this.mediaPath}root_open_eye.png`; this.specialEye = ""; /*rootsRotate = "";*/

                                        if (type == 1) {
                                            
                                            setTimeout(()=>{this.rootBaseElement.src =`${this.mediaPath}root_talk.png`;
                                            
                                                setTimeout(()=>{this.rootBaseElement.src =`${this.mediaPath}root_open_mouth_I.png`; this.rootEyeElement.src =`${this.mediaPath}root_open_eye_mouth_I.png`; this.rootsMouth = "_mouth_I";
                                                
                                                    setTimeout(()=>{this.rootBaseElement.src =`${this.mediaPath}root_talk.png`; this.rootEyeElement.src =`${this.mediaPath}root_open_eye.png`;this.rootsMouth = "";
                                                    
                                                        setTimeout(()=>{this.rootBaseElement.src =`${this.mediaPath}root_base.png`;

                                                            clearTimeout(this.rootsBooring)

                                                            this.rootsBooring = setTimeout(()=>{this.rootsBooringAnimation()}, 15000);

                                                        }, 125);

                                                    }, 125);

                                                }, 125);

                                            }, 125);

                                        }
                                        else{

                                            clearTimeout(this.rootsBooring)

                                            this.rootsBooring = setTimeout(()=>{this.rootsBooringAnimation()}, 15000);

                                        }

                                    }, 125);

                                }, 125);

                            }, 125);

                        }, 125);

                    }, 125);

                }, 125);

            }, 125);

        }
        else{

            clearTimeout(this.rootsBooring)

            this.rootsBooring = setTimeout(()=>{this.rootsBooringAnimation()}, 15000);

        }

    }

    rootsTurnAnimation(standBack = 0){

        if (this.rootTalkTime <= 0) {

            var turn = (Math.floor(Math.random() * 10) > 5) ? "left" : "right";
            var turnBack = (Math.floor(Math.random() * 10) > 5) ? "right" : "left";
            standBack = (standBack == 0) ? Math.floor(Math.random() * 3875) + 125 : standBack;

            this.rootBaseElement.src =`${this.mediaPath}root_${turn}_I.png`;
            
            this.rootEyeElement.src =`${this.mediaPath}root_open_eye_${turn}.png`; this.specialEye = "_" + turn;
           
            setTimeout(()=>{this.rootBaseElement.src =`${this.mediaPath}root_${turn}_II.png`; this.rootEyeElement.src =`${this.mediaPath}root_open_eye_transparent.png`; this.specialEye = "_transparent";
            
                setTimeout(()=>{this.rootBaseElement.src =`${this.mediaPath}root_${turn}_III.png`;
                
                    setTimeout(()=>{this.rootBaseElement.src =`${this.mediaPath}root_back.png`;
                    
                        setTimeout(()=>{this.rootBaseElement.src =`${this.mediaPath}root_${turnBack}_III.png`;
                        
                            setTimeout(()=>{this.rootBaseElement.src =`${this.mediaPath}root_${turnBack}_II.png`;
                            
                                setTimeout(()=>{this.rootBaseElement.src =`${this.mediaPath}root_${turnBack}_I.png`; this.rootEyeElement.src =`${this.mediaPath}root_open_eye_${turnBack}.png`;this.specialEye = "_" + turnBack;
                                
                                    setTimeout(()=>{this.rootBaseElement.src =`${this.mediaPath}root_base.png`; this.rootEyeElement.src =`${this.mediaPath}root_open_eye.png`; this.specialEye = ""; /*rootsRotate = "";*/

                                        clearTimeout(this.rootsBooring)

                                        this.rootsBooring = setTimeout(()=>{this.rootsBooringAnimation()}, 15000);

                                    }, 125);

                                }, 125);

                            }, 125);

                        }, standBack);

                    }, 125);

                }, 125);

            }, 125);

        }
        else{

            clearTimeout(this.rootsBooring)

            this.rootsBooring = setTimeout(()=>{this.rootsBooringAnimation}, 15000);

        }

    }

}
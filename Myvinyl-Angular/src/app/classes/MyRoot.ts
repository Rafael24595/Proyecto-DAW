
export class MyRoot{

    rootsEye;
    rootsTalk;
    rootsBooring;
    rootsAngry;
    rootTalkTime = 0;
    specialEye = "";
    rootsMouth = "";
    rootsAngryLevel = 0;

    mediaPath = '../../assets/media/images/root/';
    rootEyeElement = document.getElementById('rootEye') as HTMLImageElement;
    rootBaseElement = document.getElementById('rootBase') as HTMLImageElement;

    callRoot(talk = 0){

        var rotate = Math.floor(Math.random() * 10);

        this.rootsEye = setInterval(this.rootsEyeAnimation, 5000);
        this.rootsBooring = setTimeout(this.rootsBooringAnimation, 15000);

        if (rotate > 5) {
            var openMouth = (rotate >= 7) ? 1 : 0 ;
            this.rootTalkTime = 0;
            rootsRotateAnimation(openMouth);
        }
        else{
            this.rootsTalk = setInterval(this.rootsTalkAnimation, 350);
        }

    }

    rootsBooringAnimation(){

        let rootExist = document.getElementById('roots-notification-container');

        if (rootExist) {

            var action = Math.floor(Math.random() * 13);

            if (action == 0 || action == 1) {
                rootsRotateAnimation(action);
            }

            if (action == 2 || action == 3) {
                this.rootTalkTime = 5;
                this.rootsTalk = setInterval(this.rootsTalkAnimation, 350);
            }

            if (action == 4 || action == 5) {
                rootsTurnAnimation();
            }

            if (action == 6 || action == 7) {
                rootsMidTurnAnimation();
            }

            if (action == 8 || action == 9 || action == 10) {
                rootsOpenMouthAnimation();
            }

            if (action == 11 || action == 12) {
                this.rootsBooring = setTimeout(this.rootsBooringAnimation, 15000);
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
            this.rootsBooring = setTimeout(this.rootsBooringAnimation, 15000);

        }

    }

    rootsClick(event){

        let isCalm:string | boolean | undefined = this.rootBaseElement.src;
        isCalm = isCalm.split("/").pop();
        isCalm = (isCalm && isCalm.split(".")[0]) ? isCalm.split(".")[0] : '';
        isCalm = isCalm == "root_base";

        if (this.rootTalkTime <= 0 && isCalm ) {

            clearTimeout(this.rootsBooring);

            var imageElement = (event.target.tagName == "IMG") ? event.target : (event.target.firstElementChild.tagName == "IMG") ? event.target.firstElementChild : event.target.firstElementChild.firstElementChild;
            var directionValueX = event.clientX - (event.target.getBoundingClientRect().left + event.target.offsetWidth/2);
            var directionValueY = event.clientY - (event.target.getBoundingClientRect().top + event.target.offsetHeight/2);
            var direction = (directionValueX < -imageElement.offsetWidth/5) ? "left" : (directionValueX > imageElement.offsetWidth/5) ? "right" : "centre";
            var mode = Math.floor(Math.random() * 20) + this.rootsAngryLevel;

            if (Math.abs(directionValueX) < (imageElement.offsetWidth/2 - 8) && Math.abs(directionValueY) < (imageElement.offsetHeight/2 - 7)) {

                clearInterval(this.rootsAngry);
                this.rootsAngryLevel = (this.rootsAngryLevel < 20) ? this.rootsAngryLevel + 1 : this.rootsAngryLevel;
                this.rootsAngry = setInterval(()=>{(this.rootsAngryLevel < 1) ? clearInterval(this.rootsAngry) : (this.rootsAngryLevel = this.rootsAngryLevel - 1)}, 10000);

                if (this.rootsAngryLevel > 10 && mode > 20) {

                    rootsTurnAnimation(this.rootsAngryLevel * 1000)

                }else if (mode < 10 || directionValueY < -imageElement.offsetHeight/6) {

                    setTimeout(()=>{this.rootBaseElement.src =`${this.mediaPath}root_open_mouth_III.png`; this.rootEyeElement.src =`${this.mediaPath}root_closed_eye_mouth_III.png`; this.specialEye = "_mouth_III";
                        setTimeout(()=>{ this.rootBaseElement.src =`${this.mediaPath}root_base.png`; this.rootEyeElement.src =`${this.mediaPath}root_open_eye.png`; this.specialEye = "";
                            this.rootsBooring = setTimeout(this.rootsBooringAnimation, 15000);
                        }, 125);
                    }, 125);
                }
                else{

                    if (direction == "centre") {

                        setTimeout(()=>{this.rootBaseElement.src =`${this.mediaPath}root_talk.png`; this.rootEyeElement.src =`${this.mediaPath}root_open_eye.png`;

                            setTimeout(()=>{this.rootBaseElement.src =`${this.mediaPath}root_open_mouth_I.png`; this.rootEyeElement.src =`${this.mediaPath}root_closed_eye_mouth_I.png`; this.specialEye = "_mouth_I";

                                setTimeout(()=>{this.rootBaseElement.src =`${this.mediaPath}root_open_mouth_II.png`; this.rootEyeElement.src =`${this.mediaPath}root_closed_eye_mouth_II.png`; this.specialEye = "_mouth_II";

                                    setTimeout(()=>{this.rootBaseElement.src =`${this.mediaPath}root_open_mouth_I.png`; this.rootEyeElement.src =`${this.mediaPath}root_open_eye.png`;this.specialEye = "_mouth_I";

                                        setTimeout(()=>{this.rootBaseElement.src =`${this.mediaPath}root_talk.png`; this.rootEyeElement.src =`${this.mediaPath}root_open_eye.png`; this.specialEye = "";

                                            setTimeout(()=>{this.rootBaseElement.src =`${this.mediaPath}root_base.png`; this.rootEyeElement.src =`${this.mediaPath}root_open_eye.png`; this.specialEye = "";

                                                clearTimeout(this.rootsBooring)

                                                this.rootsBooring = setTimeout(this.rootsBooringAnimation, 15000);

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
                                        
                                            setTimeout(()=>{this.rootBaseElement.src =`${this.mediaPath}root_talk_${direction}.png`; this.rootEyeElement.src =`${this.mediaPath}root_talk_${direction}_talk.png`; this.specialEye = "_" + direction + "_talk";
                                            
                                                setTimeout(()=>{this.rootBaseElement.src =`${this.mediaPath}root_${direction}.png`; this.rootEyeElement.src =`${this.mediaPath}root_closed_eye_${direction}.png`; this.specialEye = "_" + direction;
                                                
                                                    setTimeout(()=>{this.rootBaseElement.src =`${this.mediaPath}root_base.png`; this.rootEyeElement.src =`${this.mediaPath}root_open_eye.png`; this.specialEye = "";

                                                        clearTimeout(this.rootsBooring)

                                                        this.rootsBooring = setTimeout(this.rootsBooringAnimation, 15000);

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

    function rootsOpenMouthAnimation(bites = 0){

        if (rootTalkTime <= 0) {

            var callBack = (bites < 3) ? Math.floor(Math.random() * 10) : -1;
            var standOpen = (Math.floor(Math.random() * 10) > 5) ? [Math.floor(Math.random() * 375) + 125, 55 ]: [125, 125];

            setTimeout(function(){$("#rootBase").attr({"src":"../media/image/root/root_talk.png"}); 

                setTimeout(function(){$("#rootBase").attr({"src":"../media/image/root/root_open_mouth_I.png"}); $("#rootEye").attr({"src":"../media/image/root/root_open_eye_mouth_I.png"}); specialEye = "_mouth_I";

                    if (true) {

                        setTimeout(function(){$("#rootBase").attr({"src":"../media/image/root/root_open_mouth_II.png"}); $("#rootEye").attr({"src":"../media/image/root/root_open_eye_mouth_II.png"}); specialEye = "_mouth_I";

                            setTimeout(function(){$("#rootBase").attr({"src":"../media/image/root/root_open_mouth_I.png"}); $("#rootEye").attr({"src":"../media/image/root/root_open_eye_mouth_I.png"}); specialEye = "_mouth_I";

                                setTimeout(function(){$("#rootBase").attr({"src":"../media/image/root/root_talk.png"}); $("#rootEye").attr({"src":"../media/image/root/root_open_eye.png"}); specialEye = "";

                                    setTimeout(function(){$("#rootBase").attr({"src":"../media/image/root/root_base.png"});

                                        clearTimeout(rootsBooring);

                                        rootsBooring = setTimeout(rootsBooringAnimation, 15000);

                                        if (callBack > 5) {

                                            setTimeout(function(){rootsOpenMouthAnimation(bites + 1);}, 125);

                                        }

                                    }, standOpen[1]);

                                }, standOpen[1]);

                            }, standOpen[0]);

                        }, 125);

                    }
                    else{

                        setTimeout(function(){$("#rootBase").attr({"src":"../media/image/root/root_talk.png"}); $("#rootEye").attr({"src":"../media/image/root/root_open_eye.png"}); specialEye = "";

                            setTimeout(function(){$("#rootBase").attr({"src":"../media/image/root/root_base.png"});

                                clearTimeout(rootsBooring)

                                rootsBooring = setTimeout(rootsBooringAnimation, 15000);

                                if (callBack > 5) {

                                    setTimeout(function(){rootsOpenMouthAnimation(bites + 1);}, 125);

                                }

                            }, 125);

                        }, 125);

                    }

                }, 125);

            }, 125);

        }
        else{

            clearTimeout(rootsBooring)

            rootsBooring = setTimeout(rootsBooringAnimation, 15000);

        }

    }

    function rootsMidTurnAnimation(turn = "", levelTurn = "", standTurn = ""){

        if (rootTalkTime <= 0) {

            var callBack = (turn == "") ? Math.floor(Math.random() * 10) : -1;
            turn = (turn == "") ? (Math.floor(Math.random() * 10) > 5) ? "left" : "right" : turn;
            levelTurn = (levelTurn == "") ? Math.floor(Math.random() * 10) : levelTurn;
            standTurn = (standTurn == "") ? Math.floor(Math.random() * 3875) + 125 : standTurn;

            setTimeout(function(){$("#rootBase").attr({"src":"../media/image/root/root_" + turn + "_I.png"}); $("#rootEye").attr({"src":"../media/image/root/root_open_eye_" + turn + ".png"}); specialEye = "_" + turn;

                    if(levelTurn > 5){

                        setTimeout(function(){$("#rootBase").attr({"src":"../media/image/root/root_" + turn + "_II.png"}); $("#rootEye").attr({"src":"../media/image/root/root_open_eye_transparent.png"}); specialEye = "_transparent";

                            setTimeout(function(){$("#rootBase").attr({"src":"../media/image/root/root_" + turn + "_I.png"}); $("#rootEye").attr({"src":"../media/image/root/root_open_eye_" + turn + ".png"}); specialEye = "_" + turn;

                                setTimeout(function(){$("#rootBase").attr({"src":"../media/image/root/root_base.png"}); $("#rootEye").attr({"src":"../media/image/root/root_open_eye.png"}); specialEye = ""; rootsRotate = "";

                                    clearTimeout(rootsBooring)

                                    rootsBooring = setTimeout(rootsBooringAnimation, 15000);

                                    if (callBack > 5) {

                                        turn = (turn == "left") ? "right" : "left";

                                        rootsMidTurnAnimation(turn, levelTurn, standTurn);

                                    }

                                }, 125);

                            }, standTurn);

                        }, 125);

                    }
                    else{

                        setTimeout(function(){$("#rootBase").attr({"src":"../media/image/root/root_base.png"}); $("#rootEye").attr({"src":"../media/image/root/root_open_eye.png"}); specialEye = ""; rootsRotate = "";

                            clearTimeout(rootsBooring)

                            rootsBooring = setTimeout(rootsBooringAnimation, 15000);

                            if (callBack > 5) {

                                turn = (turn == "left") ? "right" : "left";

                                rootsMidTurnAnimation(turn, levelTurn, standTurn);

                            }

                        }, standTurn);

                    }

            }, 125);

        }
        else{

            clearTimeout(rootsBooring)

            rootsBooring = setTimeout(rootsBooringAnimation, 15000);

        }

    }

    function rootsRotateAnimation(type = 0){

        var turn = (Math.floor(Math.random() * 10) > 5) ? ["left","right"] : ["right","left"];turn=["right","left"]

        if (rootTalkTime <= 0) {

            $("#rootBase").attr({"src":"../media/image/root/root_" + turn[0] + "_I.png"});

            $("#rootEye").attr({"src":"../media/image/root/root_open_eye_" + turn[0] + ".png"}); specialEye = "_" + turn[0];

            setTimeout(function(){$("#rootBase").attr({"src":"../media/image/root/root_" + turn[0] + "_II.png"}); $("#rootEye").attr({"src":"../media/image/root/root_open_eye_transparent.png"}); specialEye = "_transparent";

                setTimeout(function(){$("#rootBase").attr({"src":"../media/image/root/root_" + turn[0] + "_III.png"});

                    setTimeout(function(){$("#rootBase").attr({"src":"../media/image/root/root_back.png"});

                        setTimeout(function(){$("#rootBase").attr({"src":"../media/image/root/root_" + turn[1] + "_III.png"});

                            setTimeout(function(){$("#rootBase").attr({"src":"../media/image/root/root_" + turn[1] + "_II.png"});

                                setTimeout(function(){$("#rootBase").attr({"src":"../media/image/root/root_" + turn[1] + "_I.png"}); $("#rootEye").attr({"src":"../media/image/root/root_open_eye_" + turn[1] + ".png"}); specialEye = "_" + turn[1];

                                    setTimeout(function(){$("#rootBase").attr({"src":"../media/image/root/root_base.png"}); $("#rootEye").attr({"src":"../media/image/root/root_open_eye.png"}); specialEye = ""; rootsRotate = "";

                                        if (type == 1) {

                                            setTimeout(function(){$("#rootBase").attr({"src":"../media/image/root/root_talk.png"});

                                                setTimeout(function(){$("#rootBase").attr({"src":"../media/image/root/root_open_mouth_I.png"}); $("#rootEye").attr({"src":"../media/image/root/root_open_eye_mouth_I.png"}); rootsMouth = "_mouth_I";

                                                    setTimeout(function(){$("#rootBase").attr({"src":"../media/image/root/root_talk.png"}); $("#rootEye").attr({"src":"../media/image/root/root_open_eye.png"}); rootsMouth = "";

                                                        setTimeout(function(){$("#rootBase").attr({"src":"../media/image/root/root_base.png"});

                                                            clearTimeout(rootsBooring)

                                                            rootsBooring = setTimeout(rootsBooringAnimation, 15000);

                                                        }, 125);

                                                    }, 125);

                                                }, 125);

                                            }, 125);

                                        }
                                        else{

                                            clearTimeout(rootsBooring)

                                            rootsBooring = setTimeout(rootsBooringAnimation, 15000);

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

            clearTimeout(rootsBooring)

            rootsBooring = setTimeout(rootsBooringAnimation, 15000);

        }

    }

    function rootsTurnAnimation(standBack = 0){

        if (rootTalkTime <= 0) {

            var turn = (Math.floor(Math.random() * 10) > 5) ? "left" : "right";
            var turnBack = (Math.floor(Math.random() * 10) > 5) ? "right" : "left";
            standBack = (standBack == 0) ? Math.floor(Math.random() * 3875) + 125 : standBack;

            $("#rootBase").attr({"src":"../media/image/root/root_" + turn + "_I.png"});

            $("#rootEye").attr({"src":"../media/image/root/root_open_eye_" + turn + ".png"}); specialEye = "_" + turn;

            setTimeout(function(){$("#rootBase").attr({"src":"../media/image/root/root_" + turn + "_II.png"}); $("#rootEye").attr({"src":"../media/image/root/root_open_eye_transparent.png"}); specialEye = "_transparent";

                setTimeout(function(){$("#rootBase").attr({"src":"../media/image/root/root_" + turn + "_III.png"});

                    setTimeout(function(){$("#rootBase").attr({"src":"../media/image/root/root_back.png"});

                        setTimeout(function(){$("#rootBase").attr({"src":"../media/image/root/root_" + turnBack + "_III.png"});

                            setTimeout(function(){$("#rootBase").attr({"src":"../media/image/root/root_" + turnBack + "_II.png"});

                                setTimeout(function(){$("#rootBase").attr({"src":"../media/image/root/root_" + turnBack + "_I.png"}); $("#rootEye").attr({"src":"../media/image/root/root_open_eye_" + turnBack + ".png"}); specialEye = "_" + turnBack;

                                    setTimeout(function(){$("#rootBase").attr({"src":"../media/image/root/root_base.png"}); $("#rootEye").attr({"src":"../media/image/root/root_open_eye.png"}); specialEye = ""; rootsRotate = ""

                                        clearTimeout(rootsBooring)

                                        rootsBooring = setTimeout(rootsBooringAnimation, 15000);

                                    }, 125);

                                }, 125);

                            }, 125);

                        }, standBack);

                    }, 125);

                }, 125);

            }, 125);

        }
        else{

            clearTimeout(rootsBooring)

            rootsBooring = setTimeout(rootsBooringAnimation, 15000);

        }

    }

}
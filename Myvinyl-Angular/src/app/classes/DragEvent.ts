import { sesionValues } from "src/utils/variables/sessionVariables";

export class DragEvent{

    static instance: DragEvent | undefined;

    static mouseUp:boolean = true;
    static mouseDown:boolean = false;
    static mouseMoveEvent: boolean = false;
    static elementToDrag: HTMLElement;
    static elementsList: HTMLElement[];
    static scrollTimeOut: any;
    static elementWidth: number = 100;
    static elementHeight: number = 50;
    static positionGuide: HTMLElement | undefined;

    constructor(elementToDrag:HTMLElement, elementsList:HTMLElement[]){
        DragEvent.elementToDrag = elementToDrag;
        DragEvent.elementsList = elementsList;
    }

    static dragEventListener(elementToDrag?:HTMLElement, elementsList?:HTMLElement[]){
        if(elementToDrag && elementsList){
            if(!this.instance){
                this.instance = new DragEvent(elementToDrag, elementsList);
            }
            else{
                this.elementToDrag = elementToDrag;
                this.elementsList = elementsList;
            }
            DragEvent.createMouseMoveEventListener();
        }
        return this.instance;
    }
    
    static mouseUpCancelDrag(){
        if(DragEvent.positionGuide && DragEvent.elementToDrag.parentElement){
            DragEvent.elementToDrag.parentElement.insertBefore(DragEvent.elementToDrag, DragEvent.positionGuide);
            DragEvent.elementToDrag.classList.remove('in-drag');
            DragEvent.elementToDrag.style.position = 'relative';
            DragEvent.elementToDrag.style.zIndex = '1';
            DragEvent.elementToDrag.style.width = 'auto';
            DragEvent.elementToDrag.style.top = '0';
            DragEvent.removePositionGuide();

            DragEvent.dropAnimation();
        }
        DragEvent.mouseUp = true;
        DragEvent.mouseDown = false;
        DragEvent.positionGuide = undefined;
        window.removeEventListener('mousemove', this.elementDrag);
        window.removeEventListener('mouseup', this.mouseUpCancelDrag);
    }

    static dropAnimation(){
        DragEvent.elementToDrag.classList.add('drop-fall');
        setTimeout(()=>{DragEvent.elementToDrag.classList.remove('drop-fall');},75);
    }

    static createMouseMoveEventListener(){
        if(!DragEvent.mouseMoveEvent){
            window.addEventListener('mousemove', this.elementDrag);
            window.addEventListener('mouseup', this.mouseUpCancelDrag);
        }
        DragEvent.elementWidth = this.elementToDrag.getBoundingClientRect().width;
        DragEvent.elementHeight = this.elementToDrag.getBoundingClientRect().height;
        DragEvent.mouseMoveEvent = true;
        DragEvent.mouseUp = false;
        setTimeout(()=>{
            if(!DragEvent.mouseUp){
                DragEvent.mouseDown = true;
            }
        }, 500);
    }

    static elementDrag(event: MouseEvent){
        if(!sesionValues.reproductionState && DragEvent.mouseDown){
            let parentElement = DragEvent.elementToDrag.parentElement as HTMLElement;
            let position = event.pageY - parentElement.offsetTop /*+ parentElement.scrollTop*/;
            let positionInContainer = DragEvent.getElementPositionPercentage(event, parentElement);

            event.stopPropagation();
		    event.preventDefault();

            DragEvent.elementToDrag.style.position = 'absolute';
            DragEvent.elementToDrag.style.zIndex = '5';
            DragEvent.elementToDrag.style.width = `${DragEvent.elementWidth}px`;
            DragEvent.elementToDrag.classList.add('in-drag');
            if(positionInContainer > 0 && positionInContainer < 0.1){
                (DragEvent.scrollTimeOut) ? clearTimeout(DragEvent.scrollTimeOut) : "";
                DragEvent.scrollTimeOut = setTimeout(function(){DragEvent.elementDrag(event)}, 1);
                parentElement.scrollBy(0, -3);
            }
            else if (positionInContainer > 0.9 && positionInContainer < 1) {

                (DragEvent.scrollTimeOut) ? clearTimeout(DragEvent.scrollTimeOut) : "";
                DragEvent.scrollTimeOut = setTimeout(function(){DragEvent.elementDrag(event)}, 1);
                parentElement.scrollBy(0, 2);

            }
            else{

                (DragEvent.scrollTimeOut) ? clearTimeout(DragEvent.scrollTimeOut) : "";

            }

            if(positionInContainer > 0.0 && positionInContainer < 1){

                DragEvent.elementToDrag.style.top = `${position - DragEvent.elementHeight * 0.25}px`;
                
            }

            var actualValue = (DragEvent.elementToDrag.parentElement) ? position + DragEvent.elementToDrag.parentElement?.scrollTop - DragEvent.elementToDrag.offsetHeight + DragEvent.elementHeight * 0.5: 0;
            var i = 0;

            DragEvent.removePositionGuide();

            DragEvent.positionGuide = document.createElement('div');
            DragEvent.positionGuide.className = 'position-guide';

            while(i < DragEvent.elementsList.length){

                var previousElementPosition = (!DragEvent.elementsList[i-1]) ? DragEvent.elementsList[i] : (DragEvent.elementsList[i-1].id != DragEvent.elementToDrag.id) ? DragEvent.elementsList[i-1] : (!DragEvent.elementsList[i-2]) ? DragEvent.elementsList[i] : DragEvent.elementsList[i-2];
                var actualElementPosition = DragEvent.elementsList[i];
                var nextElementPosition = (!DragEvent.elementsList[i+1]) ? DragEvent.elementsList[i] : (DragEvent.elementsList[i+1].id != DragEvent.elementToDrag.id) ? DragEvent.elementsList[i+1] : (!DragEvent.elementsList[i+2]) ? DragEvent.elementsList[i] : DragEvent.elementsList[i+2];

                if (previousElementPosition.offsetTop == actualElementPosition.offsetTop && actualValue <= actualElementPosition.offsetTop) {
                    if((!actualElementPosition.previousElementSibling || actualElementPosition.previousElementSibling.id == DragEvent.elementToDrag.id) && actualValue < previousElementPosition.offsetTop * 0.75){
                        if( DragEvent.elementToDrag.parentElement)
                    DragEvent.elementToDrag.parentElement.insertBefore(DragEvent.positionGuide, actualElementPosition)
                    }
                    else{
                        if( DragEvent.elementToDrag.parentElement)
                    DragEvent.elementToDrag.parentElement.insertBefore(DragEvent.positionGuide, actualElementPosition.nextElementSibling)
                    }
                    

                }
                else if (previousElementPosition.offsetTop != actualElementPosition.offsetTop && actualValue >= previousElementPosition.offsetTop && position - DragEvent.elementHeight * 2 < actualElementPosition.offsetTop) {
                   if( DragEvent.elementToDrag.parentElement)
                    DragEvent.elementToDrag.parentElement.insertBefore(DragEvent.positionGuide, actualElementPosition.nextElementSibling)

                }
                else if (actualElementPosition.offsetTop == nextElementPosition.offsetTop && actualValue >= actualElementPosition.offsetTop) {
                   if( DragEvent.elementToDrag.parentElement)
                    DragEvent.elementToDrag.parentElement.insertBefore(DragEvent.positionGuide, actualElementPosition)

                }
                
                i++;

            }
            
        }
    }

    static removePositionGuide(){

        let positionGuideElement = document.getElementsByClassName('position-guide');

        for (let index = 0; index < positionGuideElement.length; index++) {
            positionGuideElement[index].remove();
            
        }
    }

    static getElementPositionPercentage(event: MouseEvent, parent: HTMLElement){

		return (event.clientY - parent.getBoundingClientRect().top) / parent.offsetHeight;

	}

}
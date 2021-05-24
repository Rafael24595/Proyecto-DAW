import { sesionValues } from "src/utils/variables/sessionVariables";

export class DragEvent{

    static instance: DragEvent | undefined;

    static mouseUp:boolean = true;
    static mouseDown:boolean = false;
    static mouseMoveEvent: boolean = false;
    static elementToDrag: HTMLElement;
    static elementsList: HTMLElement[];
    static sendFunction: Function;
    static scrollTimeOut: any;
    static elementWidth: number = 100;
    static elementHeight: number = 50;
    static elementScrollHeight: number = 50;
    static positionGuide: HTMLElement | undefined;

    constructor(elementToDrag:HTMLElement, elementsList:HTMLElement[], sendFunction:Function){
        DragEvent.elementToDrag = elementToDrag;
        DragEvent.elementsList = elementsList;
        DragEvent.sendFunction = sendFunction;
    }

    static dragEventListener(elementToDrag?:HTMLElement, elementsList?:HTMLElement[], sendFunction?:Function){
        if(elementToDrag && elementsList && sendFunction){
            if(!this.instance){
                this.instance = new DragEvent(elementToDrag, elementsList, sendFunction);
            }
            else{
                this.elementToDrag = elementToDrag;
                this.elementsList = elementsList;
                this.sendFunction = sendFunction;
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
            DragEvent.reorderList();
        }
        DragEvent.mouseUp = true;
        DragEvent.mouseDown = false;
        DragEvent.positionGuide = undefined;
        window.removeEventListener('mousemove', this.elementDrag);
        window.removeEventListener('mouseup', this.mouseUpCancelDrag);
    }

    static reorderList(){
        let parent = DragEvent.elementToDrag.parentElement;
        let newList:{listId: string, themeId: string, position: number}[] | undefined = [];
        if(parent){
            let elements = parent.childNodes;
            let cont = 0;
            for (let index = 0; index < elements.length; index++) {
                let element = elements[index] as HTMLElement;
                if(element.id){
                    let idSplitted = element.id.split('-');
                    if(idSplitted[3] && idSplitted[4] && idSplitted[5]){
                        let listId = idSplitted[3];
                        let themeId = `${idSplitted[4]}-${idSplitted[5]}`;
                        newList.push({listId, themeId, position: cont});
                        cont ++;
                    }
                }
            }
            DragEvent.sendFunction(newList);
        }
    }

    static dropAnimation(){
        DragEvent.elementToDrag.classList.add('drop-fall');
        setTimeout(()=>{DragEvent.elementToDrag.classList.remove('drop-fall');},75);
    }

    static createMouseMoveEventListener(){
        if(DragEvent.elementToDrag.parentElement){
            if(!DragEvent.mouseMoveEvent){
                window.addEventListener('mousemove', this.elementDrag);
                window.addEventListener('mouseup', this.mouseUpCancelDrag);
            }
            DragEvent.elementWidth = this.elementToDrag.getBoundingClientRect().width;
            DragEvent.elementHeight = this.elementToDrag.getBoundingClientRect().height;
            DragEvent.elementScrollHeight = DragEvent.elementToDrag.parentElement.scrollHeight;
            DragEvent.mouseMoveEvent = true;
            DragEvent.mouseUp = false;
            setTimeout(()=>{
                if(!DragEvent.mouseUp){
                    DragEvent.mouseDown = true;
                }
            }, 500);
        }
    }

    static elementDrag(event: MouseEvent){
        if(!sesionValues.reproductionState && DragEvent.mouseDown){
            let parentElement = DragEvent.elementToDrag.parentElement as HTMLElement;
            let position = event.clientY - parentElement.getBoundingClientRect().top + parentElement.scrollTop;
            let positionInContainer = DragEvent.getElementPositionPercentage(event, parentElement);

            //var minHeight = elementEvent.offsetHeight / 3.25;
			//var maxHeight = parentContainer.scrollHeight - elementEvent.offsetHeight / 4.25;

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
                console.log('----')
                console.log( parentElement.scrollHeight)
                parentElement.scrollBy(0, 2);
                console.log( parentElement.scrollHeight)
                console.log('----')
            }
            else{
                (DragEvent.scrollTimeOut) ? clearTimeout(DragEvent.scrollTimeOut) : "";
            }

            if(positionInContainer > 0.0 && positionInContainer < 1){
                if(position < DragEvent.elementScrollHeight - DragEvent.elementHeight * 1.25){
                    position = position - DragEvent.elementHeight * 0.75
                    DragEvent.elementToDrag.style.top = `${position}px`;
                }
                
            }

            var i = 0;

            DragEvent.removePositionGuide();

            DragEvent.positionGuide = document.createElement('div');
            DragEvent.positionGuide.className = 'position-guide';

            let downElement;
            let diference: number | undefined;

            while(i<DragEvent.elementsList.length){
                let element = DragEvent.elementsList[i]
                if(element.id != DragEvent.elementToDrag.id){
                    let diferenceBetween = element.getBoundingClientRect().top - DragEvent.elementToDrag.getBoundingClientRect().top;
                    if(diferenceBetween >= 0 && (diference == undefined || diferenceBetween < diference)){
                        downElement = element
                        diference = diferenceBetween;
                    }
                }
                i++;
            }

            if( DragEvent.elementToDrag.parentElement){
                DragEvent.elementToDrag.parentElement.insertBefore(DragEvent.positionGuide, downElement);
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
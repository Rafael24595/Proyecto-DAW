export class DragEvent{

    static instance: DragEvent | undefined;

    static mouseDown:boolean = false;
    static mouseMoveEvent: boolean = false;
    static elementToDrag: HTMLElement;
    static elementsList: HTMLElement[];
    static scrollTimeOut: any;

    constructor(elementToDrag:HTMLElement, elementsList:HTMLElement[]){
        DragEvent.elementToDrag = elementToDrag;
        DragEvent.elementsList = elementsList;
        DragEvent.createMouseMoveEventListener();
    }

    static dragEventListener(elementToDrag?:HTMLElement, elementsList?:HTMLElement[]){
        if(!this.instance && elementToDrag && elementsList){
            if(!this.instance && elementToDrag && elementsList){
                this.instance = new DragEvent(elementToDrag, elementsList);
            }
            else{
                this.elementToDrag = elementToDrag;
                this.elementsList = elementsList;
            }
        }
        return this.instance;
    }
    
    static mouseUpCancelDrag(){
        DragEvent.mouseDown = false;
        window.removeEventListener('mousemove', this.elementDrag);
        window.removeEventListener('mouseup', this.mouseUpCancelDrag);
    }

    static createMouseMoveEventListener(){
        if(!DragEvent.mouseMoveEvent){
            DragEvent.mouseMoveEvent = true;
            DragEvent.mouseDown = true;
            window.addEventListener('mousemove', this.elementDrag);
            window.addEventListener('mouseup', this.mouseUpCancelDrag);
        }
    }

    static elementDrag(event: MouseEvent){
        if(DragEvent.mouseDown){
            let parentElement = DragEvent.elementToDrag.parentElement as HTMLElement;
            let position = event.pageY - parentElement.offsetTop + parentElement.scrollTop;
            let positionInContainer = DragEvent.getElementPositionPercentage(event, parentElement);
            let minHeight = DragEvent.elementToDrag.offsetHeight / 3.25;
			let maxHeight = DragEvent.elementToDrag.scrollHeight - DragEvent.elementToDrag.offsetHeight / 4.25;
            DragEvent.elementToDrag.style.position = 'absolute';
            DragEvent.elementToDrag.style.zIndex = '5';
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

            if(positionInContainer > 0.1 && positionInContainer < 0.9){

                DragEvent.elementToDrag.style.top = `${position}px`;
                
            }

            console.log(position);
            console.log(event.pageY);
        }
    }

    static getElementPositionPercentage(event: MouseEvent, parent: HTMLElement){

		return (event.clientY - parent.getBoundingClientRect().top) / parent.offsetHeight;

	}

}
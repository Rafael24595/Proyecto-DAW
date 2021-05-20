export class DragEvent{

    static instance: DragEvent | undefined;

    static mouseDown:boolean = false;
    static mouseMoveEvent: boolean = false;
    static elementToDrag: HTMLElement;
    static elementsList: HTMLElement[];
    static scrollTimeOut: any;
    static elementWidth: number = 100;
    static elementHeight: number = 50;
    static positionGuide: HTMLElement;

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
        if(DragEvent.elementToDrag.parentElement)
        DragEvent.elementToDrag.parentElement.insertBefore(DragEvent.elementToDrag, DragEvent.positionGuide);
        DragEvent.elementToDrag.style.position = 'relative';
        DragEvent.elementToDrag.style.zIndex = '1';
        DragEvent.elementToDrag.style.width = '0';
        DragEvent.elementToDrag.style.top = '0';
        DragEvent.removePositionGuide();
        DragEvent.mouseDown = false;
        window.removeEventListener('mousemove', this.elementDrag);
        window.removeEventListener('mouseup', this.mouseUpCancelDrag);
    }

    static createMouseMoveEventListener(){
        if(!DragEvent.mouseMoveEvent){
            window.addEventListener('mousemove', this.elementDrag);
            window.addEventListener('mouseup', this.mouseUpCancelDrag);
        }
        DragEvent.elementWidth = this.elementToDrag.getBoundingClientRect().width;
        DragEvent.elementHeight = this.elementToDrag.getBoundingClientRect().height;
        DragEvent.mouseMoveEvent = true;
        DragEvent.mouseDown = true;
    }

    static elementDrag(event: MouseEvent){
        if(DragEvent.mouseDown){
            let parentElement = DragEvent.elementToDrag.parentElement as HTMLElement;
            let position = event.pageY - parentElement.offsetTop /*+ parentElement.scrollTop*/;
            let positionInContainer = DragEvent.getElementPositionPercentage(event, parentElement);
            let minHeight = DragEvent.elementToDrag.offsetHeight / 3.25;
			let maxHeight = DragEvent.elementToDrag.scrollHeight - DragEvent.elementToDrag.offsetHeight / 4.25;

            event.stopPropagation();
		    event.preventDefault();

            DragEvent.elementToDrag.style.position = 'absolute';
            DragEvent.elementToDrag.style.zIndex = '5';
            DragEvent.elementToDrag.style.width = `${DragEvent.elementWidth}px`;
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

            var actualValue = (DragEvent.elementToDrag.parentElement) ? position + DragEvent.elementToDrag.parentElement?.scrollTop - DragEvent.elementToDrag.offsetHeight + DragEvent.elementHeight: 0;
            var i = 0;

            DragEvent.removePositionGuide();

            DragEvent.positionGuide = document.createElement('div');
            DragEvent.positionGuide.className = 'position-guide';

            /*let topCurrent = DragEvent.elementToDrag.getBoundingClientRect().top;
            let bottomCurrent = topCurrent + DragEvent.elementToDrag.getBoundingClientRect().height;

            let min = 0;
            let max = 0;

            let over;
            let sub;

            while(i < DragEvent.elementsList.length){

                let elementInlist = DragEvent.elementsList[i];
                let top = elementInlist.getBoundingClientRect().top;
                let bottom = top + elementInlist.getBoundingClientRect().height;

                if(top > bottomCurrent && max < top - bottomCurrent){
                    max = top - bottomCurrent;
                    over = elementInlist;
                }

                if(bottom < topCurrent && min < topCurrent - bottom){
                    min = topCurrent - bottom;
                    sub = elementInlist;
                }

                i++;

            }

            console.log(sub, over)*/

            while(i < DragEvent.elementsList.length){

                var previousElementPosition = (!DragEvent.elementsList[i-1]) ? DragEvent.elementsList[i] : (DragEvent.elementsList[i-1].id != DragEvent.elementToDrag.id) ? DragEvent.elementsList[i-1] : (!DragEvent.elementsList[i-2]) ? DragEvent.elementsList[i] : DragEvent.elementsList[i-2];
                var actualElementPosition = DragEvent.elementsList[i];
                var nextElementPosition = (!DragEvent.elementsList[i+1]) ? DragEvent.elementsList[i] : (DragEvent.elementsList[i+1].id != DragEvent.elementToDrag.id) ? DragEvent.elementsList[i+1] : (!DragEvent.elementsList[i+2]) ? DragEvent.elementsList[i] : DragEvent.elementsList[i+2];

                if (previousElementPosition.offsetTop == actualElementPosition.offsetTop && actualValue <= actualElementPosition.offsetTop) {
                   // $("#positionGuide").remove();
                    //$($positionGuide).insertBefore(actualElementPosition);
                    if( DragEvent.elementToDrag.parentElement)
                    DragEvent.elementToDrag.parentElement.insertBefore(DragEvent.positionGuide, actualElementPosition)

                }
                else if (previousElementPosition.offsetTop != actualElementPosition.offsetTop && actualValue >= previousElementPosition.offsetTop && position - DragEvent.elementHeight < actualElementPosition.offsetTop) {
                   // $("#positionGuide").remove();
                   // $($positionGuide).insertBefore(actualElementPosition);
                   if( DragEvent.elementToDrag.parentElement)
                    DragEvent.elementToDrag.parentElement.insertBefore(DragEvent.positionGuide, actualElementPosition)

                }
                else if (actualElementPosition.offsetTop == nextElementPosition.offsetTop && actualValue >= actualElementPosition.offsetTop) {
                   // $("#positionGuide").remove();
                   // $($positionGuide).insertAfter(actualElementPosition);
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
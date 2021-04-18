export class DataManage{

    public static copyObject(object:object){
        let objectToString = JSON.stringify(object);
        return JSON.parse(objectToString);
    }

    public static setFocus(id:string){
        setTimeout(() => {document.getElementById(id)?.focus();}, 100);
      }

}
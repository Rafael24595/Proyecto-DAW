export class DataManage{

    public static copyObject(object:object){
        let objectToString = JSON.stringify(object);
        return JSON.parse(objectToString);
    }

    public static setFocus(id:string){
        setTimeout(() => {document.getElementById(id)?.focus();}, 100);
      }

    public static syncForEach(list:any, func:Function){
        return new Promise(resolve=>{
            let result = list.forEach(func);
            resolve(result);
        });
    }

    public static toAsync(func:Function){
        return new Promise(resolve=>{
            func(resolve);
        })
    }

}
/**
 * 创建
 */
export class creatRegExp{
    regExpString:Array<string> =[]
    regExpFlag=''
    
    end=()=>{
    const reg = new RegExp(this.regExpString.join(''),this.regExpFlag)
    console.log(reg);
    
    return reg

    }
    constructor(strings:Array<string>,flag:string){
        this.regExpString=strings;
        this.regExpFlag=flag;
    }
}
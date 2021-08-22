/**
 * 创建
 */
export function creatRegExp(strings: Array<string>, flag: string){
    return new SRegExpFactory(strings,flag)
}
export class SRegExpFactory {
    regExpString: Array<string> = []
    regExpFlag = ''
    
    end = () => new RegExp(this.regExpString.join(''),this.regExpFlag)

    constructor(strings:Array<string>,flag:string) {
        this.regExpString = strings;
        this.regExpFlag = flag;
    }
}
/**
 * 创建一个正则表达式
 * Create a RegExp
 * @param patternArray List of semantic functions
 * @param modeArray List of match mode
 * @returns RegExp
 */
 export function creatRegExp(patternArray: Array<string>, modeArray: Array<string>){
    return new SRegExpFactory(patternArray,modeArray)
}
/**
 * RegExp工厂类
 * RegExp Factory class
 */
 export class SRegExpFactory {
    regExpPattern: string = ''
    regExpMode: string | undefined = undefined

    end = () => new RegExp(this.regExpPattern,this.regExpMode)

    constructor(patternArray: Array<string>,modeArray: Array<string>) {
        this.regExpPattern = patternArray.join('');
        this.regExpMode = modeArray.join('');
    }
}
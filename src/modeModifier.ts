/**
 * Generate indices for substring matches.
 * @returns d
 */
export const indicesMode = () => 'd'
/**
 * 找到所有的匹配，而不是在第一个匹配之后停止。
 * 
 * Find all matches rather than stopping after the first match.
 * @returns g
 */
export const globalMode = () => 'g'
/**
 * 如果u标志也被启用，使用Unicode大小写折叠。
 * 
 * If u flag is also enabled, use Unicode case folding.
 * @returns i
 */
export const ignoreCaseMode = () => 'i'
/**
 * 将开始和结束字符(^ and $)视为在多行上工作。
 * 换句话说，匹配每一行的开头或结尾each line (由\n或者\r 分隔)，
 * 而不仅仅是整个输入字符串的开头或结尾。
 * 
 * Treat beginning and end characters (^ and $) as working over multiple lines. In other words, 
 * match the beginning or end of each line (delimited by \n or \r), 
 * not only the very beginning or end of the whole input string.
 * @returns m
 */
export const multilineMode = () => 'm'
/**
 * 允许. 去匹配新的行
 * 
 * Allows . to match newlines.
 * @returns s
 */
export const dotAllMode = () => 's'
/**
 * Treat pattern as a sequence of Unicode code points. 
 * @returns u
 */
export const unicodeMode = () => 'u'
/**
 * Matches only from the index indicated by the lastIndex
 *  property of this regular expression in the target string.
 * Does not attempt to match from any later indexes.
 * @returns y
 */
export const stickyMode = () => 'y'
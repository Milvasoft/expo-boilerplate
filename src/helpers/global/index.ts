/**
 * @author Ali Burhan Keskin <alikeskin@milvasoft.com>
*/

/**
 * Checks if a given string is a valid JSON.
 * 
 * @param str - The string to be checked.
 * @returns A boolean indicating whether the string is a valid JSON or not.
 */
export function isValidJSON(str: any) {

  try {

    JSON.parse(str);
    return true;
  
  } catch (e) {

    return false;
  
  }

}
  
/**
 * Checks if a value is object-like.
 *
 * @param val - The value to check.
 * @returns Returns `true` if the value is object-like, else `false`.
 */
export const isObjectLike = (val: any):any => val !== null && typeof val === 'object';

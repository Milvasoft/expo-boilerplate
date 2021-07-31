/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/**
 * @author Ali Burhan Keskin <alikeskin@milvasoft.com>
*/
export function isValidJSON(str) {

  try {

    JSON.parse(str);
    return true;
  
  } catch (e) {

    return false;
  
  }

}
  
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isObjectLike = (val: any):any => val !== null && typeof val === 'object';

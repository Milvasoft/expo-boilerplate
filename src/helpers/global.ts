/**
 * @author Ali Burhan Keskin <alikeskin@milvasoft.com>
*/
export function isValidJSON(str: any) {

  try {

    JSON.parse(str);
    return true;
  
  } catch (e) {

    return false;
  
  }

}
  
export const isObjectLike = (val: any):any => val !== null && typeof val === 'object';

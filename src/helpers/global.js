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
  
export const isObjectLike = (val) => val !== null && typeof val === 'object';

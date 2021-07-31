/**
 * @author Ali Burhan Keskin <alikeskin@milvasoft.com>
*/
export default async (): Promise<string> => {

  try {
  
    const response = await fetch('https://api.ipify.org');
    const ip = response.text();
    return ip;
    
  } catch (e) {
  
    // eslint-disable-next-line no-throw-literal
    throw 'Unable to get IP address.';
    
  }
  
};
  

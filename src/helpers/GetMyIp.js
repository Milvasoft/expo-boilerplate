export default async () => {

  try {
  
    const response = await fetch('https://api.ipify.org');
    const ip = response.text();
    return ip;
    
  } catch (e) {
  
    // eslint-disable-next-line no-throw-literal
    throw 'Unable to get IP address.';
    
  }
  
};
  

import NetInfo from '@react-native-community/netinfo';

const unsubscribe = NetInfo.addEventListener((state) => {

  if (!state.isConnected) {

    console.log('No Internet');

  }

});
  
// To unsubscribe to these update, just use:
unsubscribe();

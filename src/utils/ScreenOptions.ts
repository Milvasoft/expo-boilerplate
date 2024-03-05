import { CardStyleInterpolators, StackNavigationOptions } from "@react-navigation/stack";
import { Dimensions } from "react-native";

/**
 * Options for configuring the screen behavior and appearance.
 */
export const ScreenOptions: StackNavigationOptions = {
    gestureEnabled: true,
    gestureResponseDistance: Dimensions.get('screen').width,
    headerShown: true,
    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    headerStyle: { backgroundColor: '#FFF', },
    headerTitleStyle: { fontFamily: 'Bold', },  
    headerTitleAlign: 'center'     
  };
  

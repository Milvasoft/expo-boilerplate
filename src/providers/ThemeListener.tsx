import { updateAppState } from '@src/modules/app/redux/actions';
import { Appearance } from 'react-native';

Appearance.addChangeListener(async (param) => {

  updateAppState({ userColorScheme: param?.colorScheme });

});

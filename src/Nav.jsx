import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Splash from './store/container/Splash';
import Stream from './components/Stream/Stream';
import SelectAge from './components/selectAge/selectAge';

export default createAppContainer(
  createStackNavigator(
    {
      Splash: Splash,

      SelectAge: {
        screen: SelectAge,
      },
      Stream: Stream,
    },
    {
      initialRouteName: 'Splash',
      headerMode: 'none',
    },
  ),
);

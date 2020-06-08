import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Splash from './store/container/Splash';
import Stream from './components/Stream/Stream';
import SelectAge from './components/selectAge/selectAge';

function renderWithNavigation({screens = {}, navigatorConfig = {}} = {}) {
  const AppNavigator = createStackNavigator(
    {
      Splash: Splash,

      SelectAge: {
        screen: SelectAge,
      },
      Stream: Stream,
    },
    {
      initialRouteName: 'Splash',
      ...navigatorConfig,
    },
  );

  const App = createAppContainer(AppNavigator);

  return {...render(<App />), navigationContainer: App};
}

export default renderWithNavigation;

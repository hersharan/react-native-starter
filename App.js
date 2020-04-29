import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import ComponentScreen from './src/screens/ComponentScreen';
import ListScreen from './src/screens/ListScreen';
import ImageScreen from './src/screens/ImageScreen';
import KillCountScreen from './src/screens/KillCounterScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Component: ComponentScreen,
    List: ListScreen,
    ImageGallery: ImageScreen,
    KillCount: KillCountScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "POWER"
    }
  }
);

export default createAppContainer(navigator);

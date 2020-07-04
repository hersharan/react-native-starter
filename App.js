import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import ComponentScreen from './src/screens/ComponentScreen';
import ListScreen from './src/screens/ListScreen';
import ImageScreen from './src/screens/ImageScreen';
import KillCountScreen from './src/screens/KillCounterScreen';
import SearchScreen from './src/screens/SearchScreen';
import ListSampleOne from './src/screens/ListSampleOne';
import ListSampleTwo from './src/screens/ListSampleTwo';
import ListSampleThree from './src/screens/ListSampleThree';
import ListSampleFour from './src/screens/ListSampleFour';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Component: ComponentScreen,
    List: ListScreen,
    ImageGallery: ImageScreen,
    KillCount: KillCountScreen,
    Search: SearchScreen,
    ListSampleOne,
    ListSampleTwo,
    ListSampleThree,
    ListSampleFour,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "POWER"
    }
  }
);

export default createAppContainer(navigator);

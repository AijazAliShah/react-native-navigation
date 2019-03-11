import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from './HomeScreen';
import DetailScreen from './DetailScreen'

export default createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailScreen
  },
  {
    initialRouteName: "Home"
  }
);

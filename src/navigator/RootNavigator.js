// import { createAppContainer, createSwitchNavigator } from 'react-navigation';

// import UnauthNavigator from './UnauthNavigator'
// import AuthNavigator from './AuthNavigator'

// const RootNavigator = createSwitchNavigator({
//   UnauthNavigator,
//   AuthNavigator
// });

// export default createAppContainer(RootNavigator);

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import SignIn from './../screens/SignIn'
import SignUp from './../screens/SignUp'
import Home from './../screens/Home'

const RootNavigator = createStackNavigator({
  SignIn: {
    screen: SignIn,
    navigationOptions: ({ navigation }) => ({
      header: null
    }),
  },
  SignUp: {
    screen: SignUp,
    navigationOptions: ({ navigation }) => ({
      header: null
    }),
  },
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => ({
      title: 'Home'
    }),
  },
});

export default createAppContainer(RootNavigator);
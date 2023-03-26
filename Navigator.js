import {NavigationContainer,DefaultTheme } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './components/Home/Home'
import Report from './components/Report/Report'
const Stack = createNativeStackNavigator();
const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent'
  },
};

const MyStack = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator animationEnabled>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Home',
            headerStyle: {
              backgroundColor: 'transparent',
            },
            headerTitleAlign: 'center',
            headerTintColor: '#000',
            headerTitleStyle: {
              fontWeight: 'bold',
          },}}
        />

        <Stack.Screen name="Report" component={Report} 
        options={{
            title: 'Report',
            headerStyle: {
              backgroundColor: 'transparent',
            },
            headerTitleAlign: 'center',
            headerTintColor: '#000',
            headerTitleStyle: {
              fontWeight: 'bold',
          },}}
        />
      </Stack.Navigator>
    </NavigationContainer>  
  );
};

export default MyStack
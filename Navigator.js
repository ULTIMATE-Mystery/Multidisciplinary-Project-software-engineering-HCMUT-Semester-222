import {NavigationContainer,DefaultTheme } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Activities from './components/Activities/Activities';
import Datalog from './components/Datalog/Datalog'
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home'
import PlantCondition from './components/PlantCondition/PlantCondition';
// import Report from './components/Report/Report'
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
          <Stack.Screen name="Datalog" component={Datalog} 
        options={{
            title: 'Data log',
            headerStyle: {
              backgroundColor: 'transparent',
            },
            headerTitleAlign: 'center',
            headerTintColor: '#000',
            headerTitleStyle: {
              fontWeight: 'bold',
          },}}
        />
        <Stack.Screen name="Activities" component={Activities} 
        options={{
            title: 'Activities',
            headerStyle: {
              backgroundColor: 'transparent',
            },
            headerTitleAlign: 'center',
            headerTintColor: '#000',
            headerTitleStyle: {
              fontWeight: 'bold',
          },}}
        />
                <Stack.Screen name="PlantCondition" component={PlantCondition} 
        options={{
            title: 'Plant\'s Condition',
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
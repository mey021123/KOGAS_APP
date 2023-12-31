import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen.js';
import {PRIMARY, WHITE} from '../color';
import Icon from 'react-native-vector-icons/Ionicons';
import SignatureListScreen from '../screens/SignatureListScreen.js';
import SettingsScreen from '../screens/SettingsScreen.js';

const Tab = createBottomTabNavigator();

const BottomStack = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: PRIMARY.DEFAULT,
        headerTitleAlign: 'center',
        headerTintColor: PRIMARY.DEFAULT,
        headerTitleStyle: {fontWeight: '700'},
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: '홈',
          tabBarLabel: '홈',
          tabBarIcon: ({color, size}) => (
            <Icon name="home-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="서명 문서"
        component={SignatureListScreen}
        options={{
          tabBarLabel: '서명 문서',
          title: '서명 문서',
          headerStyle: {
            backgroundColor: PRIMARY.DEFAULT,
          },
          headerTintColor: WHITE,
          tabBarIcon: ({color, size}) => (
            <Icon name="document-text-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="환경설정"
        component={SettingsScreen}
        options={{
          tabBarLabel: '환경설정',
          title: '환경설정',
          headerStyle: {
            backgroundColor: PRIMARY.DEFAULT,
          },
          headerTintColor: WHITE,
          tabBarIcon: ({color, size}) => (
            <Icon name="person-circle-outline" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default BottomStack;

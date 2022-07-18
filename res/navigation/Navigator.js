import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import DetailPage from '../pages/store/DetailPage';
import MainPage from '../pages/store/MainPage';
import AboutPage from '../pages/store/AboutPage';
import LikePage from '../pages/store/LikePage';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getHeaderTitle } from '@react-navigation/elements';
import Header from '../components/Header';
// bottom tap page
import Chat from '../pages/chat/Chat'
import Store from '../pages/store/Store';
import Write from '../pages/write/Write'
import Community from '../pages/community/Community'
import Mypage from '../pages/mypage/Mypage'
import TabBarContainer from './TabBarContainer';

// mypage
import ShopCart from '../pages/mypage/ShopCart';
import Favorite from '../pages/mypage/Favorites'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MypageNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
        }}    
        >
            <Stack.Screen name='Mypage' component={Mypage} />
            <Stack.Screen name='ShopCart' component={ShopCart} />
            <Stack.Screen name='Favorite' component={Favorite} />
        </Stack.Navigator>
    )
}

const CommunityNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: "white",
                    shadowColor: "white",
                },
            }}
        >
            <Stack.Screen name='Community' component={Community} 
                options={({ navigation, route }) => ({
                    headerTitle: (props) => <Header {...props} page={route} navigation={navigation} />,
                })}
            />
        </Stack.Navigator>
    )
}

const ChatNavigation = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: "white",
                    shadowColor: "white",
                },
            }}
        >
            <Stack.Screen name='Chat' component={Chat} 
                options={({ navigation, route }) => ({
                    headerTitle: (props) => <Header {...props} page={route} navigation={navigation} />,
                })}
            />
        </Stack.Navigator>
    )
}

const StoreNavigator = () =>{
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: "white",
                    shadowColor: "white",
                },
            }}
            
        >
            <Stack.Screen name="MainPage" component={MainPage}
                options={({ navigation, route }) => ({
                    headerTitle: (props) => <Header {...props} page={route} navigation={navigation} />,
                })}
            />
            <Stack.Screen name="DetailPage" component={DetailPage}/>
            <Stack.Screen name="AboutPage" component={AboutPage}/>
            <Stack.Screen name="LikePage" component={LikePage}/>
        </Stack.Navigator>
    )
}

const BottomTapNavigator = () => {
    return (

        <Tab.Navigator
            screenOptions={{
                headerShown: false,
            }}
            tabBar={props => <TabBarContainer {...props}/>}
        >
            <Tab.Screen name='StoreNavigator' component={StoreNavigator} />
            <Tab.Screen name='ChatNavigation' component={ChatNavigation} />
            <Tab.Screen name='Write' component={Write} />
            <Tab.Screen name='CommunityNavigator' component={CommunityNavigator} />
            <Tab.Screen name='MypageNavigator' component={MypageNavigator} />
        </Tab.Navigator>
    )
}

export default BottomTapNavigator;
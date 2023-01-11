import React from 'react';
import {createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList} from '@react-navigation/drawer';
import {Profile} from '../profile/Profile';
import {logout} from '../service/AuthenticationService';

const CustomDrawerContent = props => (
    <DrawerContentScrollView keyboardShouldPersistTaps='always' {...props}>

      <DrawerItem label="Log out" onPress={() => logout().then(() =>{
          props.navigation.popToTop();
          props.navigation.navigate('Login')
      })} />
    </DrawerContentScrollView>
)

const Drawer = createDrawerNavigator()

export default () => (
  <Drawer.Navigator drawerContent={props => CustomDrawerContent(props)} options={{ title: 'My home' }} screenOptions={{
      headerShown: false,
      drawerPosition: "right",
      backgroundColor: '#efc6d4',
      width: 40,
  }}>
    <Drawer.Screen name="Profile" component={Profile}/>
  </Drawer.Navigator>
)

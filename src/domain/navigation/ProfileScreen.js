import React from 'react';
import {createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList} from '@react-navigation/drawer';
import {Profile} from '../profile/Profile';

const CustomDrawerContent = props => (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem label="Log out" onPress={() => alert('Log out!')} />
    </DrawerContentScrollView>
)

const Drawer = createDrawerNavigator()

export default () => (
  <Drawer.Navigator drawerContent={props => CustomDrawerContent(props)} title={''} drawerPosition={'right'}>
    <Drawer.Screen name="Profile" component={Profile} />
  </Drawer.Navigator>
)

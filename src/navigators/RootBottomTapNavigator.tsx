/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {
  createBottomTabNavigator,
  BottomTabNavigationProp,
} from '@react-navigation/bottom-tabs';
import {Icon, IconsNameType, Txt} from '@uoslife/design-system';
import {Platform, StyleSheet} from 'react-native';

import MainScreen from '../screens/MainScreen';
import StudentIdScreen from '../screens/StudentIdScreen';
import RedirectLibraryRecapScreen from '../screens/thirdTab/RedirectLibraryRecapScreen';

export type RootTabParamList = {
  MainTab: undefined;
  StudentId: undefined;
  ThirdTab: undefined;
};

type TabScreenItemType = {
  label: string;
  icon: Extract<IconsNameType, 'menu' | 'studentId' | 'heart' | 'library'>;
  screenName: keyof RootTabParamList;
  component: React.ComponentType<any>;
};

export type RootTabNavigationProps = BottomTabNavigationProp<RootTabParamList>;

const Tab = createBottomTabNavigator<RootTabParamList>();

const TAB_SCREEN_ITEMS: TabScreenItemType[] = [
  {
    component: MainScreen,
    screenName: 'MainTab',
    label: '시대생활',
    icon: 'menu',
  },
  {
    component: StudentIdScreen,
    screenName: 'StudentId',
    label: '학생증',
    icon: 'studentId',
  },
  {
    component: RedirectLibraryRecapScreen,
    screenName: 'ThirdTab',
    label: '도서관',
    icon: 'library',
  },
];

const RootBottomTabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="MainTab"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          ...Style.bottomTapLayout,
          ...Style.bottomTapShadow,
        },
      }}>
      {TAB_SCREEN_ITEMS.map(item => (
        <Tab.Screen
          key={item.screenName}
          name={item.screenName}
          component={item.component}
          options={{
            tabBarIcon: ({focused}) => (
              <Icon
                color={focused ? 'primaryBrand' : 'grey90'}
                name={item.icon}
                width={24}
                height={24}
              />
            ),
            tabBarLabel: ({focused}) => (
              <Txt
                label={item.label}
                color={focused ? 'primaryBrand' : 'grey90'}
                typograph="labelMedium"
              />
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

const Style = StyleSheet.create({
  bottomTapLayout: {
    position: 'absolute',
    height: 60,
    borderRadius: 60,
    paddingTop: 8,
    paddingBottom: 8,
    paddingVertical: 10,
    paddingHorizontal: 40,
    marginLeft: 40,
    marginRight: 40,
    marginBottom: 40,
  },
  bottomTapShadow: {
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      },
      android: {
        elevation: 5,
      },
    }),
  },
});

export default RootBottomTabNavigation;

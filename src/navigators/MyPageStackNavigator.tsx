import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {
  MypageAppInformationScreen,
  MypageAppSettingScreen,
  MypageMainScreen,
  MypageProfileScreen,
  ToSandPoliciesScreen,
  AdvertisingandMarketingConsentScreen,
  PrivacyandPoliciesScreen,
} from '../screens/myPage';
import SetNicknameScreen from '../screens/account/common/SetNicknameScreen';
import VerificationScreen from '../screens/account/signIn/VerificationScreen';
import PortalAuthenticationScreen from '../screens/account/common/PortalAuthenticationScreen';

export type MyPageStackParamList = {
  Mypage_main: undefined;
  Mypage_profile: MyPageProfileStackParamList;
  Mypage_appSetting: undefined;
  Mypage_appInformation: MyPageAppInformationStackParamList;
};

export type MyPageProfileStackParamList = {
  Mypage_profile_Main: undefined;
  Mypage_changeNickname: undefined;
  Mypage_portalAuthentication: undefined;
  Mypage_changeNumber: undefined;
};
export type MypageProfileNavigationProp =
  NativeStackNavigationProp<MyPageProfileStackParamList>;

export type MyPageAppInformationStackParamList = {
  Mypage_appInformation_Main: undefined;
  Mypage_ToSandPolicies: undefined;
  Mypage_privacyPolicies: undefined;
  Mypage_advertisingandMarketing: undefined;
};
export type MypageAppInformationNavigationProp =
  NativeStackNavigationProp<MyPageAppInformationStackParamList>;

const Stack = createStackNavigator<MyPageStackParamList>();
const ProfileStack = createStackNavigator<MyPageProfileStackParamList>();
const AppInformationStack =
  createStackNavigator<MyPageAppInformationStackParamList>();

const MypageProfileNavigator = () => {
  return (
    <ProfileStack.Navigator
      initialRouteName="Mypage_profile_Main"
      screenOptions={{headerShown: false}}>
      <ProfileStack.Screen
        name="Mypage_profile_Main"
        component={MypageProfileScreen}
      />
      <ProfileStack.Screen
        name="Mypage_changeNickname"
        component={SetNicknameScreen}
      />
      <ProfileStack.Screen
        name="Mypage_portalAuthentication"
        component={PortalAuthenticationScreen}
      />
      <ProfileStack.Screen
        name="Mypage_changeNumber"
        component={VerificationScreen}
      />
    </ProfileStack.Navigator>
  );
};

const MyPageAppInformationStackNavigator = () => {
  return (
    <AppInformationStack.Navigator
      initialRouteName="Mypage_appInformation_Main"
      screenOptions={{headerShown: false}}>
      <AppInformationStack.Screen
        name="Mypage_appInformation_Main"
        component={MypageAppInformationScreen}
      />
      <AppInformationStack.Screen
        name="Mypage_ToSandPolicies"
        component={ToSandPoliciesScreen}
      />
      <AppInformationStack.Screen
        name="Mypage_privacyPolicies"
        component={PrivacyandPoliciesScreen}
      />
      <AppInformationStack.Screen
        name="Mypage_advertisingandMarketing"
        component={AdvertisingandMarketingConsentScreen}
      />
    </AppInformationStack.Navigator>
  );
};

const MypageStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Mypage_main"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Mypage_main" component={MypageMainScreen} />
      <Stack.Screen name="Mypage_profile" component={MypageProfileNavigator} />
      <Stack.Screen
        name="Mypage_appSetting"
        component={MypageAppSettingScreen}
      />
      <Stack.Screen
        name="Mypage_appInformation"
        component={MyPageAppInformationStackNavigator}
      />
    </Stack.Navigator>
  );
};

export default MypageStackNavigator;

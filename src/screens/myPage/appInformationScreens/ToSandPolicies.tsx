import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {MyPageAppInformationStackParamList} from '../../../navigators/MyPageStackNavigator';
import {StackNavigationProp} from '@react-navigation/stack';
import WebViewWithHeader from '../../../components/webView/WebViewWthHeader';
import URLS from '../../../configs/urls';

type ToSandPoliciesStackNavigation = StackNavigationProp<
  MyPageAppInformationStackParamList,
  'Mypage_ToSandPoliciesWebView'
>;

const ToSandPoliciesScreen = () => {
  const navigation = useNavigation<ToSandPoliciesStackNavigation>();

  return (
    <WebViewWithHeader
      navigation={navigation}
      url={URLS.APP_INFORMATION.TO_SAND_POLICIES}
      label={'이용약관 및 정책'}
    />
  );
};

export default ToSandPoliciesScreen;

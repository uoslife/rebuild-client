import React from 'react';
import Header from '../../components/header/Header';
import NavigationList from '../../components/navigations/navigationList/NavigationList';
import styled from '@emotion/native';
import {useNavigation} from '@react-navigation/native';
import {MypageAppInformationScreenRouteProp} from '../../navigators/MyPageStackNavigator';

const MypageAppInformationScreen = () => {
  const navigation = useNavigation<MypageAppInformationScreenRouteProp>();

  return (
    <>
      <Header label={'앱 정보'} />
      <S.Container>
        <NavigationList
          label={'이용악관 및 정책'}
          onPress={() => navigation.navigate('Mypage_ToSandPolicies')}
        />
        <NavigationList
          label={'개인정보 처리방침'}
          onPress={() => navigation.navigate('Mypage_privacyPolicies')}
        />
        <NavigationList
          label={'광고 및 마케팅 수신 동의'}
          onPress={() =>
            navigation.navigate('Mypage_advertisingandMarketingConsent')
          }
        />
      </S.Container>
    </>
  );
};
const S = {
  Container: styled.View`
    display: flex;
    padding: 0 16px;
  `,
};

export default MypageAppInformationScreen;

import {useEffect, useState} from 'react';
import {View} from 'react-native';
import styled from '@emotion/native';
import {useNavigation} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import DeviceInfo from 'react-native-device-info';

import Header from '../../../../components/molecules/common/header/Header';
import NavigationList from '../../../../components/molecules/common/navigationList/NavigationList';
import DeviceService from '../../../../services/device';
import {MypageAppInformationNavigationProp} from '../../navigators/types/mypage_app_information';

const MypageAppInformationScreen = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation<MypageAppInformationNavigationProp>();
  const handleGoBack = () => {
    navigation.goBack();
  };

  const [codepushVersion, setVersion] = useState('');
  useEffect(() => {
    (async () => {
      const version = await DeviceService.getCodePushVersion();
      setVersion(version);
    })();
  }, []);

  return (
    <View style={{paddingTop: insets.top}}>
      <Header label="앱 정보" onPressBackButton={handleGoBack} />
      <S.Container>
        <NavigationList
          label="이용약관 및 정책"
          onPress={() => navigation.navigate('mypage_app_information_tos')}
        />
        <NavigationList
          label="개인정보 처리방침"
          onPress={() =>
            navigation.navigate('mypage_app_information_privacy_policies')
          }
        />
        <NavigationList
          label="광고 및 마케팅 수신 동의"
          onPress={() =>
            navigation.navigate(
              'mypage_app_information_advertising_and_marketing',
            )
          }
        />
        <NavigationList
          label="현재 앱 버전"
          pressLabel={`${DeviceInfo.getVersion()}, ${codepushVersion}`}
          isPressIconShown={false}
        />
      </S.Container>
    </View>
  );
};
const S = {
  Container: styled.View`
    width: 100%;
    padding: 0 16px;
  `,
};

export default MypageAppInformationScreen;

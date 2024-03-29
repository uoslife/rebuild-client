import {Linking} from 'react-native';
import notifee from '@notifee/react-native';
import {LinkingOptions} from '@react-navigation/native';
import storage from '../storage';
import {RootStackParamList} from '../navigators/RootStackNavigator';

const DEEPLINK_PREFIX_URL = ['uoslife://'];

const deepLinksConfig = {
  initialRouteName: 'Main',
  screens: {
    Main: {
      initialRouteName: 'MainTab',
      screens: {
        MainTab: 'main',
        StudentId: 'main/studentId',
        ThirdTab: 'main/thirdTab',
      },
    },
    Mypage: {
      initialRouteName: 'Mypage_main',
      screens: {
        Mypage_main: 'mypage',
        Mypage_profile: {
          initialRouteName: 'Mypage_profile_Main',
          screens: {
            Mypage_profile_Main: 'mypage/profile',
            Mypage_changeNickname: 'mypage/profile/changeNickname',
            Mypage_portalAuthentication: 'mypage/profile/portalAuthentication',
            Mypage_changeNumber: 'mypage/profile/changeNumber',
          },
        },
        Mypage_appSetting: 'mypage/appSetting',
        Mypage_appInformation: {
          initialRouteName: 'Mypage_appInformation_Main',
          screens: {
            Mypage_appInformation_Main: 'mypage/appInformation',
            Mypage_ToSandPolicies: 'mypage/appInformation/ToSandPolicies',
            Mypage_privacyPolicies: 'mypage/appInformation/privacyPolicies',
            Mypage_advertisingandMarketing:
              'mypage/appInformation/advertisingandMarketing',
          },
        },
      },
    },
    Library: 'library',
    Cafeteria: 'cafeteria',
    Announcement: {
      initialRouteName: 'AnnouncementMain',
      screens: {
        AnnouncementMain: 'announcement',
        AnnouncementBookmark: 'announcement/bookMark',
        AnnouncementDetail: 'announcement/detail/:id/:origin',
        AnnouncementSearch: 'announcement/search',
      },
    },
    LibraryRecap: 'libraryRecap',
  },
};

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: DEEPLINK_PREFIX_URL,
  // @ts-ignore
  config: deepLinksConfig,
  async getInitialURL() {
    // 딥링크를 이용해서 앱이 오픈되었을 때
    const url = await Linking.getInitialURL();

    if (url != null) return url;

    // 백그라운드에서 알림 클릭 시 deepLink가 있는 경우 해당 url을 storage에 저장
    // ref: https://github.com/react-navigation/react-navigation.github.io/issues/97
    const initialNotification = await notifee.getInitialNotification();

    if (!initialNotification) return null;

    const {data} = initialNotification.notification;

    if (!data || !data.deepLinkUrl) return null;

    storage.set('openedDeepLinkUrl', data.deepLinkUrl as string);

    return null;
  },
};

export default linking;

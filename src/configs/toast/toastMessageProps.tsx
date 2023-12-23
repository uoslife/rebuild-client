import {Linking} from 'react-native';
import {ShowToastProps} from '.';
import urls from '../urls';

const toastMessage = {
  logout: '로그아웃에 성공했어요.',
  unregister: '회원탈퇴에 성공했어요.',
  unregisterError: '회원탈퇴를 처리하는 중 문제가 발생했어요.',
  notLoggedInError: '로그인 후 이용 가능해요.',
  changeNickname: '닉네임 변경에 성공했어요.',
  changeNicknameError: '닉네임을 변경하는 중 문제가 발생했어요.',
  changePhone: '전화번호 변경에 성공했어요.',
  changePhoneError: '전화번호를 변경하는 중 문제가 발생했어요.',
  portalAuthenticationSuccess: '포털 연동을 성공적으로 완료했어요.',
  portalAuthenticationError: '포털 연동을 처리하는 중 문제가 발생했어요.',
  notificationError: '알림 설정을 처리하는 중 문제가 발생했어요.',
  unRegisterTwiceUserError: `회원탈퇴 이력이 2회 이상인 유저입니다.\n해당 팝업을 클릭하여 고객센터로 문의해주세요.`,
  SmsVerificationError: `전화번호 인증 과정에서 문제가 발생했어요.\n잠시후 다시 시도해주세요`,
};
export type ToastMessageType = keyof typeof toastMessage;

const toastMessageProps: {[T in ToastMessageType]: ShowToastProps} = {
  logout: {
    title: toastMessage.logout,
  },
  unregister: {
    title: toastMessage.unregister,
  },
  unregisterError: {
    type: 'error',
    title: toastMessage.unregisterError,
  },
  notLoggedInError: {
    type: 'error',
    title: toastMessage.notLoggedInError,
  },
  changeNickname: {
    title: toastMessage.changeNickname,
  },
  changeNicknameError: {
    type: 'error',
    title: toastMessage.changeNicknameError,
  },
  changePhone: {
    title: toastMessage.changePhone,
  },
  changePhoneError: {
    type: 'error',
    title: toastMessage.changePhoneError,
  },
  portalAuthenticationSuccess: {
    title: toastMessage.portalAuthenticationSuccess,
  },
  portalAuthenticationError: {
    type: 'error',
    title: toastMessage.portalAuthenticationError,
  },
  notificationError: {
    type: 'error',
    title: toastMessage.notificationError,
  },
  unRegisterTwiceUserError: {
    type: 'error',
    title: toastMessage.unRegisterTwiceUserError,
    onPress: () => {
      Linking.openURL(urls.CONTACT_UOSLIFE);
    },
  },
  SmsVerificationError: {
    type: 'error',
    title: toastMessage.SmsVerificationError,
  },
};
export default toastMessageProps;

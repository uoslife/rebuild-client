import {post} from '../../../core/methods';
import AuthService from './authAPI.interface';
import * as Type from './authAPI.type';

const AuthAPI: AuthService = {
  sendSMSVerificationCode: params =>
    post<Type.SendSMSVerificationCodeRes>('core/auth/verification', params),

  unregister: params =>
    post<Type.UnregisterRes>('core/auth/unregister', params),

  signUp: params => {
    const {isDelete, ...rest} = params!;
    return post<Type.SignUpRes>(`core/auth/signup?delete=${isDelete}`, rest);
  },

  signIn: params => post<Type.SignInRes>('core/auth/signin', params),

  getRefreshToken: params =>
    post<Type.GetRefreshTokenRes>('core/auth/refresh', params),

  logout: params => post<Type.LogoutRes>('core/auth/logout', params),
};
export default AuthAPI;

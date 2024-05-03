import {atom} from "recoil";

export const emailState = atom({
  key: 'emailState',
  default: '',
});

export const passwordState = atom({
  key: 'passwordState',
  default: '',
});

export const passwordCheckState = atom({
  key: 'passwordCheckState',
  default: '',
});

export const nicknameState = atom({
  key: 'nicknameState',
  default: '',
});

export const homepageState = atom({
  key: 'homepageState',
  default: null,
});

export const genderState = atom({
  key: 'genderState',
  default: null,
});

export const birthDayState = atom({
  key: 'birthDayState',
  default: null,
});

export const profileImageState = atom({
  key: 'profileImageState',
  default: null,
});

export const introduceState = atom({
  key: 'introduceState',
  default: null,
});
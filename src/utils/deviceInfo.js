import { Constants } from 'expo';

export const isIPhoneWithEyebrow =
  Constants.deviceName === 'iPhone X' ||
  Constants.deviceName === 'iPhone XS' ||
  Constants.deviceName === 'iPhone XS Max' ||
  Constants.deviceName === 'iPhone XR';

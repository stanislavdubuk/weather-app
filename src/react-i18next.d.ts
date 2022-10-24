import { resources, defaultNS } from './i18n';
import { ELanguage } from './lib/enums';

declare module 'react-i18next' {
  type DefaultResources = typeof resources[ELanguage.EN];
  interface Resources extends DefaultResources {}
}

declare module 'react-i18next' {
  interface CustomTypeOptions {
    defaultNS: typeof defaultNS;
    resources: typeof resources[ELanguage.EN];
  }
}

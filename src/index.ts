import { registerPlugin } from '@capacitor/core';

import type { GooglePlayServicesCheckPlugin } from './definitions';

const GooglePlayServicesCheck = registerPlugin<GooglePlayServicesCheckPlugin>(
  'GooglePlayServicesCheck',
  {
    web: () => import('./web').then(m => new m.GooglePlayServicesCheckWeb()),
  },
);

export * from './definitions';
export { GooglePlayServicesCheck };

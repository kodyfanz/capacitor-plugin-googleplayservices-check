import { WebPlugin } from '@capacitor/core';

import type { GooglePlayServicesCheckPlugin } from './definitions';

export class GooglePlayServicesCheckWeb extends WebPlugin implements GooglePlayServicesCheckPlugin {
  constructor() {
    super({
      name: 'GooglePlayServicesCheck',
      platforms: ['web'],
    });
  }

  async checkAvailability(): Promise<{ available: boolean; error?: string; errorCode?: number }> {
    // Simulate a response for the web platform, assuming Google Play Services are not available
    return {
      available: false,
      error: 'Google Play Services are not available on web platforms.',
      errorCode: -1
    };
  }
}

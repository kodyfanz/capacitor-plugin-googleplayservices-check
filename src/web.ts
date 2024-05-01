import { WebPlugin } from '@capacitor/core';

import type { GooglePlayServicesCheckPlugin } from './definitions';

export class GooglePlayServicesCheckWeb
  extends WebPlugin
  implements GooglePlayServicesCheckPlugin
{
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}

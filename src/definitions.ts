export interface GooglePlayServicesCheckPlugin {
  checkAvailability(): Promise<{ available: boolean; version?: number, error?: string; errorCode?: number }>;
}
export interface GooglePlayServicesCheckPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}

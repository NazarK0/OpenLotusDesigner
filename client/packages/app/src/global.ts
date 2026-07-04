export {};

declare global {
  interface Window {
    printPerf: () => void;
    __SECALE_ORG__?: {};
    dayjs: {};
    supabase: any;
    numbro: any;
    Papa: any;
    uuid: any;
    alasql: any;
  }
}

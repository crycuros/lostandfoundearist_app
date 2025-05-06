import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.earist.lostandfound',
  appName: 'Lost and Found Earist',
  webDir: 'public',
  server: {
    url: 'https://merry-gecko-7c38d2.netlify.app',
    cleartext: true
  }
};

export default config;
// conf.js
export const config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['./specs/spec.js'],
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      args: ['--start-maximized'],
    },
  },
};

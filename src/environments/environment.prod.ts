export const environment = {
  name: 'prod',
  version: require('../../package.json').version + '-prod',
  timestamp: require('../../timestamp.json').buildTime,
  production: true,
  title: "MyApp - United Exploration India",
  productName: "MyApp",
  apiBaseUrl: "http://portalapi.ueipl.co.in/api/",
  mockAPIUrl: "http://localhost:7878/",
  useMockServer: false,
  copyrightInfo: "Copyright &copy; 2023 United Exploration India"
};

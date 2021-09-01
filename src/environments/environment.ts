// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  FIREBASE_CONFIG: {
    apiKey: "AIzaSyCLFgiL1GTYAXSUxEIHWj2Sma7eKcizwNM",
    authDomain: "dimade7859-test.firebaseapp.com",
    databaseURL: "https://dimade7859-test-default-rtdb.firebaseio.com",
    projectId: "dimade7859-test",
    storageBucket: "dimade7859-test.appspot.com",
    messagingSenderId: "709834733024",
    appId: "1:709834733024:web:d8e4c5576ef153251ae785",
    measurementId: "G-48QGH55PZC"
  },
  databaseURL: "https://dimade7859-test-default-rtdb.firebaseio.com/",
  authUrl() {
    return `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${this.FIREBASE_CONFIG.apiKey}`
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

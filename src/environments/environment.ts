// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  firebase: {
    projectId: 'angular-dealership',
    appId: '1:183764172832:web:28ca5ba4865d566dd27c45',
    storageBucket: 'angular-dealership.appspot.com',
    locationId: 'europe-west',
    apiKey: 'AIzaSyAVfzdlJ9g-oY88w7RlIHcTb6h18pBntso',
    authDomain: 'angular-dealership.firebaseapp.com',
    messagingSenderId: '183764172832',
    measurementId: 'G-TRNT9SVHW4',
  },
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyAVfzdlJ9g-oY88w7RlIHcTb6h18pBntso",
    authDomain: "angular-dealership.firebaseapp.com",
    projectId: "angular-dealership",
    storageBucket: "angular-dealership.appspot.com",
    messagingSenderId: "183764172832",
    appId: "1:183764172832:web:28ca5ba4865d566dd27c45",
    measurementId: "G-TRNT9SVHW4"
  },
  databaseURL: 'https://api.mercedes-benz.com/configurator/v1/markets/de_DE/models?classId=',
  apiKey: '&apikey=cccbf567-847b-4273-a7e9-940d86ce3195',
  apiPicturesUrl: 'https://cdn.imagin.studio/getImage?customer=siferi&make=mercedes&modelFamily='
};
// apibaseur + classtype + apikey 
//&make=mercedes&modelFamily=a-class&modelRange=a-class&modelVariant=ch&modelYear=2019&powerTrain=fossil
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

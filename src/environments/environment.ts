// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  domain: 'http://localhost:8080',
  urls: {
    quickSearch: '/adverts/quicksearch',
    estateTypes: '/estates',
    search: '/adverts/search',
    createAdvert: '/adverts/create',
    register: '/register',
    apply: '/application',
    login: '/login',
    user: '/user',
    conditionTypeFilters: '/adverts/filters/conditiontype',
    transactionTypeFilters: '/adverts/filters/transactiontype',
    statusFilters: '/adverts/filters/status',
    estateTypeFilters: '/adverts/filters/estatetype',
    heatingTypeFilters: '/adverts/filters/heatingtype',
    cityZipCodeSearchApi: 'https://datanova.legroupe.laposte.fr/api/records/1.0/search/?dataset=laposte_hexasmal&rows=20&q=',
    addressSearchApi: 'https://api-adresse.data.gouv.fr/search/?limit=25&type=street&q='
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

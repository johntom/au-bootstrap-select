import 'babel-polyfill';
import * as Bluebird from 'bluebird';
// import 'jquery';
// import 'bootstrap';

export async function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging();
    // .plugin('aurelia-bootstrap-select');

  await aurelia.start();
  await aurelia.setRoot('app');
}

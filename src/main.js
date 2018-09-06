import 'babel-polyfill';
import * as Bluebird from 'bluebird';
import 'jquery';
import 'bootstrap';

export async function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .plugin('aurelia-bootstrap-select')
    // .plugin('aurelia-bootstrap-tagsinput');
    .plugin('aurelia-bootstrap');

  await aurelia.start();
  await aurelia.setRoot('app');
}

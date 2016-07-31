///<reference path="../../node_modules/angular2/typings/browser.d.ts"/>
import 'reflect-metadata';
import 'zone.js/dist/zone';
import {bootstrap} from 'angular2/platform/browser'
import {Component,enableProdMode} from 'angular2/core'
enableProdMode();

@Component({
  selector: 'app',
  template: `{{message}}`
})
export class MyAppComponent {
  message: string;

  constructor() {
    var that = this
    that.message = 'Hello World!'
  }
}

bootstrap(MyAppComponent)

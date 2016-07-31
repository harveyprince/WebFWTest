///<reference path="../../node_modules/angular2/typings/browser.d.ts"/>
import {bootstrap} from 'angular2/platform/browser'
import {Component} from 'angular2/core'

@Component({
  selector: 'app',
  template: `{{message}}`
})
export class MyAppComponent {
  message: string;

  constructor() {
    var that = this
    that.message = 'Hello World'
  }
}

bootstrap(MyAppComponent)

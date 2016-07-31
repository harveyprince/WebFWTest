///<reference path="../../../node_modules/angular2/typings/browser.d.ts"/>
import 'reflect-metadata';
import 'zone.js/dist/zone';
import {bootstrap} from 'angular2/platform/browser'
import {Component,enableProdMode} from 'angular2/core'
//enableProdMode();
import { Hero } from './hero.ts';
import {HeroContent} from "./hero-content.ts";
import {HeroService} from "./heroService.ts";

@Component({
  selector: 'app',
  directives: [HeroContent],
  template: `
    <h1>{{title}}</h1>
    <h2>My favorite hero is: {{content}}</h2>
    <p>Heroes:</p>
    <content></content>
    <p>{{message}}</p>
    <input #box (keyup)="0" />
    <p>{{box.value}}</p>
    <input [(ngModel)]="model" />
    <p>{{model}}</p>
  `
})
export class HelloComp {
  title: string;
  content:string;
  message:string;
  model:string;

  constructor() {
    var that = this
    that.title = 'Hello World Title!'
    that.content = 'here is the content'
    that.message = 'loading'
  }

}

bootstrap(HelloComp,[HeroService])

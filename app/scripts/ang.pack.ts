///<reference path="../../node_modules/angular2/typings/browser.d.ts"/>
import 'reflect-metadata';
import 'zone.js/dist/zone';
import {bootstrap} from 'angular2/platform/browser'
import {Component,enableProdMode} from 'angular2/core'
//enableProdMode();
import { Hero } from './hero.ts';

@Component({
  selector: 'app',
  template: `
    <h1>{{title}}</h1>
    <h2>My favorite hero is: {{content}}</h2>
    <p>Heroes:</p>
    <ul>
      <li *ngFor="let hero of heroes">
        {{ hero.name }}
      </li>
    </ul>
    <p *ngIf="heroes.length > 3">There are many heroes!</p>
  `
})
export class HelloComp {
  title: string;
  content:string;
  heroes = [
      new Hero(1, 'Windstorm'),
      new Hero(13, 'Bombasto'),
      new Hero(15, 'Magneta'),
      new Hero(20, 'Tornado')
  ];

  constructor() {
    var that = this
    that.title = 'Hello World Title!'
    that.content = 'here is the content'
  }
}

bootstrap(HelloComp)

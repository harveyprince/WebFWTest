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
    <select class="form-control" required>
        <option *ngFor="let hero of heroes" [value]="hero.name">{{ hero.name }}</option>
    </select>
    <ul>
      <li *ngFor="let hero of heroes" (click)='onClickHero(hero)'>
        {{ hero.name }}
      </li>
    </ul>
    <p *ngIf="heroes.length > 3">{{message}}</p>
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
    that.message = 'loading'
  }

  onClickHero(hero){
      this.message = hero.name
  }

}

bootstrap(HelloComp)

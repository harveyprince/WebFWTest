/**
 * Created by harveyprince on 16/7/31.
 */
import {Component} from 'angular2/core'
import {HeroService} from "./heroService.ts";
@Component({
    selector: 'content',
    template: `
        <select class="form-control" required>
            <option *ngFor="let hero of heroes" [value]="hero.name">{{ hero.name }}</option>
        </select>
    `
})
export class HeroContent{
    heroes:Object
    constructor(public heroService:HeroService){
        var that = this;
        that.heroes = heroService.heroes
    }
}
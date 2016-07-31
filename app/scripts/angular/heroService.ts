/**
 * Created by harveyprince on 16/7/31.
 */
import { Hero } from './hero.ts';
import {Injectable} from "angular2/core";
@Injectable()
export class HeroService {
    heroes = [
        new Hero(1, 'Windstorm'),
        new Hero(13, 'Bombasto'),
        new Hero(15, 'Magneta'),
        new Hero(20, 'Tornado')
    ];
}

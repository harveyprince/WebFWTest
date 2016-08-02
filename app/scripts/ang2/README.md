### Angular2
***
when use angular2, we cannot just use angular.element().scope like angular1
we can do like below
```
//our root app component
import {Component, NgZone} from 'angular2/core'

@Component({
  selector: 'my-app',
  template: `
    <div>
      <h2>Hello {{name}}</h2>

    </div>
  `,
})
export class App {
  constructor(zone: NgZone) {
    this.name = 'Angular2'
    window.app = this
    window.zoneImpl = zone
  }
}
```
and outside use
```
zoneImpl.run(() => window.app.name = "new name!")
```
to update data outside the component
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  private MODULE = 'HomePage';

  log(func, line = '') {
      console.log(this.MODULE + '::' + func + '|' + line);
  }

  constructor() {
    this.log('constructor');
  }
}

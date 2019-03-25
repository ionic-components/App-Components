import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-hover-grid',
  templateUrl: './hover-grid.component.html',
  styleUrls: [ './hover-grid.component.scss' ],
})
export class HoverGridComponent implements OnInit {
  private MODULE = 'HoverGridComponent';

  log(func: string, line = '') {
    console.log(this.MODULE + '::' + func + '|' + line);
  }

  constructor() {
    this.log('constructor');
  }

  ngOnInit() {
    this.log('ngOnInit');
  }

  @HostListener('mouseenter') mouseEnter(event: Event) {
    this.log('mouseEnter(event)', JSON.stringify(event));
  }
}

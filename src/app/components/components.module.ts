import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

import { HoverGridComponent } from './hover-grid/hover-grid.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
    imports: [CommonModule, IonicModule.forRoot()],
    declarations: [HoverGridComponent, HeaderComponent],
    exports: [HoverGridComponent, HeaderComponent],
    entryComponents: [],
})
export class ComponentsModule {
    private MODULE = 'ComponentsModule';

    log(func, line = '') {
        console.log(this.MODULE + '::' + func + '|' + line);
    }

    constructor() {
        this.log('constructor');
    }
}

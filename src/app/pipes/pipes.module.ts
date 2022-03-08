import { NgModule } from '@angular/core';
import { FiltroPipe } from './filtro.pipe';
import { ObjNgForPipe } from './obj-ng-for.pipe';


@NgModule({
  declarations: [FiltroPipe, ObjNgForPipe],
  exports: [ FiltroPipe, ObjNgForPipe]
})
export class PipesModule { }

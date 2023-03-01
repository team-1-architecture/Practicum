import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeatmapComponent } from './heatmap/heatmap.component';
import { InputFileComponent } from './input-file/input-file.component';

const routes: Routes = [
  {path: 'input-file', component: InputFileComponent},
  {path: 'heatmap', component: HeatmapComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListApiComponent } from './components/list-api/list-api.component';
import { List2ApiComponent } from './components/list2-api/list2-api.component';

const routes: Routes = [
  {path: "mongo", component: ListApiComponent},
  {path: "mysql", component: List2ApiComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

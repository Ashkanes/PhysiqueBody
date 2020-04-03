import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainAppComponent } from './main-app/main-app.component';
import { MainContectComponent } from './components/main-contect/main-contect.component';


const routes: Routes = [
  {path:"", component:MainAppComponent,children:[
  {path:"", component:MainContectComponent}
]},
{path:"**", redirectTo:""}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasicRoutingModule { }

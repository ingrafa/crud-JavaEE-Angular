import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddClienteComponent } from './pages/cliente/add-cliente/add-cliente.component';
import { UpdateClienteComponent } from './pages/cliente/update-cliente/update-cliente.component';
import { ViewClienteComponent } from './pages/cliente/view-cliente/view-cliente.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    pathMatch:'full'
  },
  {
    // path:'cliente',
    // component:ViewClienteComponent,
    // // pathMatch:'full',
    // // canActivate:[AdminGuard],
    // children:[{
      path:'view-cliente',
      component:ViewClienteComponent
      },
      {
      path:'add-cliente',
      component:AddClienteComponent
      },
      {
        path:'update/:id',
        component:UpdateClienteComponent
      }
    ]
  // }
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

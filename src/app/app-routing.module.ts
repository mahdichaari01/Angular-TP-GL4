import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CvComponent } from './cv/cv/cv.component';
import { HomeComponent } from './components/home/home.component';
import { AdminComponent } from './components/admin/admin.component';
import { NF404Component } from './components/nf404/nf404.component';
import {DetailCvComponent} from "./cv/detail-cv/detail-cv.component";
import {LoginComponent} from "./login/login.component";
import {MergeComponent} from "./components/merge/merge.component";
import {ProductsComponent} from "./components/products/products.component";
import {CvResolver} from "./cv/services/cv-resolver.service";

// pipe
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path : 'cv' ,
    component: CvComponent,
    children :
      [


        {
          path: ':id',
          component: DetailCvComponent,
          resolve:{cv:CvResolver}
        },
      ]
  },
  { path: 'login', component:LoginComponent  },

  {
    path: 'admin',
    component: AdminComponent,
  },
    {
        path : "products",
        component : ProductsComponent
    },
    {path: 'merge' , component: MergeComponent},

  { path: '**', component: NF404Component },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

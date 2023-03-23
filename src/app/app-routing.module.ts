import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TagListComponent } from './components/tag-list/tag-list.component';

const routes: Routes = [{
 
      path:'bosch/digitalthread',
      component:TagListComponent,
    }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes),RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

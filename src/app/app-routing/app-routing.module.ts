import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { RoutetesteComponent } from '../routeteste/routeteste.component';
import { SectionComponent} from '../section/section.component';

const routes: Routes = [

  { path: '',component: LayoutComponent  ,pathMatch: 'full' },
  {
    path: '', component: LayoutComponent, children: [
      { path: 'routeteste', component: RoutetesteComponent },
      { path: 'section', component: SectionComponent },
    ]
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }

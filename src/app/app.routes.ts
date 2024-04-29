import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { TestComponent } from './pages/test/test.component';
import { Test2Component } from './pages/test2/test2.component';

export const routes: Routes = [{
  path: 'layout',
  component: LayoutComponent,
  children: [{
    path: 'test',
    component: TestComponent,
    data: {
      title: 'test'
    }
  }, {
    path: 'test2',
    component: Test2Component,
    data: {
      title: 'test2'
    }
  }, {
    path: '',
    pathMatch: 'full',
    redirectTo: 'test'
  }]
}, {
  path: '',
  pathMatch: 'full',
  redirectTo: 'layout'
}];

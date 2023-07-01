import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { AuthGuard } from './auth/auth-guard.service';
import { PlayDetailsComponent } from './core/play-details/play-details.component';
import { PlayFormComponent } from './core/play-form/play-form.component';
import { MyProfileComponent } from './core/my-profile/my-profile.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  { path: 'play/:id', component: PlayDetailsComponent },
  { path: 'add-new-show', component: PlayFormComponent },
  { path: 'my-profile', component: MyProfileComponent }
  //   {path:'students', loadChildren: () => import('./students/students.module').then(m => m.StudentsModule), canActivate:[AuthGuard], data: {roles: [Role.Professor, Role.Staff]}},
  //   {path:'theses', loadChildren: () => import('./theses/thesis.module').then(m => m.ThesisModule)},
  //   {path:'theses-admin', loadChildren: () => import('./theses-staff/theses-staff.module').then(m => m.ThesesStaffModule)},
  //   {path:'thesis', loadChildren: () => import('./student-thesis/student-thesis.module').then(m => m.StudentThesisModule), canActivate:[AuthGuard], data: {roles: [Role.Student]}},
  //   {path:'notifications', loadChildren: () => import('./notifications/notifications.module').then(m => m.NotificationsModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule {}

//
// @NgModule({
//   imports: [
//     RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})
//   ],
//   exports: [RouterModule],
//   providers: [
//     AuthGuard
//   ]
// })
// export class AppRoutingModule {
//
// }

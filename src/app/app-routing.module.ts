import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: 'desktop',
        loadChildren: './angular-modules/routed/desktop/desktop.module#DesktopModule'
    },
    {
        path: '',
        redirectTo: 'desktop',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: 'desktop',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

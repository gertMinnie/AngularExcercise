import { ListViewComponent } from './components/list-view/list-view.component';
import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { ProfileViewComponent } from './components/profile-view/profile-view.component';

const routes: Routes = [
    {
        path:"",
        redirectTo: "/listView"
    },
    {
        path:"list-view",
        component: ListViewComponent
    },
    {
        path:"profile-view",
        component: ProfileViewComponent
    }
];
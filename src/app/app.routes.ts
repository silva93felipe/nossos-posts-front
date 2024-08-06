import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { PostsComponent } from './pages/posts/posts.component';

export const routes: Routes = [
    { path: '',  component: PostsComponent },
    { path: 'login', component: LoginComponent }
];
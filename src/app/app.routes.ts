import { Routes } from '@angular/router';
import { Jokes } from './components/jokes/jokes';
import { About } from './components/about/about';
import { PageNotFound } from './components/page-not-found/page-not-found';

export const routes: Routes = [
    // {path: "home", component: },
    {path: "about", component: About},
    {path: "jokes", component: Jokes},

    {path: "", component: About},

    {path: "**", component: PageNotFound}
];

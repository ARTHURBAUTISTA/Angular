import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
    import { from } from 'rxjs';
import { ArtistComponentComponent } from './components/artist-component/artist-component.component';


const routes: Routes = [
    { path: 'home', component: HomeComponent },
    {path:'search',component:SearchComponent},
    {path: 'artist/:id',component:ArtistComponentComponent},
    { path: '**', pathMatch:'full', redirectTo: 'home' }
];

export const appRouting = RouterModule.forRoot(routes);
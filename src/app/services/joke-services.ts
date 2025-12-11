import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { firstValueFrom } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class JokeServices {
    constructor(private http: HttpClient) { }
    
    public async getJoke() {

        // Create observable object
        const observable = this.http.get(environment.jokesUrl);

        // actual call:
        const joke = await firstValueFrom(observable);
        return joke;

        return "This is a joke returned by JokeServices";
    }
}

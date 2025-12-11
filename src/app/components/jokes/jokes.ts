import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { JokeServices } from '../../services/joke-services';
import { ChangeDetectorRef } from '@angular/core';

@Component({
    selector: 'app-jokes',
    imports: [CommonModule],
    templateUrl: './jokes.html',
    styleUrl: './jokes.css',
})
export class Jokes implements OnInit, OnDestroy {

    public joke: any;

    constructor(private jokeServices: JokeServices, 
                private cdr: ChangeDetectorRef) { }


    async ngOnInit(): Promise<void> {
        console.log("Jokes Rendered");
        this.refreshJoke();
    }
    
    ngOnDestroy(): void {
        console.log("Jokes Destroyed");
    }
    
    async refreshJoke(){
        this.joke = await this.jokeServices.getJoke();
        this.cdr.detectChanges();
    }
}

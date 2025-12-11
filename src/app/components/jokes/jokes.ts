import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-jokes',
  imports: [CommonModule],
  templateUrl: './jokes.html',
  styleUrl: './jokes.css',
})
export class Jokes {
    public showJoke = 5;
    public user = {
        age: 40,
        name: "David"
    }
}

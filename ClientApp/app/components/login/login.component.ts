
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'login',
    templateUrl: './login.component.html'
})
export class LoginComponent {

    name: string;

    constructor(private router:Router) {
        this.name = 'Sam';
    }

    public login() {
        this.router.navigate(["profile", "12345"]);
    }
}

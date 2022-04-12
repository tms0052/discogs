import { Component } from "@angular/core"
import { NgForm } from "@angular/forms"


@Component({
        selector: "dsc-auth",
        templateUrl:  "auth.component.html"
    })
export class AuthComponent{
    public onSubmit(data: NgForm){
        console.log("ButtonClicked")
        console.log(data.value)
    }
}
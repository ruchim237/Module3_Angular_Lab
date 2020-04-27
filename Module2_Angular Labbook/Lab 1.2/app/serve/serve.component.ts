import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-serve',
    templateUrl: './serve.component.html',
    styleUrls:['./serve.component.css']
})
export class ServeComponent implements OnInit{
    private id: any;
    private name:any;
    private salary :any;
    private depart:any;

    constructor() {}

    ngOnInit(): void{

    }
    save(arg1:any, arg2:any, arg3:any, arg4:any)
    {
        this.id=(<HTMLInputElement>arg1).value;
        this.name=(<HTMLInputElement>arg2).value;
        this.salary=(<HTMLInputElement>arg3).value;
        this.depart=(<HTMLInputElement>arg4).value;
        alert(this.id+" "+this.name+""+this.salary+" "+this.depart);}
    
}
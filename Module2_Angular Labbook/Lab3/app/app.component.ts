import { Component,OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import {PserviceService} from './pservice.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  addForm:FormGroup;
  submitted:boolean=false; 
  title: any;
  constructor(public formBuilder: FormBuilder,public pserviceService : PserviceService) { }

  ngOnInit() {
    this.addForm =this.formBuilder.group({
      productId:['',[Validators.required]],

      producName:['',[Validators.required]],
      productCost: ['',[Validators.required]],
    });
  }

  addProduct(){
    this.submitted=true;
    if(this.addForm.invalid)
    {
      return;
    }
    this.pserviceService.addProduct(this.addForm.value);
   
  }

}




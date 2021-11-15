
import{FormGroup,FormControl,FormBuilder, Validators} from '@angular/forms'
import { ProductAndCategoriesServiceService } from 'src/app/services/product-and-categories-service.service'
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { Category } from 'src/app/models/category';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-adding-products',
  templateUrl: './adding-products.component.html',
  styleUrls: ['./adding-products.component.scss']
})
export class AddingProductsComponent implements OnInit {
  nameths:String='';
  prd:Product={} as Product
  myForm: FormGroup;
  catList:Category[]=[];
  private subscriptionsAdmin:Subscription[]=[];
  constructor(private fb: FormBuilder,private catAPI:ProductAndCategoriesServiceService) {

    this.myForm=this.fb.group({
      id:Date.now(),
      Name:['',[Validators.required,Validators.minLength(10)]],
      Price:['',Validators.required],
      Quantity:['',[Validators.min(1),Validators.max(100)]],
      ImgUrL:[''],
      CategoryName:['']

    })
   }

  ngOnInit(): void {
    this.catAPI.getallCategories()
    .subscribe(categoriesList=>{
      this.catList=categoriesList;
    })
    this.myForm.valueChanges.subscribe() 
  }

  addProduct(prd:Product){
   console.log(prd)
    this.subscriptionsAdmin.push(
      this.catAPI.insertProduct(prd)
      .subscribe(newProd=>
        {prd=newProd;
          console.log(prd)
          console.log(newProd)
        }
        ))
     alert(`you have Added ${prd.Name}, Successfully.!`);
  }

  upload(event:any){
    const file= event.target.files[0];
    console.log(file.name);
this.myForm.patchValue({ImgURL:file.name})
      this.catAPI.uploadimage(file).subscribe((d)=>{
      console.log("New file",d);
    },error=>{console.error(error);});
   }

   uploadMulti(event:any){
    const files:FileList= event.target.files;
    console.log(files);
    this.catAPI.uploadImages(files).subscribe((d)=>{  
      console.log(d);
    },error=>{console.error(error);});

   }
  }



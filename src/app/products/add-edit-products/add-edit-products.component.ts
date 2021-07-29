import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { CurrencyPipe } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-edit-products',
  templateUrl: './add-edit-products.component.html',
  styleUrls: ['./add-edit-products.component.css']
})
export class AddEditProductsComponent implements OnInit {

  public myForm!: FormGroup;

  constructor(private service:SharedService, private FormBuilder:FormBuilder) { }

  @Input() prod:any;
  ProductId!:string;
  ProductName!:string;
  Category!:string;
  Price!:string;
  Quantity!:string;
  Inventory!:string;
  Material1!:string;
  Material2!:string;
  PhotoFileName!:string;
  PhotoFilePath!:string;

  ProductList:any=[];



  ngOnInit(): void {
    this.loadProductList();

    console.log(this.myForm);

    this.myForm = new FormGroup({
      productname: new FormControl('', Validators.required),
      category:  new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      quantity: new FormControl('', Validators.pattern("^[0-9]*$") ),
      inventory: new FormControl('', Validators.required),
      material1: new FormControl(''),
      material2: new FormControl('')
    });   
  }


  loadProductList(){
    this.service.getProdList().subscribe((data:any)=>{
      this.ProductList=data;

      this.ProductId=this.prod.ProductId;
      this.ProductName=this.prod.ProductName;
      this.Category=this.prod.Category;
      this.Price=this.prod.Price;
      this.Quantity=this.prod.Quantity;
      this.Inventory=this.prod.Inventory;
      this.Material1=this.prod.Material1;
      this.Material2=this.prod.Material2;
      this.PhotoFileName=this.prod.PhotoFileName;
      this.PhotoFilePath=this.service.PhotoUrl+this.PhotoFileName;
    });
  }

  addProduct(){
    var val = {ProductId:this.ProductId,
      ProductName:(<HTMLInputElement>document.getElementById("ProductName")).value,
      Category:(<HTMLInputElement>document.getElementById("Category")).value,
      Price:(<HTMLInputElement>document.getElementById("Price")).value,
      Quantity:(<HTMLInputElement>document.getElementById("Quantity")).value,
      Inventory:(<HTMLInputElement>document.getElementById("Inventory")).value,
      Material1:(<HTMLInputElement>document.getElementById("Material1")).value,
      Material2:(<HTMLInputElement>document.getElementById("Material2")).value,
      PhotoFileName:this.PhotoFileName          
              };
    this.service.addProducts(val).subscribe(res=>{
      alert(res.toString()); 
      window.location.reload();
    });
  
  }

  updateProduct(){
    var val = {ProductId:this.ProductId,
      ProductName:(<HTMLInputElement>document.getElementById("ProductName")).value,
      Category:(<HTMLInputElement>document.getElementById("Category")).value,
      Price:(<HTMLInputElement>document.getElementById("Price")).value,
      Quantity:(<HTMLInputElement>document.getElementById("Quantity")).value,
      Inventory:(<HTMLInputElement>document.getElementById("Inventory")).value,
      Material1:(<HTMLInputElement>document.getElementById("Material1")).value,
      Material2:(<HTMLInputElement>document.getElementById("Material2")).value,
      PhotoFileName:this.PhotoFileName
    };
    this.service.updateProducts(val).subscribe(res=>{
    alert(res.toString());
    window.location.reload();
  });
  
  }

  uploadPhoto(event:any){
    var file = event.target.files[0];
    const formData:FormData = new FormData();
    formData.append('uploadedFile', file, file.name);

    this.service.UploadPhoto(formData).subscribe((data:any)=>{
      this.PhotoFileName=data.toString();
      this.PhotoFilePath=this.service.PhotoUrl+this.PhotoFileName;
    });
  }

}


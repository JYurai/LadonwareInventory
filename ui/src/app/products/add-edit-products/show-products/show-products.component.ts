import { SharedService } from 'src/app/shared.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-products',
  templateUrl: './show-products.component.html',
  styleUrls: ['./show-products.component.css']
})
export class ShowProductsComponent implements OnInit {

  constructor(private service: SharedService) { }

  ProductsList:any=[]; 

  ModalTitle!:string;
  ActivatedAddEditProdComp:boolean=false;
  prod:any;

  ProductIdFilter:string="";
  ProductNameFilter:string="";
  ProductListWithoutFilter:any=[];
  PhotoFilePath!:string;
  PhotoFileName!:string;

  ngOnInit(): void {
    this.refreshProdList(); 
  }

  addClick(){
    this.prod={
      ProductId:0,
      ProductName:"",
      Category:"",
      Price:"",
      Quantity:"",
      Inventory:"",
      Material1:"",
      Material2:"",
      PhotoFileName:""
    }
    this.ModalTitle="Añadir producto";
    this.ActivatedAddEditProdComp = true;
  }

  editClick(item: any){
    console.log(item);
    this.prod=item;
    this.ModalTitle="Editar producto";
    this.ActivatedAddEditProdComp = true;
  }

  deleteClick(item: any){
    if(confirm('¿Estás seguro?')){
      this.service.deleteProducts(item.ProductId).subscribe(data=>{
      alert(data.toString());
      this.refreshProdList();
      });
    }
  }

  closeClick(){
    this.ActivatedAddEditProdComp = false;
    this.refreshProdList(); 
  }

  refreshProdList(){
    this.service.getProdList().subscribe(data=>{
      this.ProductsList=data;
      this.ProductListWithoutFilter=data;
      this.PhotoFilePath=this.service.PhotoUrl;
      console.log(this.PhotoFilePath);
    });  

  } 

  FilterFn(){
    var ProductIdFilter = this.ProductIdFilter;
    var ProductNameFilter = this.ProductNameFilter;

    this.ProductsList = this.ProductListWithoutFilter.filter(function (el:any){
      return el.ProductId.toString().toLowerCase().includes(
        ProductIdFilter.toString().trim().toLowerCase()
      )&&
        el.ProductName.toString().toLowerCase().includes(
          ProductNameFilter.toString().trim().toLowerCase()
        )
    });
  }

}

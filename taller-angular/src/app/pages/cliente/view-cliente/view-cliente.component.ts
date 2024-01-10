import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';
import { Router, Route, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { MatSnackBar } from '@angular/material/snack-bar';

import { clientesAll1 } from 'src/clientesAll1';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-view-cliente',
  templateUrl: './view-cliente.component.html',
  styleUrls: ['./view-cliente.component.css']
})
export class ViewClienteComponent implements OnInit {

  title = 'data-table';
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol','fecha'];
  dataSource!: MatTableDataSource<clientesAll1>;
  posts:any;

  id:any;
clientes:any=[];

  constructor( private router:Router,
    private route:ActivatedRoute, 
    private snack:MatSnackBar,
    private clienteService:ClienteService){
      this.clienteService.listarClientes().subscribe((data) => {
        console.log(data);
        this.posts= data
        this.dataSource = new MatTableDataSource()
      })
  }
  

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.clienteService.listarClientes().subscribe(
      (data:any) => {
        this.clientes = data;
        this.dataSource = data;
        // this.posts = data;
        // this.dataSource = new MatTableDataSource(this.posts);
        console.log(this.clientes);
      },
      (error) => {
        console.log(error);
        Swal.fire('Error','Error al cargar los clientes','error');
      }
    );
  }

  eliminarCliente(id:any){
    Swal.fire({
      title:'Eliminar Cliente',
      text:'Estas seguro de eliminar el cliente?',
      icon:'warning',
      showCancelButton:true,
      confirmButtonColor:'#3085d6',
      cancelButtonColor:'#d33',
      confirmButtonText:'Eliminar',
      cancelButtonText:'Cancelar'
    }).then((result) => {
      if(result.isConfirmed){
        this.clienteService.eliminarCliente(id).subscribe(
          (data) => {
            this.clientes = this.clientes.filter((cliente:any) => cliente.id != id);
            Swal.fire('Cliente eliminado','El cliente ha sido eliminado','success');
            this.router.navigate(['/view-cliente']);
            console.log(data);
          },
          (error) => {
            Swal.fire('Error','Error al elimnar el cliente','error');
            this.router.navigate(['/view-cliente']);
            console.log(error);
          }
        )
      }
    })
  }


}

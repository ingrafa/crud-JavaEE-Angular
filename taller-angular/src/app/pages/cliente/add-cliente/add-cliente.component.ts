import { Component, OnInit } from '@angular/core';
import { Router, Route } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

import { ClienteService } from 'src/app/services/cliente.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-cliente',
  templateUrl: './add-cliente.component.html',
  styleUrls: ['./add-cliente.component.css']
})
export class AddClienteComponent implements OnInit {

cliente = {
  nombre:'',
  direccion:'',
  email:'',
  fecha:''
}

  constructor( 
    private router:Router, 
    private snack:MatSnackBar,
    private clienteService:ClienteService ){}

  ngOnInit(): void {
  }

  guardarCliente(){
    console.log(this.cliente);

    this.clienteService.addCliente(this.cliente).subscribe(
      (data:any) => {
        this.cliente.nombre='';
        this.cliente.direccion='';
        this.cliente.email='';
        this.cliente.fecha='';
        // console.log(data);
        Swal.fire('Cliente guardado','El cliente ha sido guardado con exito','success');
        this.router.navigate(['/view-cliente']);
      },
      (error) =>{
        console.log(error);
        Swal.fire('Error','Error al guardar el cliente', 'error');
      }
    )
  }

}

import { Component, OnInit } from '@angular/core';
import { Router, Route, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

import { ClienteService } from 'src/app/services/cliente.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-cliente',
  templateUrl: './update-cliente.component.html',
  styleUrls: ['./update-cliente.component.css']
})
export class UpdateClienteComponent implements OnInit {

  constructor(private router:Router, 
    private route:ActivatedRoute, 
    private snack:MatSnackBar,
    private clienteService:ClienteService) { }

    id = 0;
    cliente:any;

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    // alert(this.examenId);
    this.clienteService.obtenerCliente(this.id).subscribe(
      (data) => {
        this.cliente = data;
        console.log(this.cliente);
      },
      (error) => {
        console.log(error);
      }
    )
  }

  public actualizarCliente(){
    this.clienteService.actualizarCliente(this.cliente).subscribe(
    (data) => {
      Swal.fire('Cliente actualizado','El cliente ha sido actualizado con exito','success').then(
      (e) => {
        this.router.navigate(['/view-cliente']);
      }
      );
    },
    (error) => {
      Swal.fire('Error en el sistema','No se ha podido actualizar el cliente','error');
      console.log(error);
    }
    )
  }

}

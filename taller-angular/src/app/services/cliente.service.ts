import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baserUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http:HttpClient) {}

    public listarClientes(){
      return this.http.get(`${baserUrl}/api/clientes/`);
    }

    public addCliente(cliente:any){
      return this.http.post(`${baserUrl}/api/clientes/`,cliente);
    }

    public eliminarCliente(id:any){
      return this.http.delete(`${baserUrl}/api/clientes/${id}`);
    }

    public obtenerCliente(id:any){
      return this.http.get(`${baserUrl}/api/clientes/${id}`);
    }

    public actualizarCliente(cliente:any){
      return this.http.put(`${baserUrl}/api/clientes/`,cliente);
    }

   }

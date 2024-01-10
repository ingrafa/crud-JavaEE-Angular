package com.cliente.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.cliente.entity.Cliente;
import com.cliente.service.ClienteService;

@RestController
@RequestMapping("/api/clientes")
@CrossOrigin("*")
public class ClienteController {
	
	@Autowired
	private ClienteService clienteService;
		
	@PostMapping
	@ResponseStatus(HttpStatus.CREATED)
	public Cliente guardarCliente(@RequestBody Cliente cliente) {
		return clienteService.saveCliente(cliente);
	}
	
	@GetMapping
	public List<Cliente> listarCliente() {
		return clienteService.getAllClientes();
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Cliente> obtenerClientePorId(@PathVariable("id") long clienteId){
		return clienteService.getClienteById(clienteId)
				.map(ResponseEntity::ok)
				.orElseGet(() -> ResponseEntity.notFound().build());
	}

	@PutMapping("/{id}")
	public ResponseEntity<Cliente> actualizarCliente(@PathVariable("id") long clienteId, @RequestBody Cliente cliente) throws Exception {
		return clienteService.getClienteById(clienteId)
				.map(clienteGuardado -> {
					clienteGuardado.setNombre(cliente.getNombre());
					clienteGuardado.setDireccion(cliente.getDireccion());
					clienteGuardado.setEmail(cliente.getEmail());
					clienteGuardado.setFecha(cliente.getFecha());
					
					Cliente clienteActualizado = clienteService.updateCliente(clienteGuardado);
					return new ResponseEntity(clienteActualizado,HttpStatus.OK);
				})
				.orElseGet(() -> ResponseEntity.notFound().build());
	}
	
//	@PutMapping("/{id}")
//	public ResponseEntity<Cliente> actualizarCliente(@RequestBody Cliente cliente){
//		return ResponseEntity.ok(clienteService.updateCliente(cliente));
//	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<String> eliminarCliente(@PathVariable("id") long clienteId){
		clienteService.deleteCliente(clienteId);
		return new ResponseEntity<String>("Cliente eliminado exitosamente", HttpStatus.OK);
	}

}

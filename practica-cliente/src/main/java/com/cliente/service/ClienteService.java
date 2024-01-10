package com.cliente.service;

import java.util.List;
import java.util.Optional;

import com.cliente.entity.Cliente;

public interface ClienteService {

	Cliente saveCliente(Cliente cliente);
	
	List<Cliente> getAllClientes();
	
	Optional<Cliente> getClienteById(long id);
	
	Cliente updateCliente(Cliente clienteActualizado);
	
	void deleteCliente(long id);
}

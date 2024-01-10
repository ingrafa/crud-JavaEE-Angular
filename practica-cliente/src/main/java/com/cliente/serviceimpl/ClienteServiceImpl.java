package com.cliente.serviceimpl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cliente.entity.Cliente;
import com.cliente.repositories.ClienteRepository;
import com.cliente.service.ClienteService;

@Service
public class ClienteServiceImpl implements ClienteService {
	
	 @Autowired
	    private ClienteRepository clienteRepository;

	    @Override
	    public Cliente saveCliente(Cliente cliente) {
//	        Optional<Cliente> clienteGuardado = clienteRepository.findByEmail(empleado.getEmail());
//	        if(empleadoGuardado.isPresent()){
//	            throw new ResourceNotFoundException("El empleado con ese email ya existe : " + empleado.getEmail());
//	        }
	        return clienteRepository.save(cliente);
	    }

	    @Override
	    public List<Cliente> getAllClientes() {
	        return clienteRepository.findAll();
	    }

	    @Override
	    public Optional<Cliente> getClienteById(long id) {
	        return clienteRepository.findById(id);
	    }

	    @Override
	    public Cliente updateCliente(Cliente clienteActualizado) {
	        return clienteRepository.save(clienteActualizado);
	    }

	    @Override
	    public void deleteCliente(long id) {
	    	clienteRepository.deleteById(id);
	    }
	
}

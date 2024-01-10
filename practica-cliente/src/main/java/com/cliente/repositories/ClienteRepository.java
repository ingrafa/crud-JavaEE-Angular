package com.cliente.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.cliente.entity.Cliente;

public interface ClienteRepository extends JpaRepository<Cliente, Long>{

}

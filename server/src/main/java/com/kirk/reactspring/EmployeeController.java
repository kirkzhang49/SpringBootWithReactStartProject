package com.kirk.reactspring;


import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;

@RestController
public class EmployeeController {
    private EmployeeRepository repository;
    public EmployeeController(EmployeeRepository repository){
        this.repository = repository;
    }
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/myemployee")
    public Collection<Employee>myemployee(){
        return (Collection<Employee>) repository.findAll();
    }
}

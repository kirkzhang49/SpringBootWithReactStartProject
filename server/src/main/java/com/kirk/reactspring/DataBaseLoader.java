package com.kirk.reactspring;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class DataBaseLoader implements CommandLineRunner {
    private final EmployeeRepository repository;

    @Autowired
    public DataBaseLoader(EmployeeRepository repository) {
        this.repository = repository;
    }


    @Override
    public void run(String... args) throws Exception {
        List<Employee> ListResult = new ArrayList<>();
        Employee e1 = new Employee("kirk","Zhang","Developer");
        Employee e2 = new Employee("Zhengkai","Zhang","Software_Engineer");
        ListResult.add(e1);
        ListResult.add(e2);
        for(Employee e:ListResult){
            this.repository.save(e);
        }
    this.repository.findAll().forEach(System.out::println);
    }
}

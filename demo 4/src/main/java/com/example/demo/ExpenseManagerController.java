package com.example.demo;

import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000/")
public class ExpenseManagerController {


    // CREATE
    @PostMapping("/new")
    public void addExpenses() {
    }

    // READ
    @GetMapping("/{id}")
    public void expensesById() {
    }

    @GetMapping("/highest")
    public void expensesHighToLow() {
    }

    @GetMapping("/lowest")
    public void expensesLowToHigh() {
    }
    @GetMapping("/all")
    public void allExpenses() {
    }
    @GetMapping("/daily")
    public void dailyExpenses() {
    }
    @GetMapping("/weekly")
    public void weeklyExpenses() {
    }
    @GetMapping("/monthly")
    public void monthlyExpenses() {
    }
    @GetMapping("/yearly")
    public void yearlyExpenses() {
    }

    // UPDATE
    @PutMapping("/edit")
    public void editExpenses() {
    }

    // DELETE
    @DeleteMapping("/delete")
    public void deleteExpenses() {
    }
}

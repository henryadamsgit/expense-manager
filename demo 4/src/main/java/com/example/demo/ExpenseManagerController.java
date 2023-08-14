package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/expenses")
public class ExpenseManagerController {

    @Autowired
    ExpenseManagerService service;

    // CREATE
    @PostMapping("/new")
    public void addExpenses(@RequestBody Expenses expense) {
        service.addExpense(expense);
    }

    // READ
    @GetMapping("/{id}")
    public void expensesById(@PathVariable int id) {
        service.getExpenseById(id);
    }

    @GetMapping("/highest")
    public void expensesHighToLow() {
        service.getHighToLow();
    }

    @GetMapping("/lowest")
    public void expensesLowToHigh() {
        service.getLowToHigh();
    }

    @GetMapping("/all")
    public void getAllExpenses() {
        service.getAllExpenses();
    }

    @GetMapping("/daily")
    public void dailyExpenses() {
        service.getDaily();
    }

    @GetMapping("/weekly")
    public void weeklyExpenses() {
        service.getWeekly();
    }

    @GetMapping("/monthly")
    public void monthlyExpenses() {
        service.getMonthly();
    }

    @GetMapping("/yearly")
    public void yearlyExpenses() {
        service.getYearly();
    }

    // UPDATE
    @PutMapping("/edit/{id}")
    public void editExpenses(@RequestBody Expenses expense, @PathVariable int id) {
        expense.setTransaction_id(id);
        service.editExpense(expense);
    }

    // DELETE
    @DeleteMapping("/delete/{id}")
    public void deleteExpenses(@PathVariable int id) {
        service.deleteExpense(id);
    }
}

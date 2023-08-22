package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class ExpenseManagerController {

    @Autowired
    ExpenseManagerService service;

    // CREATE
    @PostMapping("/new")
    public ResponseEntity<Void> addExpenses(@RequestBody Expenses expense) {
        service.addExpense(expense);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    // READ
    @GetMapping("/all")
    public ResponseEntity<List<Expenses>> getAllExpenses() {
        List<Expenses> expenses = service.getAllExpenses();
        return new ResponseEntity<>(expenses, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Expenses> expensesById(@PathVariable int id) {
        Expenses expense = service.getExpenseById(id);
        if (expense != null) {
            return new ResponseEntity<>(expense, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/highest")
    public ResponseEntity<List<Expenses>> expensesHighToLow() {
        List<Expenses> expenses = service.getHighToLow();
        return new ResponseEntity<>(expenses, HttpStatus.OK);
    }

    @GetMapping("/lowest")
    public ResponseEntity<List<Expenses>> expensesLowToHigh() {
        List<Expenses> expenses = service.getLowToHigh();
        return new ResponseEntity<>(expenses, HttpStatus.OK);
    }

    @GetMapping("/daily")
    public ResponseEntity<List<Expenses>> dailyExpenses() {
        List<Expenses> expenses = service.getDaily();
        return new ResponseEntity<>(expenses, HttpStatus.OK);
    }

    @GetMapping("/weekly")
    public ResponseEntity<List<Expenses>> weeklyExpenses() {
        List<Expenses> expenses = service.getWeekly();
        return new ResponseEntity<>(expenses, HttpStatus.OK);
    }

    @GetMapping("/monthly")
    public ResponseEntity<List<Expenses>> monthlyExpenses() {
        List<Expenses> expenses = service.getMonthly();
        return new ResponseEntity<>(expenses, HttpStatus.OK);
    }

    @GetMapping("/yearly")
    public ResponseEntity<List<Expenses>> yearlyExpenses() {
        List<Expenses> expenses = service.getYearly();
        return new ResponseEntity<>(expenses, HttpStatus.OK);
    }

    // UPDATE
    @PutMapping("/edit/{id}")
    public ResponseEntity<Void> editExpenses(@RequestBody Expenses expense, @PathVariable int id) {
        expense.setTransaction_id(id);
        service.editExpense(expense);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    // DELETE
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteExpenses(@PathVariable int id) {
        service.deleteExpense(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}

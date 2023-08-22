package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class ExpenseManagerService {

    private final ExpenseManagerRepository repository;
    @Autowired
    public ExpenseManagerService(ExpenseManagerRepository repository) {
        this.repository = repository;
    }


    public List<Expenses> getAllExpenses() {
        return repository.getAllExpenses();
    }

    public long calculateTotalBalance(List<Expenses> transactions) {
        long totalBalance = 0;
        for (Expenses transaction : transactions) {
            totalBalance += transaction.getPrice();
        }
        return totalBalance;
    }

    public Expenses getExpenseById(long transaction_id) {
        return repository.findExpenseById(transaction_id);
    }

    public List<Expenses> getHighToLow() {
        return repository.getHighToLow();
    }

    public List<Expenses> getLowToHigh() {
        return repository.getLowToHigh();
    }

    public Expenses addExpense(Expenses expense) {
        return repository.save(expense);
    }

    public List<Expenses> getDaily() {
        return repository.getDaily();
    }

    public List<Expenses> getWeekly() {
        return repository.getWeekly();
    }

    public List<Expenses> getMonthly() {
        return repository.getMonthly();
    }

    public List<Expenses> getYearly() {
        return repository.getYearly();
    }

    public Expenses editExpense(Expenses expense) {
        Expenses existingExpense = repository.findExpenseById(expense.getTransaction_id());
        if (existingExpense != null) {
            existingExpense.setPrice(expense.getPrice());
            existingExpense.setCompany(expense.getCompany());
            existingExpense.setTransaction_date((expense.getTransaction_date()));
            return repository.save(existingExpense);
        } else {
            return null;
        }
    }

    @Transactional
    public void deleteExpense(long transaction_id) {
        if (repository.existsById(transaction_id)) {
            repository.deleteById(transaction_id);
        }
    }
}

package com.example.demo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ExpenseManagerRepository extends JpaRepository<Expenses, Long> {

    @Query(value = "SELECT * FROM user_transactions", nativeQuery = true)
    List<Expenses> getAllExpenses();

    @Query(value = "SELECT * FROM user_transactions WHERE transaction_id = :id", nativeQuery = true)
    Expenses findExpenseById(@Param("id") long transaction_id);

    @Query(value = "SELECT * FROM user_transactions ORDER BY amount DESC", nativeQuery = true)
    List<Expenses> getHighToLow();

    @Query(value = "SELECT * FROM user_transactions ORDER BY amount ASC", nativeQuery = true)
    List<Expenses> getLowToHigh();

    @Query(value = "SELECT * FROM user_transactions WHERE DATE(date) = CURRENT_DATE", nativeQuery = true)
    List<Expenses> getDaily();

    @Query(value = "SELECT * FROM user_transactions WHERE WEEK(date) = WEEK(CURRENT_DATE)", nativeQuery = true)
    List<Expenses> getWeekly();

    @Query(value = "SELECT * FROM user_transactions WHERE MONTH(date) = MONTH(CURRENT_DATE)", nativeQuery = true)
    List<Expenses> getMonthly();

    @Query(value = "SELECT * FROM user_transactions WHERE YEAR(date) = YEAR(CURRENT_DATE)", nativeQuery = true)
    List<Expenses> getYearly();

    Expenses save(Expenses expense);
}

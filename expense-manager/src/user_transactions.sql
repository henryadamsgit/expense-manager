CREATE TABLE user_transactions (
transaction_id INT AUTO_INCREMENT PRIMARY KEY,
price LONG,
company VARCHAR(50),
balance LONG,
transaction_date VARCHAR(20)
);

USE user_transactions;

INSERT INTO user_transactions (transaction_id, price, company, balance, transaction_date) VALUES (
1, 9.99, 'Spotify', 90.01, '2023-08-08');

SELECT * FROM user_transactions;
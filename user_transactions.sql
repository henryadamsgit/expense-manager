DROP TABLE IF EXISTS user_transactions;

CREATE TABLE user_transactions (
transaction_id INT AUTO_INCREMENT PRIMARY KEY,
price LONG,
company VARCHAR(50), 
balance LONG,
transaction_date VARCHAR(20)
);


USE user_transactions;

INSERT INTO user_transactions (transaction_id, price, company, balance, transaction_date)  VALUES 
(1, 9.99, 'Spotify', 90.01, '2023-08-08'),
(2, 14.65, 'Tesco', 75.36, '2023-07-08'),
(3, 0.99, 'Apple', 74.37, '2023-07-08'),
(4, 3.00, 'Sainsbury', 72.36, '2023-06-08'),
(5, 5.20, 'WetherSpoons', 70.16, '2023-05-08'),
(6, 19.99, 'Dominoes', 50.17, '2023-05-08'),
(7, 0.65, 'Tesco', 49.52, '2023-04-08'),
(8, 8.99, 'Amazon', 40.53, '2023-02-08');

SELECT * FROM user_transactions;
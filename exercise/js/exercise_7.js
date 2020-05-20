import users from './users.js';

const calculateTotalBalance = users => {
    const totalUsersBalance = users.reduce(
        (totalBalance, money) => totalBalance + money.balance,
        0,
    );

    return totalUsersBalance;
};

console.log(calculateTotalBalance(users)); // 20916

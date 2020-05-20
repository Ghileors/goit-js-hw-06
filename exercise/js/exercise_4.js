import users from './users.js';

const getInactiveUsers = users => {
    const activeUsers = users.filter(user => !user.isActive);

    return activeUsers.map(user => user.name);
};

console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

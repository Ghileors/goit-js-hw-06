import users from './users.js';

const getNamesSortedByFriendsCount = users => {
    const foundFriends = users
        .sort((prev, next) => prev.friends.length - next.friends.length)
        .map(user => user.name);
    return foundFriends;
};

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

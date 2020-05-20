import users from './users.js';

const getUsersWithFriend = (users, friendName) => {
    const foundFriends = users
        .filter(users => users.friends.includes(friendName))
        .map(users => users.name);
    return foundFriends;
};

console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]

import users from './users.js';

const getSortedUniqueSkills = users => {
    const allSkils = users
        .reduce(function (skills, skill) {
            skills.push(...skill.skills);

            return skills;
        }, [])
        .filter(
            (currentUser, index, array) => array.indexOf(currentUser) === index,
        )
        .sort();

    return allSkils;
};

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]

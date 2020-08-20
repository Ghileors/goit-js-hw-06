import users from './users.js';

const getSortedUniqueSkills = users => {
    return users
        .reduce((skills, skill) => {
            skills.push(...skill.skills);

            return skills;
        }, [])
        .filter(
            (currentSkill, skill, users) =>
                users.indexOf(currentSkill) === skill,
        )
        .sort();
};

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]

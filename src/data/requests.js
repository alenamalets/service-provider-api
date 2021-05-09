import faker from 'faker'
const _ = require('lodash');

const count = 100
const skills = [
    'javascript',
    'swift',
    'python',
    'PHP',
    'java',
    'kotlin',
    'objective c',
    'devops',
    'UX design',
    'marketing'
]

//generate 100 request objects using faker library that include 3 random skills out of 10 suggested
export const generateRandomData = () => {
    try {
        const data = _.times(count, () => {
            return {
                name: faker.name.jobTitle(),
                skills: faker.helpers.shuffle(skills).slice(0, 3),
                startDate:  faker.date.between('2021-06-01', '2021-12-01'),
                endDate:  faker.date.future( '3', '2022-01-01')
            };
        })
        return data
    } catch (error) {
        console.log('error', error)
        return error
    }
};

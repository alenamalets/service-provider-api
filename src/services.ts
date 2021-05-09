import { generateRandomData } from './data/requests'

/**
 * Get random int from 1 to max
 * @param max
 */
const getRandomInt = (max: number) => {
    return (Math.floor(Math.random() * max)) + 1;
}

/**
 * Get requests based on skills
 * @param skills
 */
export const generateRequests = async (
    skills: string[]
) => {
    const requestsData = generateRandomData()
    try {
        //find 5 requests that includes at least one of the skills sending fron the front-end
        const filteredRequests = requestsData.filter((item: { skills: string[]; }) => {
            return item.skills.some(r=> skills.includes(r))
        }).slice(0, 5)

        const number = getRandomInt(4)
        //make the same start date in 2 requests
        filteredRequests[number].startDate = filteredRequests[0].startDate
        return filteredRequests
    } catch (error) {
        console.log('error', error)
        return error
    }
};
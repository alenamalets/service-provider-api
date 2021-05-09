import { generateRandomData } from './data/requests'

const getRandomInt = (max: number) => {
    return (Math.floor(Math.random() * max)) + 1;
}

/**
 * Get requests based on skills
 * @param skills
 */
export const getRequests = async (
    skills: string[]
) => {
    const requestsData = generateRandomData()
    try {
        const filteredRequests = requestsData.filter((item: { skills: string[]; }) => {
            return item.skills.some(r=> skills.includes(r))
        }).slice(0, 5)
        const number = getRandomInt(4)
        filteredRequests[number].startDate = filteredRequests[0].startDate
        return filteredRequests
    } catch (error) {
        console.log('error', error)
        return error
    }
};
import { generateRandomData } from './data/requests'

/**
 * Get requests based on skills
 * @param skills
 */
export const getRequests = async (
    skills: string[]
) => {
    const requestsData = generateRandomData()
    // console.log('requestsData', requestsData)
    try {
        const filteredRequests = requestsData.filter((item: { skills: string[]; }) => {
            return item.skills.some(r=> skills.includes(r))
        }).slice(0, 5)
        // console.log('filteredRequests', filteredRequests)
        return filteredRequests
    } catch (error) {
        console.log('error', error)
        return error
    }
};
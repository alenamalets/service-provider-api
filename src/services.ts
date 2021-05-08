import data from './data/requests.json'

/**
 * Get requests based on skills
 * @param skills
 */
export const getRequests = async (
    skills: string[]
) => {
    const requestsData = data
    try {
        const res = requestsData.filter(item => {
            return item.skills.some(r=> skills.includes(r))
        }).slice(0, 5)
        return res
    } catch (error) {
        console.log('error', error)
        return error
    }
};
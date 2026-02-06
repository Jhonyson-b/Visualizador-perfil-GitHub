const BASE_URL = 'https://api.github.com'

export const fetchUser = async (userName) => {
    const response = await fetch(`${BASE_URL}/users/${userName}`)
    if (!response.ok) {
        throw new Error('Usuário não encontrado');
    }
    return await response.json()
}
export const fetchUserRepos = async (userName) => {
    const response = await fetch(`${BASE_URL}/users/${userName}/repos?per_page=10&sort=created`)
    if (!response.ok) {
        throw new Error('Repositórios não encontrados');
    }
    return await response.json()
}
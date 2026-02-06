// API
import { fetchUser, fetchUserRepos } from './api.js'
import {
    renderLoading,
    renderUser,
    clearResults,
    showNotFoundAlert,
    showGenericErrorAlert,
    showEmptyInputAlert
} from './ui.js'

// DOM
const inputSearch = document.getElementById('input-search')
const btnSearch = document.getElementById('btn-search')
const profileResults = document.querySelector('.profile-results')


// Fluxo principal
const handleSearch = async () => {
    const valorInput = inputSearch.value.trim()

    if (!valorInput) {
        showEmptyInputAlert()
        return
    }

    renderLoading(profileResults)

    try {
        const userData = await fetchUser(valorInput)
        const userRepos = await fetchUserRepos(valorInput)
        renderUser(profileResults, userData, userRepos)
    } catch (error) {
        if (error?.message === 'Usuário não encontrado') {
            showNotFoundAlert()
            clearResults(profileResults)
            return
        }

        console.error('Erro ao buscar o perfil do usuário:', error)
        showGenericErrorAlert()
    }
}

// Eventos
btnSearch.addEventListener('click', handleSearch)


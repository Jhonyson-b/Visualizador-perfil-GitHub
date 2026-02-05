import { fetchUser } from './api.js'
import {
    renderLoading,
    renderUser,
    clearResults,
    showNotFoundAlert,
    showGenericErrorAlert,
    showEmptyInputAlert
} from './ui.js'

const inputSearch = document.getElementById('input-search')
const btnSearch = document.getElementById('btn-search')
const profileResults = document.querySelector('.profile-results')


const handleSearch = async () => {
    const valorInput = inputSearch.value.trim()

    if (!valorInput) {
        showEmptyInputAlert()
        return
    }

    renderLoading(profileResults)

    try {
        const userData = await fetchUser(valorInput)
        renderUser(profileResults, userData)
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

btnSearch.addEventListener('click', handleSearch)


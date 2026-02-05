export const renderLoading = (container) => {
    container.innerHTML = '<p class="loading">Carregando...</p>'
}

export const renderUser = (container, userData) => {
    container.innerHTML = `
        <div class="card"> 
            <img class="image-profile" src="${userData.avatar_url}" alt="Foto de perfil de ${userData.name}"/>
            
            <div class="pofile-info">
                <h2>${userData.name}</h2>
                <p>${userData.bio || 'Não possui bio cadastrada 😢.'}</p>
            </div>
        </div>
        
        <div class="profile-conters">
            <div class="followers">
                <h3>👥 Seguidores</h3>
                <span>${userData.followers}</span>
            </div>
            <div class="following">
                <h3>👥 Seguindo</h3>
                <span>${userData.following}</span>
            </div>
        </div>
    `
}

export const clearResults = (container) => {
    container.innerHTML = ''
}

export const showNotFoundAlert = () => {
    alert('Usuário não encontrado no GitHub. Verifique o nome de usuário e tente novamente.')
}

export const showGenericErrorAlert = () => {
    alert('Ocorreu um erro ao buscar o perfil do usuário. Por favor, tente novamente mais tarde.')
}

export const showEmptyInputAlert = () => {
    alert('Por favor, digite um nome de usuário do GitHub.')
}

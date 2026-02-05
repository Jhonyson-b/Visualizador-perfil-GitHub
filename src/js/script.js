const inputSearch = document.getElementById('input-search')
const btnSearch = document.getElementById('btn-search')
const profileResults = document.querySelector('.profile-results')

const BASE_URL = 'https://api.github.com'

btnSearch.addEventListener('click', async () => {
    const valorInput = inputSearch.value
    if (valorInput) {
        profileResults.innerHTML = `
            <p class="loading">Carregando...</p>`

        try {
            const response = await fetch(`${BASE_URL}/users/${valorInput}`)

            if (!response.ok) {
                alert('Usuário não encontrado no GitHub. Verifique o nome de usuário e tente novamente.');
                profileResults.innerHTML = "";
                return;
            }
            const userData = await response.json();
            console.log(userData);

            profileResults.innerHTML = `
                <div class="card"> 
                    <img class="image-profile" src="${userData.avatar_url}" alt="Foto de perfil de ${userData.name}"/>
                    
                    <div class="pofile-info">
                        <h2>${userData.name}</h2>
                        <p>${userData.bio || 'Não possui bio cadastrada 😢.'}</p>
                    </div>
                </div>`
        } catch (error) {
            console.error('Erro ao buscar o perfil do usuário:', error);
            alert('Ocorreu um erro ao buscar o perfil do usuário. Por favor, tente novamente mais tarde.');
        }
    } else {
        alert('Por favor, digite um nome de usuário do GitHub.')
    }
});


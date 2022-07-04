import axios from 'axios'

const URLBase = 'https://localhost:8000'

// INÍCIO DAS API DE USUÁRIO

function getLoginGeral (reg) {
    return axios({
        method: 'post',
        url: `${URLBase}LoginGeral`,
        data: reg,
    })
}


//END API DE USUÁRIO



export {getLoginGeral};

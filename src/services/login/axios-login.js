import axios from 'axios'

const URLBase = 'http://localhost:8000'

// INÍCIO API DE LOGIN

function getLoginGeral (reg) {
    return axios({
        method: 'post',
        url: `${URLBase}LoginGeral`,
        data: reg,
    })
}


//END API DE LOGIN



export {getLoginGeral};

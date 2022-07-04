import axios from 'axios'

const URLBase = 'https://localhost:8000/'

// INÍCIO DAS API DE USUÁRIO

function UsuariosGet(){
    return axios({
        method: 'get',
        url: `${URLBase}usuarios/`,
    })
}

function UsuariosDetails (id) {
    return axios({
        method: 'get',
        url: `${URLBase}usuarios/${id}`,
    })
}

function UsuarioPost(reg) {
    return axios ({
      method: 'post',
      url: `${URLBase}usuarioscreate/`,
      data: reg,
    })
  }

//END API DE USUÁRIO



export {UsuariosGet, UsuariosDetails, UsuarioPost};

import axios from 'axios'

const URLBase = 'http://127.0.0.1:8000/'

// INÍCIO DAS API DE USUÁRIO

function UsuariosGet(){
    return axios({
        method: 'get',
        url: `${URLBase}usuarios/`,
    })
}

function UsuariosGetEspecifico (id) {
    return axios({
        method: 'get',
        url: `${URLBase}usuarios/update/${id}`,
    })
} 

function UsuarioPost(reg) {
    return axios ({
      method: 'post',
      url: `${URLBase}usuarios/create/`,
      data: reg,
    })
}

function UsuarioPut(reg, id) {
    return axios ({
      method: 'put',
      url: `${URLBase}usuarios/update/${id}`,
      data: reg,
    })
}

function UsuarioDelete(id) {
    return axios ({
      method: 'delete',
      url: `${URLBase}usuarios/delete/${id}`,
    })
}
//END API DE USUÁRIO



export {UsuariosGet, UsuariosGetEspecifico, UsuarioPost, UsuarioPut, UsuarioDelete};

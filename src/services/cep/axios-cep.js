import axios from 'axios'

const URLBase = 'https://viacep.com.br/ws/'

// INÍCIO API DE LOGIN

function pesquisarCep(cep){
  return axios({
      method: 'get',
      url: `${URLBase}${cep}/json/`,
  })
}


//END API DE LOGIN



export {pesquisarCep};

import { Injectable } from '@nestjs/common';
const axios = require('axios');

@Injectable()
export class CepService {
  async getCEPByViaCEP(cep: string) {
    const axios = require('axios');

    return axios
      .get(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.log('Error: ', err.message);
      });
  }
}

const { default: axios } = require("axios");
const express = require("express");

const router = express.Router();

router.get('', async (request, response) => {
  try {
    const cep = request.body.cep;
    
    const currentCep = await axios.get(`https://brasilapi.com.br/api/cep/v1/${cep}`);

    response.status(200).json(currentCep.data);
  } catch (error) {
    response.status(400).json({
      message: error,
    });
  }
})

module.exports = router;

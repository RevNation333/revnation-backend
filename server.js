const axios = require('axios');

const API_KEY = process.env.DVSA_API_KEY;

async function testDVSA() {
  try {
    const res = await axios.get(
      'https://api.check-mot.service.gov.uk/v1/trade/vehicles/mot-tests',
      {
        params: {
          registration: 'AA12ABC'
        },
        headers: {
          'x-api-key': API_KEY,
          'Accept': 'application/json',
          'User-Agent': 'RevNation-App'
        }
      }
    );

    console.log('STATUS:', res.status);
    console.log('DATA:', res.data);

  } catch (err) {
    console.error('ERROR:', err.message);
    if (err.response) {
      console.error('RESPONSE STATUS:', err.response.status);
      console.error('RESPONSE DATA:', err.response.data);
    }
  }
}

testDVSA();

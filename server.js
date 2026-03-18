const https = require('https');

const API_KEY = process.env.DVSA_API_KEY;

const options = {
  host: 'api.check-mot.service.gov.uk',
  path: '/v1/trade/vehicles/mot-tests?registration=AA12ABC',
  method: 'GET',
  headers: {
    'x-api-key': API_KEY,
    'Accept': 'application/json',
    'User-Agent': 'RevNation-App'
  }
};

const req = https.request(options, (res) => {
  let data = '';

  res.on('data', chunk => {
    data += chunk;
  });

  res.on('end', () => {
    console.log('STATUS:', res.statusCode);
    console.log('BODY:', data);
  });
});

req.on('error', (error) => {
  console.error('ERROR:', error.message);
});

req.end();

import axios from 'axios';

interface Payload {
  grant_type: string;
  client_id: string;
  client_secret: string;
  code: string;
  redirect_uri: string;
}

class JWT {
  access_token: string;
  token_type: string;
  expires_in: number;
  refresh_token: string;
  scope: string;
  created_at: string;
}


// getUserData('8128c96b44f4dd1ca4b092f0792afbfa017241fcb354b6a7e1b46bd85709fc21');

/*

const options = {
  method: 'POST',
  hostname: 'api.intra.42.fr',
  port: null,
  path: '/oauth/token',
  headers: {
    'content-type': 'application/json',
    'cache-control': 'no-cache',
  },
};

const req = https.http.request(options, function (res) {
  const chunks = [];

  res.on('data', function (chunk) {
    chunks.push(chunk);
  });

  res.on('end', function () {
    const body = Buffer.concat(chunks);
    console.log(body.toString());
  });
});

req.write(
  JSON.stringify({
    grant_type: 'authorization_code',
    client_id:
      'ad4f677e23cf5507f21626bc669fe6b98c459acb29ddd7d03843d51aad6b7694',
    client_secret:
      '36f62b7e5d5715f4440a032c40aaf1af8c68dc9dd15321ce9a42635a54ede385',
    redirect_uri: 'http://localhost:3000',
    code: '9fa6ca09c19f1d15756899d20a63fd0b0700ad2e76cb2f6c4108eda451d567b4',
  }),
);
req.end();
*/

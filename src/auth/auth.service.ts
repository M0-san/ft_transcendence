import { Injectable } from '@nestjs/common';
import axios from 'axios';
@Injectable()
export class AuthService {
  async getAccessToken(code: string): Promise<string> {
    const payload = {
      grant_type: 'authorization_code',
      client_id:
        'ad4f677e23cf5507f21626bc669fe6b98c459acb29ddd7d03843d51aad6b7694',
      client_secret:
        '36f62b7e5d5715f4440a032c40aaf1af8c68dc9dd15321ce9a42635a54ede385',
      redirect_uri: 'http://localhost:3000',
      code,
    };

    let ret: string;
    await axios({
      method: 'post',
      url: 'https://api.intra.42.fr/oauth/token',
      data: JSON.stringify(payload),
      headers: {
        'content-type': 'application/json',
      },
    }).then(function (response) {
      ret = response.data.access_token;
    });
    return ret;
  }

  getUserData(code: string) {
    axios({
      method: 'GET',
      url: 'https://api.intra.42.fr/v2/me',
      headers: {
        authorization: `Bearer ${this.getAccessToken(code).then(
          (access_token) => access_token,
        )}`,
        'content-type': 'application/json',
      },
    }).then(function (response) {
      console.log(response.data);
    });
  }
}

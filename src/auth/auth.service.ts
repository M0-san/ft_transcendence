import { Injectable } from "@nestjs/common";
import axios from "axios";
import { CreateUserDto } from "src/users/dto/create-user.dto";
@Injectable()
export class AuthService {
  async getAccessToken(code: string): Promise<string> {
    const payload = {
      grant_type: "authorization_code",
      client_id:
        "34c469cbd053f27f00bea12177cdc27a557362e9be693e62a981a1776bcf1a23",
      client_secret:
        "0d64ef2b1460aa1feb4bc8287d49d70a923e2bdbae3c2b1654e81ef7ba75df04",
      redirect_uri: "http://localhost:3000",
      code,
    };

    let ret: string;
    await axios({
      method: "post",
      url: "https://api.intra.42.fr/oauth/token",
      data: JSON.stringify(payload),
      headers: {
        "content-type": "application/json",
      },
    }).then(function (response) {
      ret = response.data.access_token;
    });
    return ret;
  }

  async getUserData(code: string): Promise<CreateUserDto> {
    let access_token: string;
    let userData: CreateUserDto;
    await this.getAccessToken(code).then((res) => (access_token = res));
    console.log(access_token);
    await axios({
      method: "GET",
      url: "https://api.intra.42.fr/v2/me",
      headers: {
        authorization: `Bearer ${access_token}`,
        "content-type": "application/json",
      },
    }).then(function (response) {
      const { id, email, login: username, image_url: avatar } = response.data;
      userData = { id, username, email, avatar };
    });
    console.log(userData);
    return userData;
  }
}

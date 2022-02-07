import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entity/user.entity';

@Injectable()
export class UsersService {
  // This is to change, where you'd build your user model and persistence layer
  // using TypeORM.
  // private _users: User[] = [
  //   {
  //     id: 1,
  //     username: 'john',
  //     gamesCount: 0,
  //     gamesWon: 0,
  //     is2FAEnabled: false,
  //   },
  //   {
  //     id: 1,
  //     username: 'maria',
  //     gamesCount: 0,
  //     gamesWon: 0,
  //     is2FAEnabled: false,
  //   },
  // ];

  async create(userDto: CreateUserDto): Promise<User> {
    const user = User.create(userDto);
    await user.save();

    return user;
  }

  async findById(userId: number): Promise<User> {
    return await User.findOne(userId);
  }

  async findByUserName(username: string): Promise<User> {
    return await User.findOne({
      where: {
        username: username,
      },
    });
  }
}

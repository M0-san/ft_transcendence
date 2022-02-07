import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entity/user.entity';

@Injectable()
export class UsersService {
  
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

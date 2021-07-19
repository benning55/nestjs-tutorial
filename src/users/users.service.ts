import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    { id: 1, name: 'Benning', username: 'benning55', password: '12345' },
    { id: 2, name: 'Muse', username: 'muse12', password: '12345' },
  ];

  findAll(name?: string): User[] {
    if (name) {
      return this.users.filter((user) => user.name === name);
    }
    return this.users;
  }

  findById(userId: number): User {
    const test: User = this.users.find((user) => user.id === userId);
    return test;
  }

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }

  // createUser(createUserDto: CreateUserDto): User {
  //   const newUser = { id: Date.now(), ...createUserDto };
  //   this.users.push(newUser);

  //   return newUser;
  // }
}

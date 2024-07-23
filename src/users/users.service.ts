import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { DatabasesService } from 'src/databases/databases.service';
import { Prisma } from '@prisma/client';


@Injectable()
export class UsersService {
  constructor(private readonly databaseService: DatabasesService) {}

  async create(createUserDto: Prisma.UserCreateInput) {
    return this.databaseService.user.create({ data: createUserDto })
  }

  findAll() {
    return this.databaseService.user.findMany({});
  }

  findOne(id: number) {
    return this.databaseService.user.findUnique(
      {
        where: {id,},
        include: {
          appointment: true
        }
      }
    );
  }

  update(id: number, updateUserDto: Prisma.UserUpdateInput) {
    return `This action updates a #${id} user`;
  }

  // remove(id: number) {
  //   return `This action removes a #${id} user`;
  // }
}

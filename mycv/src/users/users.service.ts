import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private repo: Repository<User>) {
    this.repo = repo;
  }
  create(email: string, password: string) {
    const user = this.repo.create({ email, password });
    return this.repo.save(user);
  }
  findOne(id: number) {
    return this.repo.findOneBy({ id });
  }
  find(email: string) {
    return this.repo.find({ where: { email } });
  }
  async update(id: number, attrs: Partial<User>) {
    const user = await this.repo.update(id, attrs);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    const existingUser = await this.repo.findOneBy({ id });
    if (!existingUser) {
      throw new NotFoundException('User not found');
    }
    Object.assign(existingUser, attrs);
    return this.repo.save(existingUser);
  }
  remove(id: number) {
    return this.repo.delete(id);
  }
}

import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  AfterInsert,
  AfterRemove,
  AfterUpdate,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @AfterInsert()
  logInsert() {
    console.log('Inserting user with ID', this.id);
  }

  @AfterUpdate()
  logUpdate() {
    console.log('Updating user with ID', this.id);
  }

  @AfterRemove()
  logRemove() {
    console.log('Removing user with ID', this.id);
  }
}

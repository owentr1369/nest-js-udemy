import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  AfterInsert,
  AfterRemove,
  AfterUpdate,
  OneToMany,
} from 'typeorm';
import { Report } from 'src/reports/reports.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ default: true })
  admin: boolean;

  @OneToMany(() => Report, (report) => report.user)
  reports: Report[];

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

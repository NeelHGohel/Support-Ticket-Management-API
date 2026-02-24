import { MinLength } from 'class-validator';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity()
export class Ticket {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @MinLength(5)
  title: string;

  @Column()
  @MinLength(10)
  description: string;

  @CreateDateColumn({ name: 'created_at' })
  created_at: Date;
}

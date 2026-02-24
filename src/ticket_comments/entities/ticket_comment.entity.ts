import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class TicketComment {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  comment: string;
  @CreateDateColumn({ name: 'created_at' })
  created_at: Date;
}

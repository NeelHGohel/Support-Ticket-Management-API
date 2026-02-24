import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class TicketComment {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  comment: string;
  @Column()
  created_at: string;
}

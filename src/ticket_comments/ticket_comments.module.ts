import { Module } from '@nestjs/common';
import { TicketCommentsService } from './ticket_comments.service';
import { TicketCommentsController } from './ticket_comments.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TicketComment } from './entities/ticket_comment.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TicketComment])],
  controllers: [TicketCommentsController],
  providers: [TicketCommentsService],
})
export class TicketCommentsModule {}

import { Injectable } from '@nestjs/common';
import { CreateTicketCommentDto } from './dto/create-ticket_comment.dto';
import { UpdateTicketCommentDto } from './dto/update-ticket_comment.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TicketComment } from './entities/ticket_comment.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TicketCommentsService {
  constructor(
    @InjectRepository(TicketComment)
    private ticketCommentRepo: Repository<TicketComment>,
  ) {}

  create(createTicketCommentDto: CreateTicketCommentDto) {
    const ticketComment = this.ticketCommentRepo.create(createTicketCommentDto);
    return this.ticketCommentRepo.save(ticketComment);
  }

  findAll() {
    return this.ticketCommentRepo.find();
  }
}

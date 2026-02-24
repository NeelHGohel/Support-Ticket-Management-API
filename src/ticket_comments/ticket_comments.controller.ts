import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { TicketCommentsService } from './ticket_comments.service';
import { CreateTicketCommentDto } from './dto/create-ticket_comment.dto';
import { JwtAuthGuard } from 'src/auth/jwt.guard';

@Controller('ticket-comments')
export class TicketCommentsController {
  constructor(private readonly ticketCommentsService: TicketCommentsService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createTicketCommentDto: CreateTicketCommentDto) {
    return this.ticketCommentsService.create(createTicketCommentDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.ticketCommentsService.findAll();
  }
}

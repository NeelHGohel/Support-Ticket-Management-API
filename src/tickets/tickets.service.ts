
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Ticket } from './entities/ticket.entity';
import { Repository } from 'typeorm';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';

@Injectable()
export class TicketsService {
  constructor(
    @InjectRepository(Ticket)
    private ticketRepo: Repository<Ticket>,
  ) {}

  create(createTicketDto: CreateTicketDto) {
    const ticket = this.ticketRepo.create(createTicketDto);
    return this.ticketRepo.save(ticket);
  }

  findAll() {
    return this.ticketRepo.find();
  }

  findOne(id: number) {
    return this.ticketRepo.findOne({ where: { id } });
  }

  update(id: number, updateTicketDto: UpdateTicketDto) {
    return this.ticketRepo.update(id, updateTicketDto);
  }

  remove(id: number) {
    return this.ticketRepo.delete({ id });
  }
}

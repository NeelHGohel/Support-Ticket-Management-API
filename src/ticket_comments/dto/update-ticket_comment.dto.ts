import { PartialType } from '@nestjs/swagger';
import { CreateTicketCommentDto } from './create-ticket_comment.dto';

export class UpdateTicketCommentDto extends PartialType(CreateTicketCommentDto) {}

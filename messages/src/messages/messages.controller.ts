import { CreateMessageDto } from './create-message.dto';
import { Controller, Delete, Get, Post, Body, Param } from '@nestjs/common';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessageController {
  messagesService: MessagesService;
  constructor() {
    // DON'T DO THIS ON REAL APP
    // USE DEPENDENCY INJECTION
    this.messagesService = new MessagesService();
  }

  @Get('/')
  listMessages() {
    return this.messagesService.findAll();
  }
  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    return this.messagesService.create(body.content);
  }
  @Get(':id')
  getMessage(@Param('id') id: string) {
    return this.messagesService.findOne(id);
  }
  @Delete(':id')
  deleteMessage() {
    return 'delete message';
  }
}

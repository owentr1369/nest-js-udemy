import { CreateMessageDto } from './../dtos/create-message.dto';
import { Controller, Delete, Get, Post, Body, Param } from '@nestjs/common';

@Controller('messages')
export class MessageController {
  @Get('/')
  listMessages() {
    return 'list messages';
  }
  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    console.log('body', body);
  }
  @Get(':id')
  getMessage(@Param('id') id: string) {
    console.log('id', id);
    return 'get message';
  }
  @Delete(':id')
  deleteMessage() {
    return 'delete message';
  }
}

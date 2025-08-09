import { Controller, Delete, Get, Post } from '@nestjs/common';

@Controller('messages')
export class MessageController {
  @Get('/')
  listMessages() {
    return 'list messages';
  }
  @Post()
  createMessage() {
    return 'create message';
  }
  @Get(':id')
  getMessage() {
    return 'get message';
  }
  @Delete(':id')
  deleteMessage() {
    return 'delete message';
  }
}

import { Controller, Delete, Get, Post, Body, Param } from '@nestjs/common';

@Controller('messages')
export class MessageController {
  @Get('/')
  listMessages() {
    return 'list messages';
  }
  @Post()
  createMessage(@Body() body: any) {
    console.log('body', body);
    return 'create message';
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

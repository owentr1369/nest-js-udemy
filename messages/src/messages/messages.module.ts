import { Module } from '@nestjs/common';
import { MessageController } from './messages.controller';
import { MessagesService } from './messages.service';
import { MessagesRepository } from './messages.repository';

@Module({
  controllers: [MessageController],
  providers: [MessagesService, MessagesRepository],
})
export class MessagesModule {}

import { Module } from '@nestjs/common';
import { MessageController } from './messages.controller';

@Module({
  controllers: [MessageController],
})
export class MessagesModule {}

import { Module } from '@nestjs/common';
import { MessageController } from './controllers/messages.controller';

@Module({
  controllers: [MessageController],
})
export class MessagesModule {}

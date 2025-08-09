import { MessagesRepository } from './messages.repository';

export class MessagesService {
  messageRepo: MessagesRepository;
  constructor() {
    // Service is creating its own dependencies
    // DON'T DO THIS ON REAL APPS
    this.messageRepo = new MessagesRepository();
  }

  async findOne(id: string) {
    return this.messageRepo.findOne(id);
  }

  async findAll() {
    return this.messageRepo.findAll();
  }

  async create(content: string) {
    return this.messageRepo.create(content);
  }
}

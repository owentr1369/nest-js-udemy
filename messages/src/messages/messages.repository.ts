import { readFile } from 'fs/promises';

export class MessagesRepository {
  async findOne(id: string): Promise<string | undefined> {
    const contents = await readFile('messages.json', 'utf8');
    const messages = JSON.parse(contents) as Record<string, string>;
    return messages[id];
  }

  async findAll() {}

  async create() {}
}

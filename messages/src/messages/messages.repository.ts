import { readFile, writeFile } from 'fs/promises';

export class MessagesRepository {
  async findOne(id: string): Promise<string | undefined> {
    const contents = await readFile('messages.json', 'utf8');
    const messages = JSON.parse(contents) as Record<string, string>;
    return messages[id];
  }

  async findAll(): Promise<string[]> {
    const contents = await readFile('messages.json', 'utf8');
    const messages = JSON.parse(contents) as Record<string, string>;
    return Object.values(messages);
  }

  async create(content: string) {
    const contents = await readFile('messages.json', 'utf8');
    const messages = JSON.parse(contents) as Record<
      string,
      {
        content: string;
        id: number;
      }
    >;
    const id = Math.floor(Math.random() * 999);
    messages[id] = {
      content,
      id,
    };
    await writeFile('messages.json', JSON.stringify(messages, null, 2), 'utf8');
  }
}

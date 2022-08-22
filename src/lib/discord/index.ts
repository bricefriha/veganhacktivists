import { ChannelType, Client, GatewayIntentBits } from 'discord.js';

import type { Message } from 'discord.js';

import type { PlaygroundRequestCategory } from '@prisma/client';

export const ROLE_ID_BY_CATEGORY: Partial<
  Record<PlaygroundRequestCategory, string>
> = {
  Developer: process.env.DISCORD_DEVELOPER_ROLE_ID,
  Designer: process.env.DISCORD_DESIGNER_ROLE_ID,
  Writer: process.env.DISCORD_WRITER_ROLE_ID,
  Editor: process.env.DISCORD_EDITOR_ROLE_ID,
  Researcher: process.env.DISCORD_RESEARCHER_ROLE_ID,
  Translator: process.env.DISCORD_TRANSLATOR_ROLE_ID,
  Marketer: process.env.DISCORD_MARKETER_ROLE_ID,
  DataScientist: process.env.DISCORD_DATA_ROLE_ID,
  Social: process.env.DISCORD_SOCIAL_ROLE_ID,
  Security: process.env.DISCORD_SECURITY_ROLE_ID,
};

const client = new Client({ intents: [GatewayIntentBits.GuildMessages] });
void client.login(process.env.DISCORD_TOKEN);

client.on('ready', () => {
  // eslint-disable-next-line no-console
  console.info('Discord client ready!');
});

export const getDiscordChannel = async (id: string) =>
  client.channels.cache.get(id) || (await client.channels.fetch(id));

export const getDiscordServer = async (id: string) => {
  if (!id) {
    throw new Error('No server ID provided');
  }
  return await client.guilds.fetch({ guild: id, withCounts: true });
};

export const sendDiscordMessage = async ({
  channelId,
  message,
}: {
  channelId?: string;
  message: string;
}) => {
  if (!channelId) {
    throw new Error(
      `Error sending discord message. ChannelId is required, got ${
        channelId === undefined ? 'undefined' : `'${channelId}'`
      }`
    );
  }
  const channel = await getDiscordChannel(channelId);
  if (!channel || channel.type !== ChannelType.GuildText) {
    throw new Error(
      `Channel ${channelId} not found or is not a a valid text channel`
    );
  }
  return await channel.send(message);
};

const withDiscordClient = async <T>(
  callback: (client: Client) => Promise<T> | T
) =>
  new Promise<T>(async (resolve) => {
    if (!client.isReady()) {
      (client as Client<false>).on('ready', async () => {
        resolve(await callback(client));
      });
    }

    resolve(await callback(client));
  });

export class DiscordSendMessagesError extends Error {
  public messages: (Message | false)[];

  constructor(messages: (Message | false)[]) {
    super('DiscordError');
    this.name = 'DiscordError';
    this.message = 'An error happened trying to send messages to Discord';
    this.messages = messages;
  }
  getOkMessages() {
    return this.messages.filter((m) => !!m) as Message[];
  }

  getErroredMessages() {
    return this.messages.filter((m) => !m) as false[];
  }
}

export default withDiscordClient;

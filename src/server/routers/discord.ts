import { z } from 'zod';

import { adminProcedure } from 'server/procedures/auth';
import { t } from 'server/trpc';
import withDiscordClient, { sendDiscordMessage } from 'lib/discord';

const schema = z.object({
  channelId: z.string().min(1),
  message: z.string(),
});

const discordRouter = t.router({
  sendMessage: adminProcedure
    .input(schema)
    .mutation(async ({ input: { channelId, message } }) => {
      await withDiscordClient(() => sendDiscordMessage({ channelId, message }));
    }),
});

export default discordRouter;

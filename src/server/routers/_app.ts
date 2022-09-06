import { t } from '../trpc';

import discordRouter from './discord';
import playgroundRouter from './playground';

export const appRouter = t.router({
  playground: playgroundRouter,
  discord: discordRouter,
});

export type AppRouter = typeof appRouter;

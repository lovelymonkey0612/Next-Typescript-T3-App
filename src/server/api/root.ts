import { postRouter } from "t3app/server/api/routers/post";
import { exampleRouter } from "t3app/server/api/routers/example";
import { createTRPCRouter } from "t3app/server/api/trpc";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  example: exampleRouter,
  post: postRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;

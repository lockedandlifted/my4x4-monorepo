import { createNextApiHandler } from '@trpc/server/adapters/next'

import { appRouter } from '@my/api/routers'
import { createTRPCContext } from '@my/api/context'

// export API handler
export default createNextApiHandler({
  router: appRouter,
  createContext: createTRPCContext,
});

import { Hono } from 'hono';
import { handle } from 'hono/vercel';
import accounts from './accounts';

export const runtime = 'edge';

const app = new Hono().basePath('/api');

// Register routes
app.route("/accounts", accounts);

// Export API handlers for Next.js Edge runtime
export const GET = handle(app);
export const POST = handle(app);

// ✅ Correctly infer API type
export type Apptype = typeof app;
export default app;
import { hc } from "hono/client";
import app from "@/app/api/[[...route]]/route"; // Import the default API instance

if (!process.env.NEXT_PUBLIC_API_URL) {
    throw new Error("NEXT_PUBLIC_API_URL is not set in environment variables");
}

// ✅ Correctly infer the API type using `typeof app`
export const client = hc<typeof app>(process.env.NEXT_PUBLIC_API_URL);

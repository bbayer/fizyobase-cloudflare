import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Dev config without Cloudflare plugin (for local development on Windows)
export default defineConfig({
	plugins: [react(), tailwindcss()],
});

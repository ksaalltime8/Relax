// Hostinger Node.js entry point for Relax Day.
// The bundled server serves the frontend from ./public and the API from /api.
process.env.SERVE_CLIENT ??= "true";
process.env.STATIC_DIR ??= "public";
await import("./dist/index.mjs");

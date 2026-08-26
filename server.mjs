import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.dirname(fileURLToPath(import.meta.url));
process.env.NODE_ENV ??= "production";
process.env.SERVE_CLIENT ??= "true";
process.env.STATIC_DIR ??= path.join(root, "public");

await import(pathToFileURL(path.join(root, "dist", "index.mjs")).href);

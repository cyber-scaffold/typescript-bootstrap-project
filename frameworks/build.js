const path = require("path");
const esbuild = require("esbuild");

setImmediate(async () => {
  await esbuild.build({
    entryPoints: [path.resolve(process.cwd(), "./src/index.ts")],
    bundle: true,
    format: "cjs",
    platform: "node",
    outdir: path.resolve(process.cwd(), "./dist/"),
    external: ["knex"]
  });
});
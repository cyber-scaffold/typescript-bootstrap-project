const path = require("path");
const esbuild = require("esbuild");
const nodemon = require("nodemon");
const { green } = require("colors");

setImmediate(async () => {
  const context = await esbuild.context({
    entryPoints: [path.resolve(process.cwd(), "./src/index.ts")],
    bundle: true,
    format: "cjs",
    platform: "node",
    outdir: path.resolve(process.cwd(), "./dist/"),
    external: ["knex"]
  });
  await context.watch();
  nodemon({
    script: path.resolve(process.cwd(), "./dist/index.js"),
    ignore: ["**/frameworks/**"]
  }).on("start", () => {
    console.log(green("nodemon start ... ..."));
  }).on("quit", () => {
    console.log(green("nodemon quit!!!"));
  }).on("restart", (files) => {
    console.log(green("nodemon restart ... ..."));
  })
});
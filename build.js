import * as esbuild from "esbuild";

const sharedConfig = {
    entryPoints: ["src/**/*"],
    bundle: false,
    minify: false,
    packages: "external",
    sourcemap: true,
};

const esmConfig = {
    ...sharedConfig,
    outdir: "lib/esm/",
    platform: "neutral",
    format: "esm",
};

const cjsConfig = {
    ...sharedConfig,
    outdir: "lib/cjs/",
    platform: "node",
    format: "cjs",
};

await Promise.all([esbuild.build(esmConfig), esbuild.build(cjsConfig)]);
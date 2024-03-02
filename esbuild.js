const esbuild = require("esbuild");
  
esbuild
    .build({
        entryPoints: ["frontend/index.tsx"], //, "frontend/app.scss"
        outdir: "public/assets",
        bundle: true,
        minify: true,
    loader: {
            '.svg': 'dataurl',
            '.ttf': 'dataurl',
    },
    })
    .then(() => console.log("Z_Build complete!_Z"))
    .catch(() => process.exit(1))
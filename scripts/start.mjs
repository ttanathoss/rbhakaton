import fs from "fs";
import { Parcel } from "@parcel/core";

const paths = {
  build: {
    root: "./dist",
    assets: "./dist/assets",
  },
  src: {
    imageAssets: "./src/assets/img",
    jsonAssets: "./src/assets/json",
  },
};

if (!fs.existsSync(paths.build.root)) {
  fs.mkdirSync(paths.build.root);
}

if (!fs.existsSync(paths.build.assets)) {
  const imageAssets = fs.readdirSync(paths.src.imageAssets);
  const jsonAssets = fs.readdirSync(paths.src.jsonAssets);

  fs.mkdirSync(paths.build.assets);

  for (const asset of imageAssets) {
    fs.copyFileSync(
      `${paths.src.imageAssets}/${asset}`,
      `${paths.build.assets}/${asset}`
    );
  }

  for (const asset of jsonAssets) {
    fs.copyFileSync(
      `${paths.src.jsonAssets}/${asset}`,
      `${paths.build.assets}/${asset}`
    );
  }
}

// require("child_process").spawn(
//   "parcel",
//   ["index.html", "--no-autoinstall", "--open", "--dist-dir", "dist"],
//   {
//     stdio: ["ignore", "inherit", "inherit"],
//     shell: true,
//   }
// );

const bundler = new Parcel({
  entries: "index.html",
  shouldAutoInstall: false,
  defaultConfig: "@parcel/config-default",
  serveOptions: {
    port: 3000,
  },
  hmrOptions: {
    port: 3000,
  },
});

console.log("Starting on http://localhost:3000/");
await bundler.watch();

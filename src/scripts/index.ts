export {};

declare global {
  const process: {
    env: { NODE_ENV: string };
  };
}

if (process.env.NODE_ENV !== "production") {
  import("./hotreload").then(({ initHotReload }) => initHotReload());
}

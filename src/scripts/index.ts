// For tree-shaking.
import { initHotReload } from "./hotreload";

initHotReload();

import("./autolink").then((module) => {
  module.initAutoLink();
});

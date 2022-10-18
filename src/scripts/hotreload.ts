declare global {
  var module: {
    hot: {
      accept: () => void;
    } | null,
  } | null;
}

/**
 * Initiate the hot reload function for Parcel.
 */
export function initHotReload() {
  if (module?.hot) {
    module.hot.accept();
    console.debug("“Hot Reload” functionality has been enabled.");
  }
}

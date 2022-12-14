declare global {
  const module: {
    hot: { accept: () => void } | null;
  };
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

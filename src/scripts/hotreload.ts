/* global module */

/**
 * Initiate the hot reload function for Parcel.
 */
export function initHotReload() {
  if (module.hot) {
    module.hot.accept();
    console.debug("“Hot Reload” functionality has been enabled.");
  }
}

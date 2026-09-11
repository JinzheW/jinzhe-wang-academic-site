/*
  The page works without JavaScript. This file only enables the optional
  ?debug=1 layout overlay, leaving all content and abstract controls native.
*/

const params = new URLSearchParams(window.location.search);

if (params.get("debug") === "1") {
  document.documentElement.dataset.debug = "true";
  console.info("Debug mode enabled. Main design controls are at the top of styles.css.");
}

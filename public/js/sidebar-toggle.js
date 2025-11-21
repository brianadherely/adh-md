// public/js/sidebar-toggle.js

document.addEventListener("DOMContentLoaded", function () {
  // Button that toggles slim mode
  const toggleBtn = document.getElementById("sidebarToggle");
  if (!toggleBtn) {
    console.warn("Sidebar toggle: #sidebarToggle button not found.");
    return;
  }

  // Your sidebar element (<aside class="sidenav ...">)
  const sidenav = document.querySelector("aside.sidenav");
  if (!sidenav) {
    console.warn('Sidebar toggle: <aside class="sidenav"> not found.');
    return;
  }

  // Restore previous slim/normal state from localStorage (optional)
  try {
    if (localStorage.getItem("sidebar-slim") === "1") {
      document.body.classList.add("sidebar-slim");
    }
  } catch (e) {
    // localStorage might be blocked; ignore errors
  }

  // Click handler: toggle slim mode on/off
  toggleBtn.addEventListener("click", function () {
    document.body.classList.toggle("sidebar-slim");

    // Remember the choice (optional)
    try {
      localStorage.setItem(
        "sidebar-slim",
        document.body.classList.contains("sidebar-slim") ? "1" : "0"
      );
    } catch (e) {
      // ignore
    }
  });
});

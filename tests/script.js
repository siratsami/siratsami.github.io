document.addEventListener("DOMContentLoaded", () => {
  const link = document.getElementById("jsLink");

  if (link) {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      // Redirect only if JS is active and script is loaded
      window.location.href = "https://example.com/secret-page";
    });
  }
});

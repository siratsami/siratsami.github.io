document.addEventListener("DOMContentLoaded", () => {
  const link = document.getElementById("jsLink");

  if (link) {
    const targetURL = "https://test.com";

    // Set the href dynamically
    link.setAttribute("href", targetURL);

    // Optional: force redirection through JS if you still want to control it
    link.addEventListener("click", (e) => {
      e.preventDefault();
      window.location.href = targetURL;
    });
  }
});

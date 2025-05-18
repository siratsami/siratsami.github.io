document.addEventListener("DOMContentLoaded", () => {
  const link = document.getElementById("specialLink");

  link.addEventListener("click", (e) => {
    e.preventDefault(); // prevent default action just in case
    window.location.href = "https://example.com/secret";
  });
});

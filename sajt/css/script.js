// Ako želite da dodate interaktivne elemente, možete koristiti JavaScript. Na primer, da biste dodali animaciju scrollanja ili promenu boje dugmadi.

document.querySelector(".cta-button").addEventListener("click", function() {
  document.getElementById("models").scrollIntoView({ behavior: "smooth" });
});

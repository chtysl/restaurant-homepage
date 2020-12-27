function loadPage() {
  const content = document.getElementById("content");
  const navbar = document.createElement("div");
  const base = document.createElement("div");
  base.classList.add("base");
  navbar.innerHTML = `
  <div class="navbar">
    <button class="home">Home</button>
    <button class="menu">Menu</button>
    <button class="reservation">Reservation</button>
  </div>
`;
  content.appendChild(navbar);
  content.appendChild(base);
}

export default loadPage;

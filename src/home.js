function homePage() {
  const homePageHtml = document.createElement("div");
  const base = document.querySelector(".base");
  homePageHtml.classList.add("home-page");
  homePageHtml.innerHTML = `
    <div>
      <h1>Enjoy our delicious food</h1>
      <h2>Simple but unforgettable menu</h2>
    </div>
  `;
  base.innerHTML = "";
  base.appendChild(homePageHtml);
}
export default homePage;

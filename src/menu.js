function menu() {
  const menuPage = document.createElement("div");
  const base = document.querySelector(".base");
  menuPage.innerHTML = `
    <div class="menu-page">
      <div class="food">
        <h3>
          Lamb Chops
        </h3>
        <img src="https://tse2.mm.bing.net/th?id=OIP.RV8vdBFMBrimEEH_Q0qwswHaHa&pid=Api" alt="lamb shops">
         <h4>$9.99</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, ullam?</p>
    </div>
    <div class="food">
        <h3>
          Steak Burger
        </h3>
        <img src="https://tse3.mm.bing.net/th?id=OIP.he-jregR7bfJho4a1Yz5AAHaHa&pid=Api" alt="lamb shops">
        <h4>$9.99</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, ullam?</p>
    </div>
    <div class="food">
        <h3>
          Adana Kebab
        </h3>
        <img src="https://tse2.mm.bing.net/th?id=OIP.mGx-HIRmqupKL8r8VJB_ZQHaFj&pid=Api" alt="lamb shops">
        <h4>$9.99</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, ullam?</p>
    </div>
   </div>
  `;
  base.innerHTML = "";
  base.appendChild(menuPage);
}

export default menu;

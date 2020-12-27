function reservation() {
  const reservation = document.createElement("div");
  const base = document.querySelector(".base");
  reservation.classList.add("reservation-page");
  reservation.innerHTML = `
      <h1>----Reserve your table right now----</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus consequuntur earum excepturi, impedit libero minus!</p>
      <div>
        <input type="text" placeholder="Your Name">
        <input type="date" placeholder="Date">
        <input type="text" placeholder="Time">
        <input type="text" placeholder="People">
      </div>
        <button class="rsv">Reserve Now</button>
  `;
  base.innerHTML = "";
  base.appendChild(reservation);
}

export default reservation;

export const Photographs = (main, section) => {
  main.innerHTML = "";
  main.innerHTML = `
    <section id="photographs">
    <div class="heading">
      <h2>photographs</h2>
    </div>
    <div class="body">
      <p>
        Hotel Budapest is in the heart of Budapest (5th district, city
        centre) a few meters from the world famous pedestrian shopping
        street (Váci utca) and the Danube. The hotel is located in the best
        area of Budapest right next to the business district near the best
        bars, restaurants, most exclusive shops, a few steps from the
        Central Market Hall (Vásárcsarnok), Gellert Thermal Spa (Gellért
        Fürdő) the Danube Cruise Terminal, and Corvinus University. All of
        its rooms reflect the very popular, modern yet elegant style of
        international boutique hotels.
      </p>
      <p>
        The preferred approach is to use the Siren logo by itself, unlocked
        from the wordmark. This allows flexibility to present the Siren with
        greater prominence while maintaining a considered, open and modern
        presentation.
      </p>
    </div>
  </section>
  <section class="mainInfo">
    <div class="botique">
      <h3>Default</h3>
      <div class="botiqueGrid">
        <img src="./../../assets/images/default.png" alt="Botique"  column="400px" />
      </div>
      <h3>Hover</h3>
      <div class="botiqueGrid">
        <img src="./../../assets/images/hover.png" alt="Botique"  column="400px" />
      </div>
      
    </div>
  </section>
    `;
};

export const FormElements = (main, section) => {
  main.innerHTML = "";
  main.innerHTML = `
    <section id="formElements">
    <div class="heading">
      <h2>Form Element</h2>
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
      <h3>Input Form Field</h3>
      <div class="botiqueForm">
        <input type="text" placeholder="Text here.">
        <code>
        <pre>
          input {
            margin: 1rem;
            font-size: 1.8rem;
            font-family: SourceSansPro;
            color: #231f20;
            border: 0.1rem solid #000000;
            padding: 1rem 2rem;
            border-radius: 3rem;
          }
        </pre>
        </code>
      </div>
     
    </div>

    <div class="botique">
    <h3>Text Area</h3>
    <div class="botiqueForm">
      <textarea>Text here. </textarea>
      <code>
      <pre>
        textarea {
            margin: 1rem;
            font-size: 1.8rem;
            font-family: SourceSansPro;
            color: #231f20;
            border: 0.1rem solid #000000;
            border-radius: 3rem;
            padding: 2rem 2rem;
            height: 8rem;
        }        
      </pre>
      </code>
    </div>
  </div>
  </section>
    `;
};

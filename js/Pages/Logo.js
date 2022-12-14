export const Logo = (main, section) => {
  main.innerHTML = "";
  main.innerHTML = `
    <section id="logos">
    <div class="heading">
      <h2>Logo</h2>
    </div>
    <div class="body">
      <p>
        Botique Hotel is the name of our brand.
        The color in brand logo is Bullet Shell is of a high brightness and a medium saturation, 
        reflect the very popular, modern yet elegant style of international boutique hotels. 
        A symbol of belonging is our strong wordmark and our most recognizable brand assets.
      </p>
      <p>
        The preferred approach is to use the Botique logo by itself, unlocked
        from the wordmark. This allows flexibility to present the Botique with
        greater prominence while maintaining a considered, open and modern
        presentation.
      </p>
    </div>
  </section>
  <section class="mainInfo">

    <div class="botique">
      <h3>Botique</h3>
      <div class="botiqueColors">
        <div class="color1">Bullet Shell <br /> <br /> #b5985a</div>
      </div>
      <div class="botiqueLogo">
        <img src="./../../assets/icons/botique.png" alt="Botique" />
      </div>
    </div>
    <div class="botique">
      <h3>Word Mark</h3>
      <div class="botiqueColors">
        <div class="color1">Bullet Shell <br /> <br /> #b5985a</div>
        
        <div class="color2">Zeus <br /> <br /> #231F20</div>
      </div>
      <div class="botiqueLogo">
        <img src="./../../assets/icons/wordmark.png" alt="Botique" />
      </div>
    </div>
  </section>
    `;
};

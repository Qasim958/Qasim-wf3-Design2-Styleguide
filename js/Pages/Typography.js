export const Typography = (main, section) => {
  main.innerHTML = "";
  main.innerHTML = `
    <section id="typography">
      <div class="heading">
        <h2>Typography</h2>
      </div>
      <div class="body">
        <p>
        We’re using three fonts with endless possibilities: BickhamScriptPro, CormorantGaramond and SourceSansPro.
        </p>
        <p>
          
        While we’re moving away from hand-lettering, we’ll incorporate custom modifications to these typefaces where an artful touch is needed.
        </p>
      </div>
    </section>
    <section class="mainInfo">
    <div class="botique">
    <h3>Bickham Script Pro</h3>
    <div class="botiqueColors">
      <div class="color1">Bullet Shell <br /> <br /> #b5985a</div>
      
      <div class="color2">Zeus <br /> <br /> #231F20</div>
    </div>
    <div class="botiqueLogo">
      <img src="./../../assets/icons/wordmark.png" alt="Botique" />
    </div>
  </div>

  <div class="botique">
  <h3>Cormorant Garamond</h3>
  <div class="botiqueColors">
    <div class="color1">Bullet Shell <br /> <br /> #b5985a</div>
    
    <div class="color2">Zeus <br /> <br /> #231F20</div>
  </div>
  <div class="botiqueLogo">
    <img src="./../../assets/icons/wordmark.png" alt="Botique" />
  </div>
</div>

<div class="botique">
<h3>Source Sans Pro</h3>
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

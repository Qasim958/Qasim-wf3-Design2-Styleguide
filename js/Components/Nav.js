import { Buttons } from "../Pages/Buttons.js";
import { Colors } from "../Pages/Colors.js";
import { FormElements } from "../Pages/FormElements.js";
import { Logo } from "../Pages/Logo.js";
import { PagesLayouts } from "../Pages/PagesLayouts.js";
import { Photographs } from "../Pages/Photographs.js";
import { Theory } from "../Pages/Theory.js";
import { Typography } from "../Pages/Typography.js";
import { _ } from "../utils/elementSelector.js";
import { primaryMenu } from "../utils/togglePages.js";

export const Nav = () => {
  _(".openBtn").addEventListener("click", openNav);
  _(".closeBtn").addEventListener("click", closeNav);
  primaryMenu("navItem", `data-menuItem`, navigateToPage, _("main"));
};

const navigateToPage = (section, main, c) => {
  
  switch (section) {
    case "theory":
      Theory(main, section);
      break;
    case "logos":
      Logo(main, section);
      break;
    case "colors":
      Colors(main, section);
      break;
    case "typography":
      Typography(main, section);
      break;
    case "buttons":
      Buttons(main, section);
      break;
    case "formElements":
      FormElements(main, section);
      break;
    case "pagesLayout":
      PagesLayouts(main, section);
      break;
    case "photographs":
      Photographs(main, section);
      break;
  }
};

function openNav() {
  event.preventDefault();
  _("#myNav").style.width = "40%";
  _(".openBtn").style.visibility = "hidden";

  _(".closeBtn").style.display = "block";
}

function closeNav() {
  event.preventDefault();
  _("#myNav").style.width = "0%";
  _(".closeBtn").style.display = "none";
  _(".openBtn").style.visibility = "visible";
}

/**
 * Import componets
 */

// import Tools from "./Tools";

const div = document.createElement("div");
div.classList.add("topnav");

div.innerHTML = `
<a href=""><button class="cta-button print">Print</button></a>
  <div class="dropdown">
  <button class="cta-button units" >
  Units
  <i class="fa fa-caret-down"></i>
  </button>
  <div class="dropdown-content" id="myDropdown">
    <a href="#" class="metric">MM</a>
    <a href="#" class="inches">Inch</a>
  </div>
  </div> 
  <a class ="tool-image">
  </a>
  <div class="dropdown">
  <button class="cta-button">
  Edit
  <i class="fa fa-caret-down"></i>
  </button>
  <div class="dropdown-content" id="myDropdown1">
    <a href="#" class ="dark">Dark theme</a>
    <a href="#" class ="light">Light theme</a>
  </div>
  </div> 
<a href="#"><button class="cta-button info">Info</button></a>
<a href=""><button class="cta-button-right table">Table</button></a>
<a href="#"><button class="cta-button-right drill">Drill</button></a>
<a href="#"><button class="cta-button-right mill">Mill</button></a>
`

/**
 *  Print (crt + p)
 */
const button = div.querySelector(".print");
// Log when the button is clicked in the console.
button.addEventListener("click", () => {
  button.classList.toggle("active");
  //Print a specific div from a page
  var prtContent = document.getElementsByClassName("result");
  var WinPrint = window.open('', '', 'left=0,top=0,width=800,height=900,toolbar=0,scrollbars=0,status=0');
  WinPrint.document.write(prtContent.innerHTML);
  WinPrint.document.close();
  WinPrint.focus();
  WinPrint.print();
  WinPrint.close();
}, false);

/**
 *  Units (mm/inches) mode
 */
let feedMetric = "var(--metric)";
let feedInches = "var(--inches)"
let speed = "rpm";

const rootElement = document.documentElement;
const metric = div.querySelector(".metric");
const inches = div.querySelector(".inches");

metric.addEventListener("click", () => {
  rootElement.style.setProperty("--feed", feedMetric);
}, false);

inches.addEventListener("click", () => {
  rootElement.style.setProperty("--feed", feedInches);
});

/**
 *   Mill/Drill mode
 */
const millButton = div.querySelector(".mill");
const drilButton = div.querySelector(".drill");
let cssVarMill = "var(--millImage)";
let cssVarDrill = "var(--drillImage)";
millButton.addEventListener("click", () => {
  rootElement.style.setProperty("--toolImage", cssVarMill);
});

drilButton.addEventListener("click", () => {
  rootElement.style.setProperty("--toolImage", cssVarDrill);
});


/**
 * Edit (Dark/Light mode) theme
 */
const dark = div.querySelector(".dark");
const light = div.querySelector(".light");
let darkMode = "var(--dark)";
let lightMode = "var(--light)"

dark.addEventListener("click", () => {
  rootElement.style.setProperty("--theme", darkMode);
}, false);

light.addEventListener("click", () => {
  rootElement.style.setProperty("--theme", lightMode);
});

/**
 * Tool Data
 */
const form = document.createElement("form");
form.setAttribute("method", "POST");
form.setAttribute("id", "form1");


form.innerHTML = `
<div class ="container-table">
<div class ="tool-data">
<h4>Tool Data</h4>
<a class ="parameter">Diameter (D): <input type="number" name="fname" maxlength="5" id ="diameter"></a>
<a class ="parameter">Flutes (Z): <input type="number" name="fname" maxlength="5" id ="flutes"></a>
<a class ="parameter">Feed per tooth (Fz): <input type="number" name="fname" maxlength="5" id ="feedPerTooth"></a>
<a class ="parameter">Surface feed (V): <input type="number" name="fname" maxlength="5" id ="surfaceFeed"></a>
</div>

<div class ="result">
<h4>Result</h4>
<a class = "parameter feedrate">Feedrate (F): <input type="number" name="feed" size="35" id="feed"/></a>
<a class = "parameter rotation-speed">RPM (S): <input type="number" name="speed" size="35" id="speed"/></a>
<a class = "parameter"><button type="button" class ="calculate">Calculate</button></a>
</div>
</div>
`

const calcButton = form.querySelector(".calculate");

calcButton.addEventListener("click", () => {
  let diameter = document.getElementById('diameter').value;
  let flutes = document.getElementById('flutes').value;
  let feedPerTooth = document.getElementById('feedPerTooth').value;
  let surfaceFeed = document.getElementById('surfaceFeed').value;
  const pi = 3.14159;

  let speedCalculation = parseFloat(surfaceFeed) / parseFloat(diameter) / pi * 1000;
  let feedCalculation = parseFloat(speedCalculation) * parseFloat(feedPerTooth) * parseFloat(flutes);

  document.getElementById('feed').value = parseInt(feedCalculation);
  document.getElementById('speed').value = parseInt(speedCalculation);
  // document.form1.submit();
})


const main = document.querySelector("main");
main.append(div);
main.append(form);
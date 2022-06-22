
const div = document.createElement("div");
div.classList.add("topnav");

div.innerHTML = `
<a href="#"><button class="cta-button print">Print</button></a>
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
<a href="#"><button class="cta-button info" id="myBtn">Info</button></a>
<!-- The Modal -->
<div id="myModal" class="modal">

  <!-- Modal content -->
  <div class="modal-content">
  <div class="modal-header">
  <span class="close">&times;</span>
  <img src ="public/images/nc.ico" width="35" height="35" class = "info-logo">
  <h1>NCCalc</h1>
</div>
<div class="modal-body">
  <p>Program version 0.0.0</p>
  <p>2022</p>
</div>
</div>

</div>

<a href="#"><button class="cta-button-right table" id ="tableBtn">Table</button></a>
<!-- The Modal -->
<div id="tableModal" class="modal">

  <!-- Modal content -->
  <div class="modal-content">
  <div class="modal-header">
  <span class="tableClose">&times;</span>
  <h1>Tool List</h1>
</div>
<div class="modal-body">
<table>
<thead>
<tr>
<th onclick="sortColumn('id')" class = "sortTable">Id</th>
<th>Name</th>
<th>Type</th>
<th>Diameter</th>
<th>Speed</th>
<th>Feed</th>
</tr>
</thead>
<tbody id="tableData"></tbody>
</table>
</div>
<button type="button" onclick="myFunction()" id="add">Add</button>
<button type="button" onclick="myFunction()" id="remove">Remove</button>
</div>
</div>


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
  let prtContent = document.getElementsByClassName("result");
  let WinPrint = window.open('', '', 'left=0,top=0,width=800,height=900,toolbar=0,scrollbars=0,status=0');
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
let feedInches = "var(--inches)";
let surfaceMetric = "var(--surfaceMetric)";
let surfaceInches = "var(--surfaceInches)";
let speed = "rpm";
let calculator = "metric";

const rootElement = document.documentElement;
const metric = div.querySelector(".metric");
const inches = div.querySelector(".inches");

metric.addEventListener("click", () => {
  rootElement.style.setProperty("--feed", feedMetric);
  rootElement.style.setProperty("--surface", surfaceMetric);
  calculator = "metric";
}, false);

inches.addEventListener("click", () => {
  rootElement.style.setProperty("--feed", feedInches);
  rootElement.style.setProperty("--surface", surfaceInches);
  calculator = "inches";
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
let darkBg = "var(--dark-bg)";
let lightBg = "var(--light-bg)";
let darkMenu = "var(--dark-menu)";
let lightMenu = "var(--light-menu)";
let darkHover = "var(--dark-hover)";
let lightHover = "var(--light-hover)";
let darkText = "var(--dark-text)";
let lightText = "var(--light-text)";
let darkTextMenu = "var(--dark-text-menu)";
let lightTextMenu = "var(--light-text-menu)";

dark.addEventListener("click", () => {
  rootElement.style.setProperty("--theme-bg", darkBg);
  rootElement.style.setProperty("--theme-menu", darkMenu);
  rootElement.style.setProperty("--theme-hover", darkHover);
  rootElement.style.setProperty("--theme-text", darkText);
  rootElement.style.setProperty("--theme-text-menu", darkTextMenu);
});

light.addEventListener("click", () => {
  rootElement.style.setProperty("--theme-bg", lightBg);
  rootElement.style.setProperty("--theme-menu", lightMenu);
  rootElement.style.setProperty("--theme-hover", lightHover);
  rootElement.style.setProperty("--theme-text", lightText);
  rootElement.style.setProperty("--theme-text-menu", lightTextMenu);
});

/**
 *  Info
 */

// Get the modal
let modal = div.querySelector("#myModal");
// Get the button that opens the modal
let btn = div.querySelector("#myBtn");
// Get the <span> element that closes the modal
let span = div.querySelector(".close");
// When the user clicks the button, open the modal 
btn.addEventListener("click", () => {
  modal.style.display = "block";
});
// When the user clicks on <span> (x), close the modal
span.addEventListener("click", () => {
  modal.style.display = "none";
})

// When the user clicks anywhere outside of the modal, close it
window.addEventListener("click", (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
})

/**
 *  Tool Table Modal
 */
// Get the modal
let tableModal = div.querySelector("#tableModal");
// Get the button that opens the modal
let tableBtn = div.querySelector("#tableBtn");
// Get the <span> element that closes the modal
let tableSpan = div.querySelector(".tableClose");
// When the user clicks the button, open the modal 
tableBtn.addEventListener("click", () => {
  tableModal.style.display = "block";
});
// When the user clicks on <span> (x), close the modal
tableSpan.addEventListener("click", () => {
  tableModal.style.display = "none";
})

// When the user clicks anywhere outside of the modal, close it
window.addEventListener("click", (event) => {
  if (event.target == tableModal) {
    tableModal.style.display = "none";
  }
})

/**
 *  Tool Table
 */
window.onload = () => {
  loadTableData(tableData);
}

let sortDirection = false;
let tableData = [
  { id: 1, name: 'T1', type: 'mill', diameter: '6.35', speed: '4000', feed: '800' },
  { id: 2, name: 'T2', type: 'mill', diameter: '8.00', speed: '4500', feed: '500' },
  { id: 3, name: 'T3', type: 'Drill', diameter: '6.35', speed: '6500', feed: '150' }
];

function loadTableData(tableData) {
  const tableBody = document.getElementById('tableData');
  let dataHtml = '';

  for (let data of tableData) {
    dataHtml += `<tr><td>${data.id}</td><td>${data.name}</td><td>${data.type}</td><td>${data.diameter}</td><td>${data.speed}</td><td>${data.feed}</td></tr>`;
  }
  tableBody.innerHTML = dataHtml;
}

/**
 *  Tool Table Sort
 */
function sortColumn(columnName) {
  const dataTyoe = typeof tableData[0][columnName];
  sortDirection = !sortDirection;

  switch (dataTyoe) {
    case 'number':
      sortNumberColumn(sortDirection, columnName);
      break;
  }
  loadTableData(tableData);
}

function sortNumberColumn(sort, columnName) {
  tableData = tableData.sort((a, b) => {
    return sort ? a[columnName] - b[columnName] : b[columnName] - a[columnName];
  })
}

let sortTable = div.querySelector(".sortTable");
let ace = "var(--ace)";
let desc = "var(--desc)";
let arrow = "";
sortTable.addEventListener("click", () => {
  if (arrow === ace || arrow == "") {
    rootElement.style.setProperty("--arrow", desc);
    arrow = desc;
  } else {
    rootElement.style.setProperty("--arrow", ace);
    arrow = ace;
  }
})

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
<a class ="parameter surface-feed">Surface feed (V): <input type="number" name="fname" maxlength="5" id ="surfaceFeed"></a>
</div>

<div class ="result">
<h4>Result</h4>
<a class = "parameter feedrate">Feedrate (F): <input type="number" name="feed" size="35" id="feed"/></a>
<a class = "parameter rotation-speed">RPM (S): <input type="number" name="speed" size="35" id="speed"/></a>
<a class = "parameter"><button type="button" class ="calculate">Calculate</button></a>
</div>
</div>
`

/**
 *  Feed & Speed Calculator
 */

const calcButton = form.querySelector(".calculate");

calcButton.addEventListener("click", () => {
  let diameter = document.getElementById('diameter').value;
  let flutes = document.getElementById('flutes').value;
  let feedPerTooth = document.getElementById('feedPerTooth').value;
  let surfaceFeed = document.getElementById('surfaceFeed').value;
  const pi = 3.14159;


  if (calculator === "inches") {
    /**
   *  Imperial Speed and Feed Calculation
   */
    let imperialSpeedCalculation = (parseFloat(surfaceFeed) * 12) / (parseFloat(diameter) * pi);
    let imperialFeedCalculation = parseFloat(imperialSpeedCalculation) * parseFloat(feedPerTooth) * parseFloat(flutes);

    document.getElementById('feed').value = parseInt(imperialFeedCalculation);
    document.getElementById('speed').value = parseInt(imperialSpeedCalculation);

  } else {
    /**
   * Metric Speed and Feed Calculation
   */
    let metricSpeedCalculation = (parseFloat(surfaceFeed) * 1000) / (parseFloat(diameter) * pi);
    let metricFeedCalculation = parseFloat(metricSpeedCalculation) * parseFloat(feedPerTooth) * parseFloat(flutes);

    document.getElementById('feed').value = parseInt(metricFeedCalculation);
    document.getElementById('speed').value = parseInt(metricSpeedCalculation);
  }
});


const main = document.querySelector("main");
main.append(div);
main.append(form);
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
    <a href="#">MM</a>
    <a href="#">Inch</a>
  </div>
  </div> 
  <div class="dropdown">
  <button class="cta-button l" >
  Edit
  <i class="fa fa-caret-down"></i>
  </button>
  <div class="dropdown-content" id="myDropdown">
    <a href="#">Dark theme</a>
    <a href="#">Light theme</a>
  </div>
  </div> 
  <a href=""><button class="cta-button info">Info</button></a>

<a href=""><button class="cta-button-right table">Table</button></a>
<a href=""><button class="cta-button-right drill">Drill</button></a>
<a href=""><button class="cta-button-right mill">Mill</button></a>
`

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

const form = document.createElement("form");
form.setAttribute("method", "POST");

form.innerHTML = `
<div class ="tool-data">
<h4>Tool Data</h4>
<a class ="parameter">Diameter (D): <input type="number" name="fname" maxlength="5"></a>
<a class ="parameter">Flutes (Z): <input type="number" name="fname" maxlength="5"></a>
<a class ="parameter">Feed per tooth (Fz): <input type="number" name="fname" maxlength="5"></a>
<a class ="parameter">Surface feed (V): <input type="number" name="fname" maxlength="5"></a>
<div class ="result">
<h4>Result</h4>
<a class = "parameter">Feedrate (F): <input type="number" name="feed" size="35" id="ans" /></a>
<a class = "parameter">RPM (S): <input type="number" name="speed" size="35" id="ans" /></a>
<a class = "parameter"><button type="button">Calculate</button></a>
</div>
</div>

`
// function Calculate() {
//   var first = document.getElementById('first').value;
//   var last = document.getElementById('sec').value;

//   document.getElementById('ans').value = parseInt(first) + parseInt(last);
//   document.form1.submit();
// }

const main = document.querySelector("main");
main.append(div);
main.append(form);
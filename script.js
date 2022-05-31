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
    <a href="">MM</a>
    <a href="#">Inch</a>
  </div>
  </div> 
<a href=""><button class="cta-button edit">Edit</button></a>
<a href=""><button class="cta-button info">Info</button></a>
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



const main = document.querySelector("main");
main.append(div);
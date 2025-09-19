let string = "";

let buttons = document.querySelectorAll( '.button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener("click", (e) =>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            document.querySelector('input').value = string;
        }else if(e.target.innerHTML == 'C'){
            string = '';
            document.querySelector('input').value = string;
        }else if(e.target.innerHTML == 'CE'){
            string = '';
            document.querySelector('input').value = string;
        }else if(e.target.innerHTML == 'C'){
            string = '';
            document.querySelector('input').value = string;
        }else{
        console.log(e.target)
        string = string + e.target.innerHTML;
        document.querySelector('input').value = string;
        }
    })
})

function storeOutput(){
    if(string){
    let value = JSON.parse(localStorage.getItem("value")) || [];
    value.push({ string})
    localStorage.setItem("string", JSON.stringify(string));
}

function showOutput(){
    let value = JSON.parse(localStorage.getItem("value")) || [];
    let output = "<h3>Calculation history</h3>";

    if (value.length > 0) {
    output += "<table><tr><th>History</th></tr>";
    credentials.forEach((item) => {
      output += `<tr>
                   <td>${item.value}</td>
                 </tr>`;
    });
    output += "</table>";
     } else {
    output += "<p>There is no history.</p>";
  }
document.getElementById("output").innerHTML = output;

}
function clearOutput() {
  localStorage.removeItem("value");
  document.getElementById("output").innerHTML = "<p>There is no history.!</p>";
}
}


document.getElementById("btnSave").addEventListener("click",  storeOutput);
document.getElementById("btnShow").addEventListener("click",  showOutput);
document.getElementById("btnClear").addEventListener("click", clearOutput);





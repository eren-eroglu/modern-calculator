const display = document.querySelector('#display');
const buttons = document.querySelectorAll('button');

buttons.forEach((item) => {
        item.onclick = () => {
          if (item.id == "clear") {
            display.innerText = "";
          } else if (display.innerText != "" && item.id == "equal") {
            display.innerText = eval(display.innerText);
          } else if (display.innerText == "" && item.id == "equal") {
            display.innerText = "Empty!";
            setTimeout(() => (display.innerText = ""), 2000);
          } else {
            display.innerText += item.id;
          }
        };
      });
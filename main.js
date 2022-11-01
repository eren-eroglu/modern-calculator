const display = document.querySelector('#display');
const buttons = document.querySelectorAll('button');

// buttons.forEach((item) => {
//         item.onclick = () => {
//           if (item.id == "clear") {
//             display.innerText = "";
//           } else if (display.innerText != "" && item.id == "equal") {
//             display.innerText = eval(display.innerText);
//           } else if (display.innerText == "" && item.id == "equal") {
//             display.innerText = "Empty!";
//             setTimeout(() => (display.innerText = ""), 2000);
//           } else {
//             display.innerText += item.id;
//           }
//         };
//       });

    buttons.forEach((item) => {
      item.onclick = function(){
        if(item.id == 'clear'){
          display.innerHTML = '';
        }else if(display.innerText != '' && item.id == 'equal'){
          display.innerText = eval(display.innerText);
        }else if(display.innerText == '' && item.id == 'equal'){
          display.innerText = 'empty'; 
        }else {
          display.innerText += item.id;
        }
      }
    })

    const genNew = document.querySelector('.dark-mode')
    const setBg = () => {
      const randomColor = Math.floor(Math.random()*16777215).toString(16);
      document.body.style.background = "#" + randomColor;
      color.innerHTML = "#" + randomColor;
    }
    
    genNew.addEventListener("click", setBg);
    setBg();
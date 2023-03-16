const display = document.querySelector(`#display`);
const buttons = document.querySelectorAll(`button`);


buttons.forEach((item)=> {
    item.onclick = () => {
        if(item.id == `clear`) {
            display.innerText = '';
        }
        else if (item.id == `backspace`) {
            let string = display.innerText.toString();
            display.innerText = string.substr(0, string.length - 1);

        }else if((display.innerText == '16-03-2000' || display.innerText == '16-3-2000') && item.id == 'equal'){
            display.innerText = "HAPPY BIRTHDAY TO YOU;
            setTimeout(() => (display.innerText = ''),4000);
            
        } else if(display.innerText != '' && item.id == 'equal'){
            display.innerText = eval(display.innerText);
            
        }
        else if (display.innerText == '' && item.id == 'equal'){
            display.innerText = 'Empty!';
            setTimeout(() => (display.innerText = ''),2000);
        }else{
            display.innerText += item.id;
        }

    }

})
const themeToggleBtn = document.querySelector(`.theme-toggler`);
const calculator = document.querySelector(`.calculator`);
const togglerIcon = document.querySelector(`.toggler-icon`);
let isDark = true;
themeToggleBtn.onclick = () => {
    calculator.classList.toggle('dark');
    themeToggleBtn.classList.toggle('active');
    isDark =!isDark;
}

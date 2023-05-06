const value = document.getElementById('number');
const decrease = document.getElementById('decreaseBTN');
const reset = document.getElementById('resetBTN');
const increase = document.getElementById('increaseBTN');

decrease.addEventListener('click', () => {
    value.innerText = Number(value.innerText --- 1)
})

reset.addEventListener('click', () => {
    value.innerText = Number(0)
})

increase.addEventListener('click', () => {
    value.innerText = Number(value.innerText +++ 1)
})
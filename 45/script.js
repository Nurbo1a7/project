const btns = document.querySelectorAll('button'),
      overlay = document.querySelector('.overlay');

// Этот вариант может изменится
// btn.onclick = function(){ 
//     alert('Click');
// };

// --------------------------------------------------
// btn.addEventListener('click', () => {
//     alert('Click')
// });

// btn.addEventListener('mouseenter', (e) => {
//     e.target.remove()
//     // console.log('Hover')
// });

// ==============================
// let i = 0;
const deleteElement = (e) => {
    console.log(e.currentTarget);
    console.log(e.type);
//     i++;
//     if (i == 1){
//         btn.removeEventListener('click', deleteElement)
//     }
};

// btn.addEventListener('click', deleteElement);
// overlay.addEventListener('click', deleteElement);
btns.forEach(btn => {
    btn.addEventListener('click', deleteElement);
});

// ===========================================

const link = document.querySelector('a')

link.addEventListener('click', (event) => {
    event.preventDefault(); // Отменяет действе ссылки
    console.log(event.target)
})
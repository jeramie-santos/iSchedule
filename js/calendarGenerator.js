const container = document.querySelector('.calendar-container');
const monthContainer = document.querySelector('.calendar__month');
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const date = new Date();

monthContainer.innerHTML = months[date.getMonth()];


// const d = new Date('October 17, 2001');

// alert(d.getDay());

// alert('');
// let box = document.createElement('div');
// box.classList.add('box');

// container.appendChild(box);
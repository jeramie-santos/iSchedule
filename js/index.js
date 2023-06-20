const announcementLink = document.querySelectorAll('.announcement-link');
const announcement = document.querySelector('#announcement');


// announcementLink.forEach((item) => {
//     item.addEventListener('click', ()=>{
//         let topPosition = announcement.offsetTop;
//         alert(topPosition);
//          window.scrollTo({
//             top: topPosition-100,
//             left: 0,
//             behavior: 'smooth',
//         }); 
//     });
// } );

document.querySelectorAll('.btn-link').forEach((item)=>{
    item.addEventListener('click', ()=>{
        let topPosition = document.getElementById(item.dataset.page).offsetTop - 100;
        if(item.dataset.page == 'home') topPosition -= 130;
        window.scrollTo({
            top: topPosition,
            left: 0,
            behavior: 'smooth',
        }); 
    });
});

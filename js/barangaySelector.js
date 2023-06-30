const municipality = document.querySelector('#municipality');
const barangay = document.querySelector('#barangay');



const municipalityList = ['angat', 'balagtas', 'baliwag', 'bocaue', 'bulakan', 'bustos', 'calumpit', 'doña remedios trinidad', 'guiguinto', 'hagonoy', 'malolos', 'marilao', 'meycauayan', 'norzagaray', 'obando', 'pandi', 'paombong', 'plaridel', 'pulilan', 'san ildefonso', 'san jose del monte', 'san miguel', 'san rafael', 'santa maria'];

municipalityList.forEach((item)=>{

    processedItem = item.substring(0, 1).toUpperCase() + item.substring(1);

    for(i = 0; i < item.length; i++){
        if(processedItem[i] == ' '){
            let splitStr = processedItem.toLowerCase().split(' ');
            for (j = 0; j < splitStr.length; j++) {
                // You do not need to check if i is larger than splitStr length, as your for does that for you
                // Assign it back to the array
                splitStr[j] = splitStr[j].charAt(0).toUpperCase() + splitStr[j].substring(1);     
            }

            processedItem = splitStr.join(' ');
            break;
        }
    };

    const newMunicipality = document.createElement('option');
    newMunicipality.innerHTML = processedItem;
    newMunicipality.setAttribute('value', item);

    municipality.appendChild(newMunicipality);
});

// const barangayList = {
//     'personal computer': '5600g',
// };

// alert(barangayList['personal computer']);

// alert(barangayList.plaridel.length);
// alert(barangayList.plaridel[0].substring(0, 1).toUpperCase() + barangayList.plaridel[0].substring(1));



function getBarangayList(municipality){
    if(municipality == 'baliwag') alert('ey yo');
}


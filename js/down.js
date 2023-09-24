insertDownDetails();

function insertDownDetails(){
    const title = document.querySelector('h1');
    const msg = document.querySelector('p');
    const btn = document.querySelector('a');

    const xhr = new XMLHttpRequest();
    
    xhr.onreadystatechange = function(){
        if(this.readyState == 4){
            if(this.status == 200){
                let obj = JSON.parse(xhr.responseText);

                title.innerText = obj.title;
                msg.innerText = obj.message;

                if(obj.status == 3){
                    btn.style.visibility = 'unset';
                }
                else{
                    btn.style.visibility = 'hidden';
                }
            }
        }
    }

    xhr.open("GET", "./../php/getDownDetails.php", false);
    xhr.send();
}
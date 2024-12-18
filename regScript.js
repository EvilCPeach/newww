let button = document.getElementById('addPost');
let input = document.querySelector('input');
let FIO = document.getElementById('FIO');
let div = document.querySelector('div');
let forma = document.querySelector('form');
button.addEventListener('click', async (event) => {
    event.preventDefault();
    try{
        let formData = new FormData(forma);
        let i = 0;
        for(let value of formData.values()){
            let loginValue = input.value;
            let FIOvalue = FIO.value;
            if(i = 0){
                loginValue = value;
                i++;
            }
            else if (i = 1){
                FIOvalue = value;
            }
            console.log(value);
            let query = await fetch('addVillager.php', {
            method: 'POST',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            body: {'login': loginValue, 'FIO': FIOvalue}
            });
            let response = await query.text();
            if(response){
            div.innerHTML = response;
            console.log(response);
        } 
        }
    }
    catch (error){
        console.log(error);
    }
})
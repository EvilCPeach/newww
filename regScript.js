let button = document.getElementById('addPost');
let input = document.querySelector('input');
let FIO = document.getElementById('FIO');
let div = document.getElementById('modal');
let closee = document.querySelector('button');
let body = document.querySelector('body');
let forma = document.querySelector('form');
closee.addEventListener('click', function(){
    div.classList.add('hidden');
    body.classList.remove('dark');
    forma.classList.remove('noneClick');
})
button.addEventListener('click', async (event) => {
    event.preventDefault();
    try{
            if(input.value != '' && FIO.value != ''){
                button.removeAttribute('disabled');
                let query = await fetch('addVillager.php', {
                    method: 'POST',
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                    body: new URLSearchParams({login: input.value, FIO: FIO.value})
                });
                let response = await query.text();
                if(response == 'exists'){
                    forma.classList.add('noneClick');
                    body.classList.add('dark')
                    div.classList.remove('hidden');
                    console.log(response);
                }
                else{
                    div.classList.add('hidden');
                    console.log(response);
                }
            }
            else{
                button.setAttribute('disabled');
                console.log('форма пустая');
            }
    }
    catch (error){
        console.log(error);
    }
})
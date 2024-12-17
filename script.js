// let form = document.querySelector('form');
// let button = document.getElementById('btn');
// let inputName = document.querySelector('input');
// let inputAge = document.getElementById('age');
// let inputAccup = document.getElementById('acc')
// button.addEventListener('click', function(event){
//     event.preventDefault();
//     let formData = new FormData(form);
//     for (let p of formData.entries()) {
//         console.log(p);
//     }
// });

let div = document.querySelector('div');
let button = document.querySelector('button');
// let button2 = document.getElementById('two');
// let button3 = document.getElementById('three');
// button.addEventListener('click', function() {
// 	let result = fetch('/ajax.html');
//     fetch('/ajax.html').then(function(response) {
// 		return response.text();
// 	}).then(function(text){
//         div.innerHTML = text;
//     }); 
// });
// button2.addEventListener('click',function(){
//     let result = fetch('ajax2.html').then(function(response){
//         return response.text();
//     }).then(function(text){
//         div.innerHTML = text;
//     })
// });
// button3.addEventListener('click',function(){
//     let result = fetch('ajax3.html').then(function(response){
//         return response.text();
//     }).then(function(text){
//         div.innerHTML = text;
//     })
// });

// let i = 0;
// button.addEventListener('click', function() {
//     i++;
//     if(i == 1){
        // fetch('/ajax.html').then(function(response) {
            // console.log(response.headers.get('Content-Language'));
            // for (let [key, value] of response.headers) {
            //     console.log(key, value);
            // }
        //     return response.text();
        // }).then(function(text){
        //     div.innerHTML = text
        //     array.push(text);
            
        // });
//         fetch('/data.json').then(response => {
//             return response.text();
//         }).then(text => {
//             console.log(text);
//             for(let [key,value] of text){
//                 console.log(key);
//                 div.innerHTML = '<li>' + text[13] + '</li>' + '<li>' + text[23] + '</li>';
//             }
//         });
//     }
//     else if(i == 2){
//         fetch('/ajax2.html').then(function(response) {
//             return response.text();
//         }).then(function(text){
//             div.innerHTML = text;
//         });
//     }
//     else if(i == 3){
//         fetch('/ajax3.html').then(function(response) {
//             return response.text();
//         }).then(function(text){
//             div.innerHTML = text;
//         });
//     }
//     else if(i > 3){
//         i = 0;
//         div.innerHTML = ' ';
//     }
// });
let array = [1,2,3,4];
let form = document.querySelector('form');
let button2 = document.querySelector('input[type=submit]');
button2.addEventListener('click',function(event){
    event.preventDefault();
    let formData = new FormData(form);
    for (let p of formData.values()) {
        for(let elem of array){
            div.innerHTML = elem[p];
        }
    }

});

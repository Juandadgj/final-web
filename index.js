
const p = document.getElementById('main');
const get = document.getElementById('get');
const text = document.getElementById('mail');
const post = document.getElementById('post');

get.addEventListener('click', getQuote);
post.addEventListener('click', sendMail);

function getQuote() {
    fetch('https://api.kanye.rest/')
    .then(response => response.json())
    .then(data => {
        let text = 'Kanye message: '+data.quote;
        p.textContent = text;
        console.log(data.quote)
    })
}

function sendMail() {
    console.log(text.value);
    fetch('https://webhook.site/446d761a-297d-4da0-83b5-ffa2e1b30243', {
        method: 'POST',
        body: JSON.stringify({
            mail: text.value
        }) 
    })
    .then(function(response){
        console.log('Enviado correctamente');
    })
    .catch(function(error){
        console.log('Hubo un error :(');
    })
}

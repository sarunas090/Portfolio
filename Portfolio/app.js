const tablinks = document.getElementsByClassName('tab-links');
const tabcontents = document.getElementsByClassName('tab-contents');

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove('active-link');
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove('active-tab');
    }
    event.currentTarget.classList.add('active-link');
    document.getElementById(tabname).classList.add('active-tab');
}

// sidemenu 

const sidemenu = document.getElementById('sidemenu');

function openmenu() {
    sidemenu.style.right = '0';
}

function closemenu() {
    sidemenu.style.right = '-200px';
}

// contact form

const scriptURL = 'https://script.google.com/macros/s/AKfycbyP93Lagl5W2oYJuKK-X4rcqF3fe8MB6JQkV2h_9D_zs4ZmtcWuEfF81_OqYMQYgPHToA/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById('msg');

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Message sent succesfully"
        setTimeout(function(){
            msg.innerHTML = ""
        },5000)
        form.reset();
    })
    .catch(error => console.error('Error!', error.message))
})

// var form = document.getElementById('sheetdb-form');
//   form.addEventListener("submit", e => {
//     e.preventDefault();
//     fetch(form.action, {
//         method : "POST",
//         body: new FormData(document.getElementById("sheetdb-form")),
//     }).then(
//         response => response.json()
//     ).then((html) => {
//       // you can put any JS code here
//       alert('success')
//     });
//   });
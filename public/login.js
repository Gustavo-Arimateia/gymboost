const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");

signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

const contactForm = document.querySelector('.form-container')
let nome = document.getElementById('nome')
let email = document.getElementById('email')
let senha = document.getElementById('senha')

contactForm.addEventListener('submit', (e)=>{
  e.preventDefault()
    
  let formData = {
    nome: nome.value,
    email: email.value,
    senha: senha.value
  }

  let xhr = new XMLHttpRequest();
  xhr.open('POST', '/')
  xhr.setRequestHeader('content-type', 'application/json')
  xhr.onload =function(){
    console.log(xhr.responseText)
    if(xhr.responseText == 'success'){
      nome.value = ''
      email.value = ''
      senha.value = ''
    }else{
      alert('Erro ao enviar')
    }
  }

  xhr.send(JSON.stringify(formData))
})
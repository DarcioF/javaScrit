var botao = document.querySelector('button');
var user = document.querySelector('input');

function mostrar(){
  axios.get('https://api.github.com/users/'+user.value+'/repos')
  .then(function(response){
    var imagem = document.createElement('h1');
    imagem.setAttribute('src', response.data.name);
    var pagina = document.querySelector('div');
    pagina.appendChild(imagem);
  })
  .catch(function(error){
    console.log(error)
  })
}

botao.onclick = mostrar;
console.log('teste')
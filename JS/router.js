//Criar objeto a partir de uma classe onde podemos gerar uma função construtora.

//Depois de criado a classe, passamos as funções router e handle para dentro do escopo.

// Como agora temos as funções dentro da classe, para que possamos chamá-las precisaremos usar a palavra reservada "this"

export class Router{
  routes = {}//variável criada somente para identificar o routes como um objeto.

  add(routeName, page){
    this.routes[routeName] = page
  }

  route(e) {                                                         
    e = e || window.e;
    e.preventDefault();
  
    window.history.pushState({}, "", e.target.href);
    
    this.handle();
  }

  handle() {
    const { pathname } = window.location;
    const route = this.routes[pathname] || this.routes[404];

    const changeBackground = document.body;
    if(changeBackground === "/pages/universe.html"){
      body.classList.add(".background1")
    }else if(changeBackground === "/pages/exploration.html"){
      body.classList.add(".background2")
    }else if(changeBackground === "/"){
      body.classList.add(".backgroundHome")
    }



    fetch(route)
      .then((data) => data.text())
      .then((html) => {
        document.querySelector("#app").innerHTML = html;
      });
  }


}

import { Router } from "./router.js";
// variável const router criada para conseguir importar a classe Router
const router = new Router() 
router.add("/", "/pages/home.html")
router.add("/universe", "/pages/universe.html")
router.add("/exploration", "/pages/exploration.html")
router.add(404, "/pages/404.html")


// Estrutura de object literal que foi remodelada acima.
// const routes = {
//   "/": "/pages/home.html",
//   "universe": "/pages/universe.html",
//   "exploration": "/pages/exploration.html",
//   404: "/pages/error.html",
// };

router.handle();

//Propriedades criadas em aula.
//onpopstate criado para navegar pelas setas do navegador. Porém a aplicação já estava funcionando a navegação sem a propriedade.
window.onpopstate = router.handle()
//window.route foi criado para que apareça o html na tela depois da mudança do arquivo JS para a pasta JS, porém o HTML também já estava sendo repassado para a página.
window.route = ()=>router.route()


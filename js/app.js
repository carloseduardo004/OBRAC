var imported = document.createElement('script');
imported.src='https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/4.4.0/mdb.min.js';
document.head.appendChild(imported);
/*==================== MOSTRAR NAVBAR ====================*/
const showMenu = (headerToggle, navbarId) =>{
    const toggleBtn = document.getElementById(headerToggle),
    nav = document.getElementById(navbarId)
    
    // VALIDAR AS VARIAVEIS
    if(headerToggle && navbarId){
        toggleBtn.addEventListener('click', ()=>{
            // We add the show-menu class to the div tag with the nav__menu class
            nav.classList.toggle('show-menu')
            // Mudar ícone
            toggleBtn.classList.toggle('bx-x')
        })
    }
}
showMenu('header-toggle','navbar')

/*==================== LINK ACTIVE ====================*/
const linkColor = document.querySelectorAll('.nav__link')

function colorLink(){
    linkColor.forEach(l => l.classList.remove('active'))
    this.classList.add('active')
}

linkColor.forEach(l => l.addEventListener('click', colorLink))

/*==================== MUDAR DE PÁGINAS ================*/
//páginas normais
function click1985(){
    window.location.href="mapa_1985/mapa1985.html";
    }
    function click1990(){
    window.location.href="mapa_1990/mapa1990.html";
    }      
    function click2000(){
    window.location.href="mapa_2000/mapa2000.html";
    }     
    function click2010(){
    window.location.href="mapa_2010/mapa2010.html";
    }      
    function click2020(){
    window.location.href="mapa_2020/mapa2020.html";
    }
    function home(){
    window.location.href="index.html";
    }
    function clickanalise(){
    window.location.href="analises.html";
    }
    function clickcolecao(){
    window.location.href="colecao.html";
    }
    function clickcurta(){
    window.location.href="curta.html";
    }
    function clickfasefinal(){
    window.location.href="fasefinal.html";
    }
    function clicksobrenos(){
    window.location.href="sobrenos.html";
    }
    
    //mudandao paginas quando estiver na janela dos mapas//
    function mapa1985(){
    window.location.href="../mapa_1985/mapa1985.html";
    }
    function mapa1990(){
    window.location.href="../mapa_1990/mapa1990.html";
    }      
    function mapa2000(){
    window.location.href="../mapa_2000/mapa2000.html";
    }     
    function mapa2010(){
    window.location.href="../mapa_2010/mapa2010.html";
    }      
    function mapa2020(){
    window.location.href="../mapa_2020/mapa2020.html";
    }
    function mapahome(){
    window.location.href="../index.html";
    }
    function mapaanalise(){
    window.location.href="../analises.html";
    }
    function mapacolecao(){
    window.location.href="../colecao.html";
    }
    function mapacurta(){
    window.location.href="../curta.html";
    }
    function mapafasefinal(){
    window.location.href="../fasefinal.html";
    }
    function mapasobrenos(){
    window.location.href="../sobrenos.html";
    }
    
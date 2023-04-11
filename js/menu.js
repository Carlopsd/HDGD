const menu=document.getElementById("menu")

window.onload=function(){
    menu.innerHTML=`
    <input type="checkbox" id="button">
    <label for="button" class="menu-btn"><i class="bi bi-list"></i></label>
    <nav class="nav menu bg-light">
                <ul class="navbar-nav">
                    <img class="logo" src="../media/LOGO/superlogopeque.jpg" alt="">
                    <li class="nav-item"><a class="nav-link" href="./inicio.html">Inicio</a></li>
                    <li class="nav-item"><a class="nav-link" href="./escudo.html">Escudo</a></li>
                    <li class="nav-item"><a class="nav-link" href="./historia.html">Historia</a></li>
                    <li class="nav-item"><a class="nav-link" href="./escuelas.html">Escuelas</a></li>
                    <li class="nav-item"><a class="nav-link" href="./contactos.html">Contactanos</a></li>
                    <li class="nav-item"><a class="nav-link" href="./beneficios.html">Beneficios</a></li>
                    <li class="nav-item"><a class="nav-link" href="./sables.html">Los sables</a></li>
                    <li class="nav-item"><a class="nav-link" href="./vocabulario.html">Vocabulario</a></li>
                    <li class="nav-item"><a class="nav-link" href="./entrenamiento.html">Entrenamiento</a></li>
                    <li class="nav-item"><a class="nav-link" href="./representantes.html">Representantes</a></li>
                    <li class="nav-item"><a class="nav-link" href="./solucitudes.html">Solicitud de examen</a></li>
                    <li class="nav-item"><a class="nav-link" href="./compromiso.html">Compromiso</a></li>
                    <img class="logo" src="../media/LOGO/superlogopeque.jpg" alt="">
                </ul>
    </nav>`;

    checkActive();
}

function checkActive(){
    let links = document.getElementsByClassName("nav-link");
    
    for(let i=0; i< links.length ;i++){
        if( links[i].innerHTML== menu.className){
            links[i].classList.add("active")
            links[i].href="#";
        }
    }
}

const menu=document.getElementById("menu");


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

    if(screen.width>1100){
        console.log(screen.width)
        document.getElementById("button").checked=true;
    }
}

function checkActive(){
    let links = document.getElementsByClassName("nav-link");
    
    for(let i=0; i< links.length ;i++){
        if( links[i].innerHTML== menu.className){
            links[i].classList.add("active")
            links[i].href="#";
        }
        if(menu.className=="Vocabulario"){
            getVocaburay();
        }else if(menu.className=="Historia"){
            getSwords();
        }
    }
}

// Vocabulario
const vocabularioDatos= new Map(
    [["KWAN JANG NIM", "maestro a partir de 6º dan o fundador"],
    ["SABONIM", "maestro"],
    ["JAE YA", "alumno"],
    ["HAIDONG IN", "practicante de haidong gumdo"],
    [" DOYANG", "escuela o lugar de entrenamiento"],
    ["DOBOK", "uniforme"],
    ["TI", "cinta"],
    ["KIAP", "grito"],
    ["GUM BUP", "forma"],
    ["KUN YEAOL", "saludar con reverencia"],
    ["CHARYOT", "atencion"],
    ["MUK NYOM", "meditar"],
    ["JUMBI", "listo"],
    ["KIMASE", "posicion a caballo con las rodillas hacia dentro"],
    ["BALDO", "desenvainar"],
    ["SHIYAK", "iniciar"],
    ["JUNG MYON BAEGUI", "corte al centro"],
    ["YUAWOO BAEGUI", "corte izquierda-derecha"],
    ["SAMDAN BAEGUI", "tres cortes centro,izquierda y derecha"],
    ["WHOENG DAN IL GUM", "corte horizontal"],
    ["SA SO BAEGUI", "cuatro cortes en horizontal formando una cruz tanto de arriba hacia abajo como de abajo hacia arriba"],
    ["GWANG JA BAEGUI", "seis cortes"],
    ["DAEDO GYUN JUK SAE", "defensa al frente con paso largo"],
    ["GUM GAE DONG LIP PAL SANG SAE", "posicion de grulla"],
    ["CHA SE BA KO SO", "cambio de lado"],
    ["D-YA ION SE", "defensa hacia el frente con un paso hacia el frente con pierna derecha"],
    ["APEURO", "adelante"],
    ["DUIRO", "atras"],
    ["JOARO", "izquierda"],
    ["URO", "derecha"],
    ["JEON JIN BEAGUI", "paso con corte al centro ya sea hacia adelante,atras,izquierda o derecha"],
    ["IO BAEGUI", "dos cortes al frente y hacia atras"],
    ["ION SEOK BAEGUI", "cuatro cortes frente,atras,izquierda y derecha"],
    ["SEO DO KYUNG YEOK SE", "posicion de ciervo"],
    ["CHEO CHEON SE", "defensa alta"],
    [" JI HA SAE", "defensa baja"],
    ["CHAK GUM", "envainar"],
    ["DAERYON", "combate"]]);

const vocabularioList=document.getElementById("lista-vocabulario");

function getVocaburay(){
    let vocabulario="";
    vocabularioDatos.forEach((valor,clave)=>{
        vocabulario+= `
        <tr>
            <td>${clave}</td>
            <td>${valor}</td>
        </tr>
        `
    });
    vocabularioList.innerHTML=vocabulario;
}

// Espadas data
const swordData= new Map([
    [`Yedo (예도; 锐 刀)`,`Esta espada es generalmente un sable de filo único que varía de 3 a 4 pies (1,2 m).`],
    [`Geom (검; 剑) `,`Literalmente "espada". Este término se utiliza generalmente para dobles espadas afiladas, pero también es utilizado por un solo espadas afiladas. Hoy en día, mucha gente utiliza la terminología "kal".`],
    [`Haedong jingeom (해동 진검; 海东 剑) `,`Esto significa literalmente 'East Asian Espada práctica ". Es una terminología utilizada recientemente que se utiliza para prácticas espadas coreanas de hoy en día.`],
    [`Samgakdo (삼각 도; 三角 刀) `,`El samgakdo, es también una terminología utilizada recientemente para espadas utilizadas para el corte de estera. La sección transversal de la espada es de forma triangular, de ahí el nombre Samgakdo (lo que significa espada de 3 lados).`],
    [`Ssangdo o Ssanggeom (쌍 도; 双刀; 쌍검: 双剑) `,`Esto significa literalmente ". Espadas Gemelas" Puede variar de dos espadas largas o dobles espadas cortas. Estas técnicas también pueden utilizarse a caballo como 'Masang ssanggeom'. La caballería de Corea fue famoso por usar técnicas Gemelas Espada a caballo, mientras que el equilibrio en el caballo con gracia.`],
    [`Samjeongdo (삼정 도; 三正 刀) `,`la espada atención a recién ascendidos generales militares de Corea cada año por el Ministerio de Defensa Nacional.`],
    [`Woldo (월 도; 月 刀) `,`Esta es una cuchilla de media luna grande que es una variante de la Dao Kwan (官 刀) de China. Literalmente traducido como 'Moon' Blade '.`],
    [` Danwoldo `,`Se trata de una cuchilla de media luna aún más grande que es en realidad más de una espada que un arma de asta. Alrededor de la mitad de las armas era de metal puro y la otra mitad era el mango de la espada. La hoja era de 3 pies (0,91 m) de largo y unos treinta centímetros de ancho. Literalmente traducido como "The Blade Great Moon '.`],
    [`Hyeopdo (협도; 侠 刀) `,`Esta es también una cuchilla de media luna grande que es similar a la 'Pudao' pero más ancho y más grueso. Un tassle unido al extremo de la hoja.`],
    [`Jedok geom `,`Esta espada fue usada por los generales y otros funcionarios de alto rango de los reinos coreanos. La espada era generalmente cerca de 5-6 pies de altura y de un solo filo. La espada era también recta y manejado con una o dos manos.`],
    [`Ssangsudo (쌍수도; 双手 刀) `,`Se trata de una espada afilada de un solo largo que variaba de 5 a 7 pies (2,1 m). Su nombre significa "espada de dos manos"`],
    [`Sainchamsageom `,`El nombre de esta espada, literalmente, significa "Cuatro Grandes Tiger Sword '. Se trata de una espada ceremonial que se usa para matar a los demonios y los rituales chamánicos. A veces, estas espadas también fueron utilizados en combate.`],
    [`Samingeom `,`Literalmente traducido a "Tres Espada Tiger '.`],
    [`I-ingeom `,`Traducido literalmente a 'Two Espada Tiger'.`],
    [`Chilseonggeom (칠성검; 七星剑) `,`Esta espada es una espada de un solo filo o doble que los practicantes budistas utilizan. Muchas de estas espadas tenía grabados constelación de las palas (normalmente la Osa Mayor).`],
    [`Yongbunggeom: `,`Esta es una espada Reino Baekje. La espada es solo filo y recto. También hay un anillo distintivamente gran pomo celebrada en la sección inferior del mango espada.`],
    [` Ssangyunggeom `,`Se trata de dos espadas gemelas que se celebra con una funda. La vaina es el doble de ancha, ya que necesita espacio para la espada segundos. La espada longitud varía de tres a cuatro pies. Por lo general, estas espadas de doble filo y se hecha de hierro (incluyendo la funda).`],
    [`Bulsaegeom `,`Esta espada es bastante similar a la longitud y el diseño del Sainchamsagum. La diferencia es que la espada está hecho con características menos complejas.`],
    [`Janggeom (장검; 长剑) `,`Literalmente significa "espada larga".`],
    [`Hwando (환도) `,`Se trata de un solo filo corto que se utiliza estrictamente con una mano. Este fue un brazo secundario común de muchos soldados durante la era Joseon.`],
    [`Hwandudaedo (환 두대 도; 环 头 大刀) `,`Esta espada es una especie de espada de un solo filo utilizado en el área de los Tres Reinos. Es conocido por tener un anillo de pomo y ser soltero o de doble filo. La mayoría de las espadas durante este tiempo era semi-uniforme en la naturaleza y muchos practicantes de artes marciales tienden a reconocer esta arma como "espada original de Corea". El Hwandudaedo puede tener alguna relación con las espadas japonesas recta (tsurugi) y el chino Jian.`],
    [`Unggeom (웅검) `,`Éste es un solo filo largo que se utilizó con una o dos manos. Este fue otro brazo secundario común de muchos soldados durante la era Joseon.`],
    [`Siete brazos Sword `,`Esta espada tenía siete hojas que sobresalen de ella. Esta era una espada forjada en Baekjae en el orden del rey. Existe la teoría de que esto es una espada que iba a ser un regalo presentado al emperador de Japón. No se encontró el mango de la pala ni había encontrado una Espada por ello mientras se está excavando. Otros estudiosos dicen que esta arma es pesada y se utilizó sin duda con las dos manos. Dicen que la espada es extremadamente robusto, y debido a las cuchillas que sobresalen, es muy difícil de romper.`],
])
function getSwords(){
    let espadas="";
    swordData.forEach((valor,clave)=>{
        espadas+= `
        <dt class="col-sm-3 fst-italic">${clave}:</dt>
        <dd class="col-sm-9 fw-semibold">${valor}</dd>
        `
    });
    document.getElementById("lista-espadas").innerHTML=espadas;
}
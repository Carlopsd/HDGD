const contenido = document.getElementById('contenido');

document.getElementById("INICIO").addEventListener('click',()=>{
    contenido.classList.remove("text-center");
    contenido.innerHTML=`
        <h4 class="text-center fw-semibold">¿Qué se aprende en una clase de Haidong Gumdo antes de 
            ser cinta negra?
        </h4>
        <p class="fw-semibold">A apagar velas, desde una a varias juntas, de acuerdo con tu grado para
            adquirir más precisión.
            <br><br>
            Formas, pasos de combate, combate y una serie de técnicas que irán desarrollando tus
            destrezas para poder llegar a ser cinta negra y manejar hábilmente un sable de verdad
        </p>
        <div class="text-center">
            <img class="rounded" src="../media/entrenamiento/1526241_565541233527121_1092966366_n.jpg" alt="Entrenamiento">
        </div>
        <br><br>
        <div class="container">
            <h5 class="text-center fw-semibold">ENTRENAMIENTO</h5>
            <p class="fw-semibold">
                Antes de entrenar verdaderamente con una espada, quienes estudian el sistema de Kuk Sool
                se preparan estudiando los cinco principios básicos.
                <br><br>
                Aunque al término Ja Se, puede traducírsele como "postura" o "posición", en realidad hace
                referencia a cuestiones mayormente filosóficas. Naturalmente también se refiere a cuestiones
                técnicas que pueden incluir una serie de movimientos defensivos y ofensivos relacionados con
                una determinada situación, de igual forma se relaciona con el desarrollo del Ki
                (energía interna). El término también se puede referir a cada movimiento dentro de una Hyung
                (forma). En esencia, el término Ja se significa que cada posición del cuerpo (sea externa o
                interna) tiene un propósito bien definido en el momento en que se va a hacer uso de ella.
                <br><br>
                En primer lugar de importancia en el Ja se están los ojos, los cuales deben de enfocar al
                espíritu de forma exterior. En segundo lugar, el espíritu propiamente dicho, que debe reflejar
                calma, tranquilidad y sosiego. En tercer lugar el cuerpo, al que se le debe de mantener bajo
                control, suave, libre de tensiones y pleno de agilidad y flexibilidad. En el cuarto los pies,
                que deben de moverse con lentitud y precisión. Y en última instancia las manos, que deben de
                ser rápidas, coordinadas y exactas en sus movimientos.
                <br><br>
                El componente más importante para el dominio en el manejo de la espada es la meditación.
                Ésta fue desarrollada para fundir la mente y el cuerpo y llegar a convertirlos en una sola
                unidad con la espada. Tal cuestión es en sí el arte: es lograr que en los movimientos el
                cuerpo pase a ser una parte de la espada y la espada una extensión del cuerpo.
                <br><br>
                La meditación se practica antes, durante y después del entrenamiento con lo que se desarrolla
                el Ki del estudiante, el cual, en última instancia, se puede transferir a la espada pues la
                meditación mejora la capacidad de sujetarla adecuadamente y moverla con suavidad.
            </p>
        </div>
        `
});

document.getElementById("ESTIRAMIENTO").addEventListener('click',()=>{
    contenido.classList.add("text-center");
    contenido.innerHTML=`
        <h4 class="fw-semibold">Estiramiento</h4>
        <p class="fw-semibold">Estiramiento Zen relaja la mente y el cuerpo, incrementa la agilidad e
            incrementa el conocimiento de la mente.
        </p>

        <img class="rounded" src="../media/entrenamiento/stretch.jpg" alt="Estiramiento">
        <img class="rounded" src="../media/entrenamiento/stretch1.jpg" alt="Estiramiento">
        <img class="rounded" src="../media/entrenamiento/stretch2.jpg" alt="Estiramiento">`
    
});

document.getElementById("BASICOS").addEventListener('click',()=>{
    contenido.classList.add("text-center");
    contenido.innerHTML=`
    <h4 class="fw-semibold">Ejercicios básicos</h4>
    <p class="fw-semibold">Los Ejercicios Basicos son la fundación del Haidong Gumdo. Aprendiendo estos
    ejercicios básicos, un practicante puede realzar su energía y resistencia para construir un cuerpo
    fuerte para asi dominar las técnicas principales de la espada.
    </p>
    <img class="rounded" src="../media/entrenamiento/chochonse.jpg" alt="Choconse">
    <img class="rounded" src="../media/entrenamiento/sodose.jpg" alt="Sodose">
    <img class="rounded" src="../media/entrenamiento/grulla.jpg" alt="Grulla">
    `
});

document.getElementById("GUMBUP").addEventListener('click',()=>{
    contenido.classList.add("text-center");
    contenido.innerHTML=`
    <h4 class="fw-semibold">Gumbup</h4>
    <p class="fw-semibold">La práctica de Gumbup es la base del entrenamiento de la espada.
        Realza fuerzas físicas, también como la capacidad de concentrarse. Con la comprensión
        de las técnicas de la espada también se armonizan los movimientos del cuerpo y la espada.
    </p>
    <img class="rounded" src="../media/entrenamiento/woman.jpg" alt="GUMBUP">
    `
});

document.getElementById("GYUKGUM").addEventListener('click',()=>{
    contenido.classList.add("text-center");
    contenido.innerHTML=`
    <h4 class="fw-semibold">Gyukgum</h4>
    <p class="fw-semibold">Para desarrollar reflejos y el juicio rápidos,un practicante aprende
        a aplicar las técnicas de la espada de gumbups en situaciones verdaderas del combate.
        Hay gyukgum corto, gyukgum coreografico y gyukgum real.
    </p>
    <img class="rounded" src="../media/entrenamiento/IMG_2127.JPG" alt="Gyukgum">
    `
});

document.getElementById("DANJUN").addEventListener('click',()=>{
    contenido.classList.add("text-center");
    contenido.innerHTML=`
    <h4 class="fw-semibold">Dan jun</h4>
    <p class="fw-semibold">Con la meditación y el control del patrón de respiración, un practicante
        aprende a calmar el cuerpo y la mente, así como la capacidad de controlarse uno mismo.
    </p>
    <img class="rounded" src="../media/entrenamiento/meditacion.jpg" alt="Dan jun">        
    `
});

document.getElementById("COMBATE").addEventListener('click',()=>{
    contenido.classList.add("text-center");
    contenido.innerHTML=`
    <div class="container text-center fw-semibold">
        <h4 class="fw-semibold">¿En qué consiste el combate?</h4>
        <p>Para el combate se usa el chukto o sable de bambú,
            y se utiliza el mismo equipo de protección que para el Tae Kwon Do. El combate es muy
            interesante y espectacular ya que se necesita tener buenos reflejos, coordinación,
            velocidad y táctica, además de una gran destreza en el uso del sable. Al principio es
            difícil, pero poco a poco vas coordinando al igual que en la práctica de cualquier otro
            arte marcial, y vas adquiriendo tu propio estilo y táctica con ayuda de tu profesor.
        </p>
        <img class="rounded" src="../media/entrenamiento/combate.JPG" alt="Combate">

        <h5 class="fw-semibold">¿Qué diferencias tiene esta técnica con otras de sable?</h5>
        <p>Esta técnica, a diferencia de las técnicas japonesas, sí permite
            el golpeo debajo de la cintura, así como el golpeo a todo el cuerpo.</p>
        <br><br>
        <h5 class="fw-semibold">Cómo se califica el combate?</h5>
        
        <div class="container">
            <h6 class="fw-semibold">PUNTOS A FAVOR:</h6>
            <ul>
                <li class="list-group-item">Golpes a la cabeza y cara: 1 puntos.</li>
                <li class="list-group-item">Tórax y piernas: 1 punto.</li>
                <li class="list-group-item">Se puede ganar por knock out.</li>
                <li class="list-group-item">En competencia son 2 rounds de 50 segundos cada uno.</li>
            </ul>
            <br>
            <h6 class="fw-semibold">AMONESTACIONES:</h6>
            <ul>
                <li class="list-group-item">Por soltar el sable.</li>
                <li class="list-group-item">Golpes medios a la tráquea y cara.</li>
                <li class="list-group-item">Dar la espalda.</li>
            </ul>
        </div>
    </div>
    `
});
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
let vocabulario="";

function getVocaburay(){
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

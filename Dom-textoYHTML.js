const $whatisDOM=document.getElementById("que-es");
let text = `
    <p>
    El Modelo de Objetos del Documento (<b><i>DOM - Document Object Model </i></b>) es un                    
    API para documentos HTML y XML.
    </p>
    <p>
    Éste provée una representación estructural del documento, permitiendo modificar su contenido y presentación visual mediante código JS.
    </p>
    <p>
        <mark> El DOM no es parte de la especificación de JavaScript, es una API para los navegadores.</mark>
    </p>
`;

//como podemos reenplazar el contenido dentro de la etqueta que tiene el id  (que es)
//inner text sirve para agregar contenido textual a un elemento
$whatisDOM.innerText = text;
$whatisDOM.textContent = text;

//si queremos que se renderice como contenido html 
$whatisDOM.innerHTML = text;

//cuando necesite insertar unicamente texto usas textContent
///cuando necesites insertar unicamente codigo html usas innerhtml

//outerhtml  aqui reemplaza mi etiqueta que es por el nuevo contenido

$whatisDOM.outerHTM=text;

/**En Java Script no se puden crear clases privadas
 * pero si se pueden crear metodos estaticos 
 */



class homoSapiens{
    //funcion constructora
    constructor(etnia,edad,genero){
        this.etnia = etnia;
        this.edad = edad;
        this.genero = genero;
        this.idioma = null;
    }

    //metodos
    hablar (){
        console.log(`Hola soy un HomoSapiens de la etnia ${this.etnia} con ${this.edad} de edad`);
        
    }

    //metodo estatico
    static descripcion(){
        console.log(" la especie Humana tiene alrededor de 300,015 años de antiguedad");
        
    }

    //metodos getters y setters: son metodos especiales que nos permiten establecer y obtener los valores atributos de nuestra clase

    get getIdioma(){
        return this.idioma
    }
    set setIdioma(idioma){
        this.idioma = idioma
    }
}

// podemos llamar a un metodo estatico sin haber intanciado un objeto

homoSapiens.descripcion();

//instanciamos  un objeto
  const tonatihu = new homoSapiens("Mestizo",28,"macho");

  console.log(tonatihu);
  //tonatihu.getIdioma();// es un metodo obtenedor y javaScript lo convierte a  propiedad 

console.log(tonatihu.idioma);
// lo mismo sucede en los setters se deben trbajar como propiedades

tonatihu.setIdioma = "Español";
console.log(tonatihu.getIdioma);

tonatihu.etnia = "Caucasico";
console.log(tonatihu.etnia);




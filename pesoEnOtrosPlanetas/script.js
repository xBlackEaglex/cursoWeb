    const greetButton = document.getElementById("greetButton");
    const nameInput = document.getElementById("nameInput");
    const pesoIngresado = document.getElementById("peso");
    const planetSelect = document.getElementById("planetSelect");
    const greeting = document.getElementById("greeting");

    greetButton.addEventListener("click", function () {
        const name = nameInput.value;
        const peso = pesoIngresado.value;
        const planeta = planetSelect.value;

        let pesoFinal = 0;

        /*

            Peso= masa x gravedad
            peso = 50 x 9.8 m/s2
            peso = 490 N

            las basculas en la tierra toman nuestro peso y lo dividen entre la gravedad
            y da como resultado nuestra masa en la tierra 

            para calcular lo que la bascula mostraría com masa en otro planeta 
            se usa una regla de 3

            9.8 m/s2 -> 50kg
            1.62 m/s2 -> ?

            masa en la luna = 8.26kg (según la bascula)

         */


        if (planeta === "Luna") {

            pesoFinal = (1.62 * peso)/9.807
            
        } else if (planeta === "Marte") {

            pesoFinal = (3.71 * peso)/9.807

        } else if (planeta === "Jupiter") {

            pesoFinal = (24.79 * peso)/9.807

        }

        let message = "¡Hola " + name + "!, tu peso en " + planeta + " es: " + pesoFinal.toFixed(2) + "kg" ;
        greeting.textContent = message;
    });


function calcu (min,max) {

    var min = document.getElementById("min").value;
    var max = document.getElementById("max").value;
    n = (min-1);

    console.log("Before While: " + n);

     while (n>max|| n<min){

        n = parseInt(Math.random()*100000);
        console.log("Aleatorio Interno: " + n);
    }  
        //console.log("Minimum is: " + min);
        //console.log("Maximum is: " + max);
        //console.log("Random is: " + n);

      //  result = n;



    //console.log("Aleatorio Externo: " +n );
    //document.getElementById("resultado").innerHTML = ( n );


    console.log("n es :"  + n);
    document.getElementById("rAn").innerHTML = ( n);
    //document.getElementById("ene").innerHTML = (n);

};

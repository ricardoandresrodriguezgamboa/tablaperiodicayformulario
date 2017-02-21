$(document).ready(function(){
  
  $("#reset").click(function(){
  
          $("#nombre").css("background-color","white");
          $("#nombre").css("border-color","grey");
          $("#nombre").css("border","solid"); 
          $("#email").css("background-color","white");
          $("#email").css("border-color","grey");
          $("#email").css("border","solid"); 
          $(".texto2").css("color","black");
          $("#options").css("background-color","white");
          $("#options").css("border-color","grey");
          $("#options").css("border","solid"); 
          $("#comentario").css("background-color","white");
          $("#comentario").css("border-color","grey");
          $("#comentario").css("border","solid"); 

           
  
  });
  
});



$(document).ready(function(){
     
       $("#submit").click(function(){

 if ($("#nombre").val() === '' ){
                   
           $("#nombre").css("background-color","#FF5C5C");
           $("#nombre").css("border-color","red");
           alertify.error("campo nombre vacio");        

            } 

    if ($("#email").val()  === ''){
          
           $("#email").css("background-color","#FF5C5C");
           $("#email").css("border-color","red");
           alertify.error("campo email vacio"); 

       }

     if ($("#options").val().trim() === '') {
                   
             $("#options").css("background-color","#FF5C5C");
             $("#options").css("border","solid"); 
             $("#options").css("border-color","red");   
             
             alertify.error("Debes seleccionar un pais");
         }
      
   if ($('input[name="estadocivil"]').is(':checked')) {
      //corecto
    } else {
        $(".texto2").css("color","red");
        alertify.error('Debes seleccionar un estado civil');
        
    }


       if ($("#comentario").val() === '') {
                   
             $("#comentario").css("background-color","#FF5C5C");
             $("#comentario").css("border","solid"); 
             $("#comentario").css("border-color","red"); 
            /*  setTimeout(function(){
                $("#comentario").css("background-color", "white");
                $("#comentario").css("border-color","grey");
     
                }, 5000);*/
             alertify.error("Debe ingresar algun comentario");
         }

           
 });

});

$(document).ready(function(){

    var patron =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;


    $("#submit").click(function(){
              
              
         var caja = $("#email").val();
             
          if  ($("#email").val()  != ''){
           
             if (!patron.test(caja)){

             	$("#email").css("background-color","#FF5C5C");
                $("#email").css("border-color","red");
                
                alertify.error("Debe ingresar un email valido");

             }else{

                   if ($("#nombre").val()  != '' && $("#options").val() != '' && $('input[value="Soltero"]').is(':checked') == true || $('input[value="Casado"]').is(':checked') == true || $('input[value="Viudo"]').is(':checked') == true   &&  $("#comentario").val() != '' ){
                               
                        alertify.success("Mensaje Enviado Correctamente"); 

                    }
                 


             }
          }

             return false;

    });


});


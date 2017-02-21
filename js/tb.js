$('.cell').mouseover(function()
{
	if($(this).prop("id").length > 0)
	{
		$(".element",this).css("width","250%");
        $(".element",this).css("height","250%");
        $(".element",this).css("zoom","250%");
        $(".element",this).css("z-index", "1");
	}
   
});

$('.cell').mouseout(function()
{
	if($(this).prop("id").length > 0)
	{
		$(".element",this).css("width","100%");
        $(".element",this).css("height","100%");
        $(".element",this).css("zoom","100%");
        $(".element",this).css("z-index", "0");
	}
   
});



$(document).ready(function(){
  
  var color = '';
 
  $(".cell").click(function(){

    color= $(".element",this).css("background-color");
     

  });
   
	   $(".cell").click(function(){
           
     if($(this).prop("id").length > 0){


		 var masa = $(".masa",this).text();
		 var at_num = $(".at_num",this).text();
		 var ener = $(".ener",this).text();
		 var elec = $(".elec",this).text();
		 var symbol = $(".symbol",this).text();
		 var at_details = $(".at_details",this).text();


    
	   
	
         alertify.alert("<div class='elem'>" + "<h1 style='color:black; font-size:30px;'>"+ symbol + "<h6>" + at_details + "</h6>" + "</h2></div>" + "<div class='descripcion'>" + "<b>Masa Atómica : </b>" + masa + "<br />" + "<b>Número Atómico :</b>" + at_num + "<br / >" + "<b>Enería de Ionizacion : </b>" + ener + "<br />" + "<b>Electronegatividad : </b>" + elec + "<br />" + "<b>Detalles del Atomo : </b>" + at_details + "</div>");

}              
 	  $(".elem").css("background-color",color); 
	  $(".descripcion").css("background-color",color);  

	   });

});


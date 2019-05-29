require('bootstrap-grid');
require('./styles.scss');

// var Vue = require('vue');
import Vue from 'vue';

$(document).ready(function() {
    //Simple Script to calc heigth of banner div
    if ($(window).width() > 991) {
        var heightOne = $('.left').height();
        var heightTwo = parseInt(heightOne);
        $('.right').height(heightTwo); 
    }
    else {
        $('.cont_set_info .red-box').height('auto');
    }
    //Simple Script to calc heigth of banner div
    //Script to calc Days and shippoing for Christmas
    String.prototype.ignore_latin = function(){
    return this.toLowerCase()
            .replace(/[Ã¡Ã Ã£Ã¢Ã¤]/gi,"a")
            .replace(/[Ã©Ã¨Â¨Ãª]/gi,"e")
            .replace(/[Ã­Ã¬Ã¯Ã®]/gi,"i")
            .replace(/[Ã³Ã²Ã¶Ã´Ãµ]/gi,"o")
            .replace(/[ÃºÃ¹Ã¼Ã»]/gi, "u")
            .replace(/[Ã§]/gi, "c")
            .replace(/[Ã±]/gi, "n")
            .replace(/[^a-zA-Z0-9]/g," ");
    }

    function getCitiesShip(){
        //var special_cities = '["Chia","Cota","Funza","Madrid","Mosquera","Soacha","Tocancipa","Sopo","Cajica","Facatativa","Girardot","Sibate","Tabio","Tenjo","Zipaquira","Gachancipa","La Calera","BogotÃ¡","Bosa","BriceÃ±o","Fontibon","Suba","Cali","Cartago","Buga","Jamundi","Palmira","Tulua","Yumbo","Medellin","Barbosa","Bello","Caldas","Copacabana","Envigado","Girardota","Itagui","La Ceja","La Estrella","Rionegro","Sabaneta","Bucaramanga","Floridablanca","Giron","Piedecuesta","Duitama","Sogamoso","Tunja","Armenia","Dosquebradas","Pereira","Ibague","Melgar","Chia","Cota","Funza","Madrid","Mosquera","Soacha","Tocancipa","Sopo","Cajica","Facatativa","Girardot","Sibate","Tabio","Tenjo","Zipaquira","Gachancipa","La Calera","BOGOTA","Bosa","BriceÃ±o","Fontibon","Suba","Cali","Cartago","Buga","Jamundi","Palmira","Tulua","Yumbo","Medellin","Barbosa","Bello","Caldas","Copacabana","Envigado","Girardota","Itagui","La Ceja","La Estrella","Rionegro","Sabaneta","Bucaramanga","Floridablanca","Giron","Piedecuesta","Duitama","Sogamoso","Tunja","Armenia","Dosquebradas","Pereira","Ibague","Melgar"]';
         var special_cities = '["Bogotá","Bosa","Fontibon","Suba","Bogota"]';
         return special_cities;
     }

    function getAllCitiesShip (){
    	// var cities = '[{"ZONA":"Zona Centro","DEPARTAMENTO":"Antioquia","MUNICIPIO":"MEDELLÃN"},{"ZONA":"Zona Centro","DEPARTAMENTO":"Santander","MUNICIPIO":"BARBOSA"},{"ZONA":"Zona Centro","DEPARTAMENTO":"Antioquia","MUNICIPIO":"BARBOSA"},{"ZONA":"Zona Centro","DEPARTAMENTO":"Antioquia","MUNICIPIO":"BELLO"},{"ZONA":"Zona Centro","DEPARTAMENTO":"Antioquia","MUNICIPIO":"CALDAS"},{"ZONA":"Zona Centro","DEPARTAMENTO":"BoyacÃ¡","MUNICIPIO":"CALDAS"},{"ZONA":"Zona Centro","DEPARTAMENTO":"Antioquia","MUNICIPIO":"EL CARMEN DE VIBORAL"},{"ZONA":"Zona Centro","DEPARTAMENTO":"Antioquia","MUNICIPIO":"COPACABANA"},{"ZONA":"Zona Centro","DEPARTAMENTO":"Antioquia","MUNICIPIO":"ENVIGADO"},{"ZONA":"Zona Centro","DEPARTAMENTO":"Antioquia","MUNICIPIO":"GIRARDOTA"},{"ZONA":"Zona Centro","DEPARTAMENTO":"Antioquia","MUNICIPIO":"GUARNE"},{"ZONA":"Zona Centro","DEPARTAMENTO":"Antioquia","MUNICIPIO":"ITAGUI"},{"ZONA":"Zona Centro","DEPARTAMENTO":"Antioquia","MUNICIPIO":"LA CEJA"},{"ZONA":"Zona Centro","DEPARTAMENTO":"Antioquia","MUNICIPIO":"LA ESTRELLA"},{"ZONA":"Zona Centro","DEPARTAMENTO":"Antioquia","MUNICIPIO":"MARINILLA"},{"ZONA":"Zona Centro","DEPARTAMENTO":"Antioquia","MUNICIPIO":"RETIRO"},{"ZONA":"Zona Centro","DEPARTAMENTO":"Santander","MUNICIPIO":"RIONEGRO"},{"ZONA":"Zona Centro","DEPARTAMENTO":"Antioquia","MUNICIPIO":"SABANETA"},{"ZONA":"Zona Centro","DEPARTAMENTO":"Antioquia","MUNICIPIO":"EL SANTUARIO"},{"ZONA":"Zona Centro","DEPARTAMENTO":"BogotÃ¡ D.C","MUNICIPIO":"BOGOTÃ"},{"ZONA":"Zona Centro","DEPARTAMENTO":"BoyacÃ¡","MUNICIPIO":"TUNJA"},{"ZONA":"Zona Centro","DEPARTAMENTO":"BoyacÃ¡","MUNICIPIO":"DUITAMA"},{"ZONA":"Zona Centro","DEPARTAMENTO":"BoyacÃ¡","MUNICIPIO":"PAIPA"},{"ZONA":"Zona Centro","DEPARTAMENTO":"BoyacÃ¡","MUNICIPIO":"SOGAMOSO"},{"ZONA":"Zona Centro","DEPARTAMENTO":"BoyacÃ¡","MUNICIPIO":"TIBASOSA"},{"ZONA":"Zona Centro","DEPARTAMENTO":"Caldas","MUNICIPIO":"MANIZALES"},{"ZONA":"Zona Centro","DEPARTAMENTO":"Caldas","MUNICIPIO":"VILLAMARÃA"},{"ZONA":"Zona Sur","DEPARTAMENTO":"Cauca","MUNICIPIO":"POPAYÃN"},{"ZONA":"Zona Sur","DEPARTAMENTO":"Cauca","MUNICIPIO":"CALOTO"},{"ZONA":"Zona Sur","DEPARTAMENTO":"Cauca","MUNICIPIO":"MIRANDA"},{"ZONA":"Zona Sur","DEPARTAMENTO":"Cauca","MUNICIPIO":"PUERTO TEJADA"},{"ZONA":"Zona Sur","DEPARTAMENTO":"Cauca","MUNICIPIO":"SANTANDER DE QUILICHAO"},{"ZONA":"Zona Sur","DEPARTAMENTO":"Cauca","MUNICIPIO":"VILLA RICA"},{"ZONA":"Zona Centro","DEPARTAMENTO":"Cundinamarca","MUNICIPIO":"CAJICÃ"},{"ZONA":"Zona Centro","DEPARTAMENTO":"Cundinamarca","MUNICIPIO":"CHÃA"},{"ZONA":"Zona Centro","DEPARTAMENTO":"Cundinamarca","MUNICIPIO":"COTA"},{"ZONA":"Zona Centro","DEPARTAMENTO":"Cundinamarca","MUNICIPIO":"FACATATIVÃ"},{"ZONA":"Zona Centro","DEPARTAMENTO":"Cundinamarca","MUNICIPIO":"FUNZA"},{"ZONA":"Zona Centro","DEPARTAMENTO":"Cundinamarca","MUNICIPIO":"GACHANCIPÃ"},{"ZONA":"Zona Centro","DEPARTAMENTO":"Cundinamarca","MUNICIPIO":"GIRARDOT"},{"ZONA":"Zona Centro","DEPARTAMENTO":"Cundinamarca","MUNICIPIO":"LA CALERA"},{"ZONA":"Zona Centro","DEPARTAMENTO":"Cundinamarca","MUNICIPIO":"MADRID"},{"ZONA":"Zona Centro","DEPARTAMENTO":"Cundinamarca","MUNICIPIO":"MOSQUERA"},{"ZONA":"Zona Centro","DEPARTAMENTO":"Cundinamarca","MUNICIPIO":"SIBATÃ‰"},{"ZONA":"Zona Centro","DEPARTAMENTO":"Cundinamarca","MUNICIPIO":"SOACHA"},{"ZONA":"Zona Centro","DEPARTAMENTO":"Cundinamarca","MUNICIPIO":"SOPÃ“"},{"ZONA":"Zona Centro","DEPARTAMENTO":"Cundinamarca","MUNICIPIO":"TABIO"},{"ZONA":"Zona Centro","DEPARTAMENTO":"Cundinamarca","MUNICIPIO":"TENJO"},{"ZONA":"Zona Centro","DEPARTAMENTO":"Cundinamarca","MUNICIPIO":"TOCANCIPÃ"},{"ZONA":"Zona Centro","DEPARTAMENTO":"Cundinamarca","MUNICIPIO":"ZIPAQUIRÃ"},{"ZONA":"Zona Centro","DEPARTAMENTO":"Huila","MUNICIPIO":"NEIVA"},{"ZONA":"Zona Centro","DEPARTAMENTO":"Meta","MUNICIPIO":"VILLAVICENCIO"},{"ZONA":"Zona Centro","DEPARTAMENTO":"Quindio","MUNICIPIO":"CALARCA"},{"ZONA":"Zona Centro","DEPARTAMENTO":"Quindio","MUNICIPIO":"CIRCASIA"},{"ZONA":"Zona Centro","DEPARTAMENTO":"Risaralda","MUNICIPIO":"PEREIRA"},{"ZONA":"Zona Centro","DEPARTAMENTO":"Risaralda","MUNICIPIO":"DOSQUEBRADAS"},{"ZONA":"Zona Centro","DEPARTAMENTO":"Risaralda","MUNICIPIO":"SANTA ROSA DE CABAL"},{"ZONA":"Zona Centro","DEPARTAMENTO":"Santander","MUNICIPIO":"BUCARAMANGA"},{"ZONA":"Zona Centro","DEPARTAMENTO":"Santander","MUNICIPIO":"FLORIDABLANCA"},{"ZONA":"Zona Centro","DEPARTAMENTO":"Santander","MUNICIPIO":"GIRÃ“N"},{"ZONA":"Zona Centro","DEPARTAMENTO":"Santander","MUNICIPIO":"LEBRÃJA"},{"ZONA":"Zona Centro","DEPARTAMENTO":"Santander","MUNICIPIO":"PIEDECUESTA"},{"ZONA":"Zona Centro","DEPARTAMENTO":"Tolima","MUNICIPIO":"IBAGUÃ‰"},{"ZONA":"Zona Centro","DEPARTAMENTO":"Tolima","MUNICIPIO":"ESPINAL"},{"ZONA":"Zona Centro","DEPARTAMENTO":"Tolima","MUNICIPIO":"FLANDES"},{"ZONA":"Zona Centro","DEPARTAMENTO":"Tolima","MUNICIPIO":"MELGAR"},{"ZONA":"Zona Centro","DEPARTAMENTO":"Valle del Cauca","MUNICIPIO":"CALI"},{"ZONA":"Zona Centro","DEPARTAMENTO":"Valle del Cauca","MUNICIPIO":"ANDALUCÃA"},{"ZONA":"Zona Centro","DEPARTAMENTO":"Valle del Cauca","MUNICIPIO":"GUADALAJARA DE BUGA"},{"ZONA":"Zona Centro","DEPARTAMENTO":"Valle del Cauca","MUNICIPIO":"BUGALAGRANDE"},{"ZONA":"Zona Centro","DEPARTAMENTO":"Valle del Cauca","MUNICIPIO":"CARTAGO"},{"ZONA":"Zona Centro","DEPARTAMENTO":"Valle del Cauca","MUNICIPIO":"EL CERRITO"},{"ZONA":"Zona Centro","DEPARTAMENTO":"Valle del Cauca","MUNICIPIO":"FLORIDA"},{"ZONA":"Zona Centro","DEPARTAMENTO":"Valle del Cauca","MUNICIPIO":"GINEBRA"},{"ZONA":"Zona Centro","DEPARTAMENTO":"Valle del Cauca","MUNICIPIO":"GUACARÃ"},{"ZONA":"Zona Centro","DEPARTAMENTO":"Valle del Cauca","MUNICIPIO":"JAMUNDÃ"},{"ZONA":"Zona Centro","DEPARTAMENTO":"Valle del Cauca","MUNICIPIO":"PALMIRA"},{"ZONA":"Zona Centro","DEPARTAMENTO":"Valle del Cauca","MUNICIPIO":"PRADERA"},{"ZONA":"Zona Centro","DEPARTAMENTO":"Valle del Cauca","MUNICIPIO":"TULUÃ"},{"ZONA":"Zona Centro","DEPARTAMENTO":"Valle del Cauca","MUNICIPIO":"VIJES"},{"ZONA":"Zona Centro","DEPARTAMENTO":"Valle del Cauca","MUNICIPIO":"YUMBO"}]';
      var cities = `[
        {
          "ZONA": "Zona Centro",
          "DEPARTAMENTO": "Antioquia",
          "MUNICIPIO": "MEDELLÍN"
        },  {
          "ZONA": "Zona Centro",
          "DEPARTAMENTO": "Antioquia",
          "MUNICIPIO": "MEDELLIN"
        },
        {
          "ZONA": "Zona Centro",
          "DEPARTAMENTO": "Santander",
          "MUNICIPIO": "BARBOSA"
        },
        {
          "ZONA": "Zona Centro",
          "DEPARTAMENTO": "Antioquia",
          "MUNICIPIO": "BARBOSA"
        },
        {
          "ZONA": "Zona Centro",
          "DEPARTAMENTO": "Antioquia",
          "MUNICIPIO": "BELLO"
        },
        {
          "ZONA": "Zona Centro",
          "DEPARTAMENTO": "Antioquia",
          "MUNICIPIO": "CALDAS"
        },
        {
          "ZONA": "Zona Centro",
          "DEPARTAMENTO": "Boyaca",
          "MUNICIPIO": "CALDAS"
        },
        {
          "ZONA": "Zona Centro",
          "DEPARTAMENTO": "Antioquia",
          "MUNICIPIO": "EL CARMEN DE VIBORAL"
        },
        {
          "ZONA": "Zona Centro",
          "DEPARTAMENTO": "Antioquia",
          "MUNICIPIO": "COPACABANA"
        },
        {
          "ZONA": "Zona Centro",
          "DEPARTAMENTO": "Antioquia",
          "MUNICIPIO": "ENVIGADO"
        },
        {
          "ZONA": "Zona Centro",
          "DEPARTAMENTO": "Antioquia",
          "MUNICIPIO": "GIRARDOTA"
        },
        {
          "ZONA": "Zona Centro",
          "DEPARTAMENTO": "Antioquia",
          "MUNICIPIO": "GUARNE"
        },
        {
          "ZONA": "Zona Centro",
          "DEPARTAMENTO": "Antioquia",
          "MUNICIPIO": "ITAGUI"
        },
        {
          "ZONA": "Zona Centro",
          "DEPARTAMENTO": "Antioquia",
          "MUNICIPIO": "LA CEJA"
        },
        {
          "ZONA": "Zona Centro",
          "DEPARTAMENTO": "Antioquia",
          "MUNICIPIO": "LA ESTRELLA"
        },
        {
          "ZONA": "Zona Centro",
          "DEPARTAMENTO": "Antioquia",
          "MUNICIPIO": "MARINILLA"
        },
        {
          "ZONA": "Zona Centro",
          "DEPARTAMENTO": "Antioquia",
          "MUNICIPIO": "RETIRO"
        },
        {
          "ZONA": "Zona Centro",
          "DEPARTAMENTO": "Santander",
          "MUNICIPIO": "RIONEGRO"
        },
        {
          "ZONA": "Zona Centro",
          "DEPARTAMENTO": "Antioquia",
          "MUNICIPIO": "SABANETA"
        },
        {
          "ZONA": "Zona Centro",
          "DEPARTAMENTO": "Antioquia",
          "MUNICIPIO": "EL SANTUARIO"
        },
        {
          "ZONA": "Zona Centro",
          "DEPARTAMENTO": "Bogota D.C",
          "MUNICIPIO": "BOGOTA"
        },
        {
          "ZONA": "Zona Centro",
          "DEPARTAMENTO": "Bogota D.C",
          "MUNICIPIO": "BOGOTÁ"
        },
        {
          "ZONA": "Zona Centro",
          "DEPARTAMENTO": "Boyaca",
          "MUNICIPIO": "TUNJA"
        },
        {
          "ZONA": "Zona Centro",
          "DEPARTAMENTO": "Boyaca",
          "MUNICIPIO": "DUITAMA"
        },
        {
          "ZONA": "Zona Centro",
          "DEPARTAMENTO": "Boyaca",
          "MUNICIPIO": "PAIPA"
        },
        {
          "ZONA": "Zona Centro",
          "DEPARTAMENTO": "Boyaca",
          "MUNICIPIO": "SOGAMOSO"
        },
        {
          "ZONA": "Zona Centro",
          "DEPARTAMENTO": "Boyaca",
          "MUNICIPIO": "TIBASOSA"
        },
        {
          "ZONA": "Zona Centro",
          "DEPARTAMENTO": "Caldas",
          "MUNICIPIO": "MANIZALES"
        },
        {
          "ZONA": "Zona Centro",
          "DEPARTAMENTO": "Caldas",
          "MUNICIPIO": "VILLAMARIA"
        },
        {
          "ZONA": "Zona Centro",
          "DEPARTAMENTO": "Caldas",
          "MUNICIPIO": "VILLAMARÍA"
        },
        {
          "ZONA": "Zona Sur",
          "DEPARTAMENTO": "Cauca",
          "MUNICIPIO": "POPAYAN"
        },
        {
          "ZONA": "Zona Sur",
          "DEPARTAMENTO": "Cauca",
          "MUNICIPIO": "POPAYÁN"
        },
        {
          "ZONA": "Zona Sur",
          "DEPARTAMENTO": "Cauca",
          "MUNICIPIO": "CALOTO"
        },
        {
          "ZONA": "Zona Sur",
          "DEPARTAMENTO": "Cauca",
          "MUNICIPIO": "MIRANDA"
        },
        {
          "ZONA": "Zona Sur",
          "DEPARTAMENTO": "Cauca",
          "MUNICIPIO": "PUERTO TEJADA"
        },
        {
          "ZONA": "Zona Sur",
          "DEPARTAMENTO": "Cauca",
          "MUNICIPIO": "SANTANDER DE QUILICHAO"
        },
        {
          "ZONA": "Zona Sur",
          "DEPARTAMENTO": "Cauca",
          "MUNICIPIO": "VILLA RICA"
        },
        {
          "ZONA": "Zona Centro",
          "DEPARTAMENTO": "Cundinamarca",
          "MUNICIPIO": "CAJICA"
        },
         {
          "ZONA": "Zona Centro",
          "DEPARTAMENTO": "Cundinamarca",
          "MUNICIPIO": "CAJICÁ"
        },
        {
          "ZONA": "Zona Centro",
          "DEPARTAMENTO": "Cundinamarca",
          "MUNICIPIO": "CHIA"
        },
         {
          "ZONA": "Zona Centro",
          "DEPARTAMENTO": "Cundinamarca",
          "MUNICIPIO": "CHÍA"
        },
        {
          "ZONA": "Zona Centro",
          "DEPARTAMENTO": "Cundinamarca",
          "MUNICIPIO": "COTA"
        },
        {
          "ZONA": "Zona Centro",
          "DEPARTAMENTO": "Cundinamarca",
          "MUNICIPIO": "FACATATIVÁ"
        },
         {
          "ZONA": "Zona Centro",
          "DEPARTAMENTO": "Cundinamarca",
          "MUNICIPIO": "FACATATIVA"
        },
        {
          "ZONA": "Zona Centro",
          "DEPARTAMENTO": "Cundinamarca",
          "MUNICIPIO": "FUNZA"
        },
        {
          "ZONA": "Zona Centro",
          "DEPARTAMENTO": "Cundinamarca",
          "MUNICIPIO": "GACHANCIPÁ"
        },
        {
          "ZONA": "Zona Centro",
          "DEPARTAMENTO": "Cundinamarca",
          "MUNICIPIO": "GACHANCIPA"
        },
        {
          "ZONA": "Zona Centro",
          "DEPARTAMENTO": "Cundinamarca",
          "MUNICIPIO": "GIRARDOT"
        },
        {
          "ZONA": "Zona Centro",
          "DEPARTAMENTO": "Cundinamarca",
          "MUNICIPIO": "LA CALERA"
        },
        {
          "ZONA": "Zona Centro",
          "DEPARTAMENTO": "Cundinamarca",
          "MUNICIPIO": "MADRID"
        },
        {
          "ZONA": "Zona Centro",
          "DEPARTAMENTO": "Cundinamarca",
          "MUNICIPIO": "MOSQUERA"
        },
        {
          "ZONA": "Zona Centro",
          "DEPARTAMENTO": "Cundinamarca",
          "MUNICIPIO": "SIBATÉ"
        },
          {
          "ZONA": "Zona Centro",
          "DEPARTAMENTO": "Cundinamarca",
          "MUNICIPIO": "SIBATE"
        },
        {
          "ZONA": "Zona Centro",
          "DEPARTAMENTO": "Cundinamarca",
          "MUNICIPIO": "SOACHA"
        },
        {
          "ZONA": "Zona Centro",
          "DEPARTAMENTO": "Cundinamarca",
          "MUNICIPIO": "SOPO"
        },
        {
          "ZONA": "Zona Centro",
          "DEPARTAMENTO": "Cundinamarca",
          "MUNICIPIO": "SOPÓ"
        },
        {
          "ZONA": "Zona Centro",
          "DEPARTAMENTO": "Cundinamarca",
          "MUNICIPIO": "TABIO"
        },
        {
          "ZONA": "Zona Centro",
          "DEPARTAMENTO": "Cundinamarca",
          "MUNICIPIO": "TENJO"
        },
        {
          "ZONA": "Zona Centro",
          "DEPARTAMENTO": "Cundinamarca",
          "MUNICIPIO": "TOCANCIPÁ"
        },
         {
          "ZONA": "Zona Centro",
          "DEPARTAMENTO": "Cundinamarca",
          "MUNICIPIO": "TOCANCIPA"
        },
        {
          "ZONA": "Zona Centro",
          "DEPARTAMENTO": "Cundinamarca",
          "MUNICIPIO": "ZIPAQUIRÁ"
        },
        {
          "ZONA": "Zona Centro",
          "DEPARTAMENTO": "Cundinamarca",
          "MUNICIPIO": "ZIPAQUIRA"
        },
        {
          "ZONA": "Zona Centro",
          "DEPARTAMENTO": "Huila",
          "MUNICIPIO": "NEIVA"
        },
        {
          "ZONA": "Zona Centro",
          "DEPARTAMENTO": "Meta",
          "MUNICIPIO": "VILLAVICENCIO"
        },
        {
          "ZONA": "Zona Centro",
          "DEPARTAMENTO": "Quindio",
          "MUNICIPIO": "CALARCA"
        },
        {
          "ZONA": "Zona Centro",
          "DEPARTAMENTO": "Quindio",
          "MUNICIPIO": "CIRCASIA"
        },
        {
          "ZONA": "Zona Centro",
          "DEPARTAMENTO": "Risaralda",
          "MUNICIPIO": "PEREIRA"
        },
        {
          "ZONA": "Zona Centro",
          "DEPARTAMENTO": "Risaralda",
          "MUNICIPIO": "DOSQUEBRADAS"
        },
        {
          "ZONA": "Zona Centro",
          "DEPARTAMENTO": "Risaralda",
          "MUNICIPIO": "SANTA ROSA DE CABAL"
        },
        {
          "ZONA": "Zona Centro",
          "DEPARTAMENTO": "Santander",
          "MUNICIPIO": "BUCARAMANGA"
        },
        {
          "ZONA": "Zona Centro",
          "DEPARTAMENTO": "Santander",
          "MUNICIPIO": "FLORIDABLANCA"
        },
        {
          "ZONA": "Zona Centro",
          "DEPARTAMENTO": "Santander",
          "MUNICIPIO": "GIRÓN"
        },
         {
          "ZONA": "Zona Centro",
          "DEPARTAMENTO": "Santander",
          "MUNICIPIO": "GIRON"
        },
        {
          "ZONA": "Zona Centro",
          "DEPARTAMENTO": "Santander",
          "MUNICIPIO": "LEBRIJA"
        },
          {
          "ZONA": "Zona Centro",
          "DEPARTAMENTO": "Santander",
          "MUNICIPIO": "LEBRÍJA"
        },
        {
          "ZONA": "Zona Centro",
          "DEPARTAMENTO": "Santander",
          "MUNICIPIO": "PIEDECUESTA"
        },
        {
          "ZONA": "Zona Centro",
          "DEPARTAMENTO": "Tolima",
          "MUNICIPIO": "IBAGUE"
        },
          {
          "ZONA": "Zona Centro",
          "DEPARTAMENTO": "Tolima",
          "MUNICIPIO": "IBAGUÉ"
        },
        {
          "ZONA": "Zona Centro",
          "DEPARTAMENTO": "Tolima",
          "MUNICIPIO": "ESPINAL"
        },
        {
          "ZONA": "Zona Centro",
          "DEPARTAMENTO": "Tolima",
          "MUNICIPIO": "FLANDES"
        },
        {
          "ZONA": "Zona Centro",
          "DEPARTAMENTO": "Tolima",
          "MUNICIPIO": "MELGAR"
        },
        {
          "ZONA": "Zona Centro",
          "DEPARTAMENTO": "Valle del Cauca",
          "MUNICIPIO": "CALI"
        },
        {
          "ZONA": "Zona Centro",
          "DEPARTAMENTO": "Valle del Cauca",
          "MUNICIPIO": "ANDALUCIA"
        },
          {
          "ZONA": "Zona Centro",
          "DEPARTAMENTO": "Valle del Cauca",
          "MUNICIPIO": "ANDALUCÍA"
        },
        {
          "ZONA": "Zona Centro",
          "DEPARTAMENTO": "Valle del Cauca",
          "MUNICIPIO": "GUADALAJARA DE BUGA"
        },
        {
          "ZONA": "Zona Centro",
          "DEPARTAMENTO": "Valle del Cauca",
          "MUNICIPIO": "BUGALAGRANDE"
        },
        {
          "ZONA": "Zona Centro",
          "DEPARTAMENTO": "Valle del Cauca",
          "MUNICIPIO": "CARTAGO"
        },
        {
          "ZONA": "Zona Centro",
          "DEPARTAMENTO": "Valle del Cauca",
          "MUNICIPIO": "EL CERRITO"
        },
        {
          "ZONA": "Zona Centro",
          "DEPARTAMENTO": "Valle del Cauca",
          "MUNICIPIO": "FLORIDA"
        },
        {
          "ZONA": "Zona Centro",
          "DEPARTAMENTO": "Valle del Cauca",
          "MUNICIPIO": "GINEBRA"
        },
        {
          "ZONA": "Zona Centro",
          "DEPARTAMENTO": "Valle del Cauca",
          "MUNICIPIO": "GUACARI"
        },
          {
          "ZONA": "Zona Centro",
          "DEPARTAMENTO": "Valle del Cauca",
          "MUNICIPIO": "GUACARÍ"
        },
        {
          "ZONA": "Zona Centro",
          "DEPARTAMENTO": "Valle del Cauca",
          "MUNICIPIO": "JAMUNDÍ"
        },
          {
          "ZONA": "Zona Centro",
          "DEPARTAMENTO": "Valle del Cauca",
          "MUNICIPIO": "JAMUNDI"
        },
        {
          "ZONA": "Zona Centro",
          "DEPARTAMENTO": "Valle del Cauca",
          "MUNICIPIO": "PALMIRA"
        },
        {
          "ZONA": "Zona Centro",
          "DEPARTAMENTO": "Valle del Cauca",
          "MUNICIPIO": "PRADERA"
        },
        {
          "ZONA": "Zona Centro",
          "DEPARTAMENTO": "Valle del Cauca",
          "MUNICIPIO": "TULUÁ"
        },
          {
          "ZONA": "Zona Centro",
          "DEPARTAMENTO": "Valle del Cauca",
          "MUNICIPIO": "TULUA"
        },
        {
          "ZONA": "Zona Centro",
          "DEPARTAMENTO": "Valle del Cauca",
          "MUNICIPIO": "VIJES"
        },
        {
          "ZONA": "Zona Centro",
          "DEPARTAMENTO": "Valle del Cauca",
          "MUNICIPIO": "YUMBO"
        }
      ]`;
      return cities;
    }

    setTimeout(function(){
        var today = new Date(); /* Fecha del Ordenador */
        var weekday = new Array('Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'); /* Array Dias de la Semana */
        var dayOfWeek = weekday[today.getDay()]; /* Obtiene el dia actual */
        var today_num = today.getDate(); /* Toma el dia del mes*/
        

        var set_day = " hoy " + dayOfWeek + " <span>" + today_num + "</span> " + " de Diciembre"; /* Crea frase con el dia del mes y el dia de la semana*/

        $(".current-day").html(set_day);

        $('.city-search-field').keyup(function(){ // Campo de texto para poner el dia
            var searchField = $(this).val(); // Limpia Caracteres Especiales
            var regex = new RegExp(searchField, "i");
            var output = '';
            var count = 0;
            var available = false;
            var dontship = 0;
            var cities_special = (getCitiesShip());
            var cities_ship = JSON.parse(getAllCitiesShip());
            var answer_class= "";
            var legal_answer = "";
            $('.search-answer').removeClass("animated wobble red").removeClass("animated bounce green");

            $(cities_ship).each(function(){
                ///Check avaibility
                if (cities_special.search(regex) != -1){ // Si existe 
                  available = true;
                }
                
                if(searchField !="" && searchField.length > 3){ // Si la palabra (Ya limpia) es diferente a vacio y tiene mas de 3 letras
                    console.log(this.MUNICIPIO.search(regex));
                    if (this.MUNICIPIO.search(regex) != -1 && available) {
                      count++;
                      if(count == 1 && today_num <= 18  ){
                        output = 'SI';
                        answer_class= "animated bounce green";
                        legal_answer = "Tu pedido podra ser entregado inclusive el 24 de diciembre*";
                      }else if(count == 1 && today_num > 18 ){
                        output = 'NO';
                        answer_class= "animated wobble red";
                        legal_answer = "Tu pedido podra ser entregado a partir del 26 de diciembre*";
                      }
                    }else if(this.MUNICIPIO.search(regex) != -1 && !available){
                      count++;
                      if(count == 1 && today_num > 16 ){
                        output = 'NO';
                        answer_class= "animated wobble red";
                        legal_answer = "Tu pedido podra ser entregado a partir del 26 de diciembre*";
                      }else if(today_num <= 16){
                        output = 'SI';
                        answer_class= "animated bounce green";
                        legal_answer = "Tu pedido podra ser entregado inclusive el 24 de diciembre*";
                      }
                    }else if(this.MUNICIPIO.search(regex) == -1 && !available){
                      dontship++;
                    }

                    if(dontship > 0 && count == 0){
                      output = 'NO DISP.';
                      answer_class = "animated wobble";
                      legal_answer = "Tu pedido podra ser entregado a partir del 26 de diciembre*";
                    }
                }
            });
            $('.search-answer').html(output);
            $('.legal-answer').html(legal_answer);
            $('.search-answer').addClass(answer_class);
        });
    }, 500);

    //Script to calc Days and shippoing for Christmas
});






   function areac(){
   var ladoc = document.getElementById("ladoCuadrado").value;
   var area = ladoc*ladoc;

   console.log (area);

    Swal.fire({
        title: 'RESULTADO',
        text: "El area del cuadrado es "+area,
        icon: 'success',
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Comprendo'
    })


   } 




   function areaci(){
   var radiocir = document.getElementById("radioCir").value;
   var areacir = Math.PI*radiocir*radiocir;

   console.log (radiocir);

    Swal.fire({
        title: 'RESULTADO',
        text: "El area del circulo es "+areacir,
        icon: 'success',
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Comprendo'
    })


   } 



   function areatri(){
   var basetri = document.getElementById("basetri").value;
   var alturatri = document.getElementById("alturatri").value;

   var areatri = basetri*alturatri/2;

   console.log (areatri);

    Swal.fire({
        title: 'RESULTADO',
        text: "El area del triangulo es "+areatri,
        icon: 'success',
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Comprendo'
    })


   } 

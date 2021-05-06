x = $(document);
x.ready(inicializarEventos);

function inicializarEventos() {
    var x = $("#boton");
    x.click(llenarTabla);
    x = $("td");
    x.hover(entraMouse,saleMouse)
}
function llenarTabla() {
    var x;
    x = $("#fila1 td").eq(0).html("<p>Texto de prueba 1</p>").css("font-size","2em");
    x = $("#fila1 td").eq(1).html("<p>Texto de prueba 2</p>").css("font-size","1.8em");
    x = $("#fila2 td").eq(0).html("<p>Texto de prueba 3</p>").css("font-size","1.4em");
    x = $("#fila2 td").eq(1).html("<p>Texto de prueba 4</p>").css("font-size","2.5em");
}

function entraMouse(){
    var x = $("td").css({"background-color":"#a00000", "color":"#f3ff51"});
}

function saleMouse(){
    var x = $("#fila2 td").css({"background-color":"white", "color":"black"});
}
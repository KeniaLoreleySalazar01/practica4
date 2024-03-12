let menu, bebida;
menu = prompt("Tacos don eladio menu de tacos; cerdo, trompo, bistec, arrachera, tripa")
switch (menu){
    case 'chicharon':
        bebida = "¿refresco?";
        break;
    case 'trompo':
        bebida = "¿una bien muerta ?";
        break;
    case 'bistec':
       bebida = "¿ Coca Cola?";
        break;
    case 'arrachera':
        bebida = "¿Una sanfria?";
        break;
    case 'tripa':
        bebida = "¿Agua?";
    break;
    default:
        bebida = "Segur@ que no quieres comida, ok esta bien";
    }
alert(bebida);
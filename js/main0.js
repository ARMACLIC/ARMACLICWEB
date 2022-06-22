/*Programacion de JavaScript*/

switch (new Date().getDay()) {
	case 0:
		function ventanaSecundaria (URL){ 
			window.open(URL,"ventana1","width=120,height=300,scrollbars=NO") 
		 } 
		 
		 ventanaSecundaria("http://www.desarrolloweb.com"); 
		 
		break;
	case 1:
		day = "Monday";
		break;
	case 2:
		day = "Tuesday";
		break;
	case 3:
		day = "Wednesday";
		break;
	case 4:
		day = "Thursday";
		break;
	case 5:
		day = "Friday";
		break;
	case 6:
		day = "Saturday";
	}

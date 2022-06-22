		

    var armaclicDelDía

    if (confirm("¿Querés ver el Armaclic del día?") == true) {
         armaclicDelDía = armaclicDelDia(day)
    } else {}
        
    function armaclicDelDia(){
		function getDayString(num)
		{
		var day;
		switch(num)
		{
		case 0:
		function ventanaSecundaria (URL){ 
		   tab.open(URL,"ventana1","width=120,height=300,scrollbars=NO") 
		} 
		ventanaSecundaria("file:///C:/Users/12345/Desktop/ARMACLIC%20WEB/index1.html"); 
		break;
		case 1:
		function ventanaSecundaria (URL){ 
		   tab.open(URL,"ventana1","width=550,height=600,scrollbars=NO") 
		} 
		ventanaSecundaria("file:///C:/Users/12345/Desktop/ARMACLIC%20WEB/index2.html");
		break;
		case 2:
		day="Tuesday";
		break;
		case 3:
		day="Wednesday";
		break;
		case 4:
		day="Thursday";
		break;
		case 5:
		day="Friday";
		break;
		case 6:
		day="Saturday";
		break;
		default:
		day="Invalid day";
		}
		return day;
		}
		
		theDate = new Date();
		
		document.write("Today is ",getDayString(theDate.getDay()));
    } 
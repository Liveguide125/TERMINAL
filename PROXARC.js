function PROXARC()
{
	window.alert("welcome to the archive (click enter)")
	
	var prompt = window.prompt("Please enter a proxy name (CURRENT PROXYS: INS, VEL.) ENTER IN A PROXY INTL EXACT SPELLING!!")
	
	if(prompt === "INS")
	{
		var INS = window.prompt("Current INS proxies: 1.grayware.onreder.com  (ENTER A NUMBER OF A PROXY YOU WANT)")
		
		if(INS === "1")
		{
			window.alert("opening grayware")
			window.open("https://grayware.onrender.com/")
		}
	}
	
	if(prompt === "VEL")
	{
		var VEL = window.prompt("Current VEL proxies: 1.liveware.onrender.com (ENTER A NUMBER OF THE PROXY YOU WANT)")
		
		if(VEL === "1")
		{
			window.alert("opening liveware")
			window.open"https://liveware.onrender.com/"
		}
	}
	
	
}
function starost(){
    var godini=Number(document.getElementById("buttontext").value);
    if (godini>18)
    alert("Vie imate "+godini+ " godini.Toa ve pravi polnoletni. \n");
    else if ((godini<18)&&(godini>0))
    alert("Vie imate "+godini+ " godini.Toa ve pravi maloletni. \n");
    else
    alert("VNESOVTE NESOODVETEN PODATOK PROBAJTE POVTORNO");
    }
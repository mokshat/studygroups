function create()
{
  var schools = document.getElementById("schools").value;

switch(schools)
        {
        case "du":
            var div = document.getElementById("test");
            div.innerHTML = "<a href = /home/mokshat/Documents/Coding/WebDev/DuyHoang.html>Duy Hoang</a><br><a href = /home/mokshat/Documents/Coding/WebDev/AmyEng.html>Amy Eng</a><br><a href = /home/mokshat/Documents/Coding/WebDev/Moks.html>Mokshat Sood</a>";
                break;
        case "swat":        
            var div = document.getElementById("test");
            div.innerHTML = "<a href = /home/mokshat/Documents/Coding/WebDev/KieranHoang.html>Kieran Hoang</a><br><a href = /home/mokshat/Documents/Coding/WebDev/Zach.html>Zachary Matuson</a>";
                break;    
            case "su":
            var div = document.getElementById("test");
            div.innerHTML = "<a href = /home/mokshat/Documents/Coding/WebDev/Jacob.html>Jacob Williamson</a><br><a href = /home/mokshat/Documents/Coding/WebDev/Zach.html>Zachary Webber</a>";
            }
}
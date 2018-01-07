function create()
{
    var schools = document.getElementById("schools").value;
    
    switch(schools)
    {
        case "du":
            var div = document.getElementById("test");
            div.innerHTML = "<a href = /Users/Camryn/Documents/StudyGroups/studygroups-master/DuyHoang.html>Duy Hoang</a><br><a href = /Users/Camryn/Documents/StudyGroups/studygroups-master/AmyEng.html>Amy Eng</a><br><a href = /Users/Camryn/Documents/StudyGroups/studygroups-master/Moks.html>Mokshat Sood</a>";
            break;
        case "swat":
            var div = document.getElementById("test");
            div.innerHTML = "<a href = /Users/Camryn/Documents/StudyGroups/studygroups-master/KieranHoang.html>Kieran Hoang</a><br><a href = /Users/Camryn/Documents/StudyGroups/studygroups-master/Zach.html>Zachary Matuson</a>";
            break;
        case "su":
            var div = document.getElementById("test");
            div.innerHTML = "</Users/Camryn/Documents/StudyGroups/studygroups-master/Jacob.html>Jacob Williamson</a><br><a href = /Users/Camryn/Documents/StudyGroups/studygroups-master/Zach.html>Zachary Webber</a>";
        case "upenn":
            var div = document.getElementById("test");
            div.innerHTML = "<h2><a href = moks.html>Mokshat Sood</a></h2>  <h2><a href = zach.html>Zachary Matuson</a></h2>";
            break;
            
    }
}

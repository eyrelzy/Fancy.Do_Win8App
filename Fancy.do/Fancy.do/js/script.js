var storage = window.localStorage;
//storage.clear();
function addGTD() {
    var userGTDkey = "GTD";
    var jsonGTDstr;
    var flag = 0;
    var jsonAll;
    var nextno;
    for (var i = 0; i < storage.length; i++)
    {
        if (storage.key(i) == userGTDkey) {
            jsonGTDstr = storage.getItem(storage.key(i));
            flag = 1;
            break;
        }
    }
    if (flag == 0) {
        //Gtd is null,start to creat new Gtd
        var json0 = '[]';
        jsonAll = eval('(' + json0 + ')');
        nextno = 0;
    }
    else
    {
        jsonAll = JSON.parse(jsonGTDstr);
        if (jsonAll.length == 0) {
            nextno = 0;
        }
        else {
            nextno = jsonAll[jsonAll.length - 1].GTDno + 1;//function random()
        }
        
    }
    var dp = document.getElementById("magdate").winControl;
    var date = dp.current;
    var datestring = date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear();

    var tp = document.getElementById("magtime").winControl;
    var time = tp.current;
    var timestring = time.getHours() + ":" + time.getMinutes();

    //var rp = $("#maglevelin").winConrol;
    var rp = document.getElementById("maglevelin").winControl;
    var lev = rp.userRating;
    if ($('#magnamein').val().trim() != "")
    {
        var jsonGTD =
        {
            "GTDno": nextno,
            "GTDdes": $('#magnamein').val().trim(),
            "GTDremark": $("#magremin").html(),
            "GTDloc": $('#maglocin').val(),
            "GTDlevel": String(lev),
            "GTDfile": $('#magfilein').val(),
            "GTDdate": datestring,
            "GTDtime": timestring,
            "GTDimg": $('#magimgin').val(),
        }
        jsonAll.push(jsonGTD);
        var jsonAllToStr = JSON.stringify(jsonAll);
        storage.setItem(userGTDkey, jsonAllToStr);
        //var s = jsonGTD.GTDdate+" "+jsonGTD.GTDtime +":00";
        var s = datestring + " " + timestring + ":00";
        var duetime = new Date(Date.parse(s));
        var now = new Date();
        if (duetime - now <= 0) {
        }
        else {
            showtoast(jsonGTD.GTDdes, jsonGTD.GTDimg, s);
        }
    }
    else
    {
        //null
        var messageDialog = new Windows.UI.Popups.MessageDialog("Gtd name couldn't be empty!");
        messageDialog.showAsync();
    }
    
}
function delStyle(delStyleno) {
    var delkey;
    var userStylekey = "Style";
    var jsonStylestr;
    var flag = 0;
    var jsonAll;
    for (var i = 0; i < storage.length; i++) {
        if (storage.key(i) == userStylekey) {
            jsonStylestr = storage.getItem(storage.key(i));
            flag = 1;
            break;
        }
    }
    if (flag == 0) {
        //error
    }
    else {
        jsonAll = JSON.parse(jsonStylestr);
    }
    for (var key in jsonAll) {
        var value = jsonAll[key];
        if (value.sno == delStyleno) {
            delkey = key;
            break;
        }
    }
    jsonAll.splice(delkey, 1);
    //结果写回文件
    var jsonAllToStr = JSON.stringify(jsonAll);
    storage.setItem(userStylekey, jsonAllToStr);
}

function delGTD(delGTDno) {
    var delkey;
    //var userGTDkey = $('#username').val() + "GTD";//consider get from where login?
    var userGTDkey ="GTD";
    var jsonGTDstr;
    var flag = 0;
    var jsonAll;
    for (var i = 0; i < storage.length; i++) {
        if (storage.key(i) == userGTDkey) {
            jsonGTDstr = storage.getItem(storage.key(i));
            flag = 1;
            break;
        }
    }
    if (flag == 0) {
        //error
    }
    else {
        jsonAll = JSON.parse(jsonGTDstr);
    }

    for(var key in jsonAll)
    {
        var value = jsonAll[key];
        if(value.GTDno==delGTDno){
            delkey = key;
            break;
        }
    }
    jsonAll.splice(delkey, 1);
    //结果写回文件
    var jsonAllToStr = JSON.stringify(jsonAll);
    storage.setItem(userGTDkey, jsonAllToStr);
}
function addCustomerStyle() {
    //var userStylekey = $('#username').val() + "Style";//consider get from where login?
    if ($('#adsnamein').val().trim() != "") {
        var userStylekey = "Style";
        var jsonStylestr;
        var flag = 0;
        var ff=0;
        var jsonAll;
        var nextno;
        for (var i = 0; i < storage.length; i++) {
            if (storage.key(i) == userStylekey) {
                jsonStylestr = storage.getItem(storage.key(i));
                flag = 1;
                break;
            }
        }
        if (flag == 0) {
            //error user has and loadsysstyle
            jsonAll = loadSystemStyle();
        }
        else {
            jsonAll = JSON.parse(jsonStylestr);

        }
        if (jsonAll.length == 0) nextno = 0;
        else
        {
            var nextno = jsonAll[jsonAll.length - 1].sno + 1;//function random()
        }
        for (var key in jsonAll)
        {
            var value = jsonAll[key];
            if(value.sname==$('#adsnamein').val().trim())
            {
                //exist style
                ff=1;
            }
        }
        if(ff==1){
            var messageDialog = new Windows.UI.Popups.MessageDialog("The Stylename exists! ");
            messageDialog.showAsync();
        }
        else{
            var jsonStyle =
           {
               "sno": nextno,
               "sname": $('#adsnamein').val().trim(),
               "sdes": $('#adsnamein').val(),
               "simg": $('#adsimgin').val(),
               }
        jsonAll.push(jsonStyle);
        var jsonAllToStr = JSON.stringify(jsonAll);
        storage.setItem(userStylekey, jsonAllToStr);
        }
        
    }
    else
    {
        var messageDialog = new Windows.UI.Popups.MessageDialog("The Stylename is empty ");
        messageDialog.showAsync();
    }

}
function loadSystemStyle() {
    var json0 = '[]';
    var jsonAll = eval('(' + json0 + ')');
    var jsonstyle0 = {
        "sno": 0,
        "sname": "eat",
        "sdes": "have a meal and take a rest",
        "simg": "./images/meal.png",
    };
    var jsonstyle1={
                    "sno": 1,
                    "sname": "task work",
                    "sdes": "do a task with all your effort",
                    "simg": "./img/homework.png",
                };
    jsonAll.push(jsonstyle0);
    jsonAll.push(jsonstyle1);
    var jsonAllToStr = JSON.stringify(jsonAll);
    //var userStylekey = $('#username').val() + "Style";
    var userStylekey = "Style";
    storage.setItem(userStylekey, jsonAllToStr);
    return jsonAll;
}
function displayAllStyle()
{
    //var userStylekey = $('#username').val() + "Style";//consider get from where login?
    var userStylekey = "Style";
    var jsonStylestr;
    var flag = 0;
    var jsonAll;
    for (var i = 0; i < storage.length; i++) {
        if (storage.key(i) == userStylekey) {
            jsonStylestr = storage.getItem(storage.key(i));
            flag = 1;
            break;
        }
    }
    if (flag == 0) {
        //error user has and loadsysstyle
        jsonAll = loadSystemStyle();
    }
    else {
        jsonAll = JSON.parse(jsonStylestr);
    }
    return jsonAll;
}
function loadSystemLoc()
{
    var json0 = '[]';
    var jsonAll = eval('(' + json0 + ')');
    var jsonloc0 = {
        "lno": 0,
        "locname": "home",
    };
    var jsonloc1 = {
        "lno": 1,
        "locname": "workplace",
    };
    jsonAll.push(jsonloc0);
    jsonAll.push(jsonloc1);
    var jsonAllToStr = JSON.stringify(jsonAll);
    //var userLockey = $('#username').val() + "Loc";
    var userLockey = "Loc";
    storage.setItem(userLockey, jsonAllToStr);
    return jsonAllToStr;
}
function addCustomerLoc()
{
    //var userLockey = $('#username').val() + "Loc";
    var userLockey = "Loc";
    var jsonAll = JSON.parse(getLoc());
    //deal with same name
    var flag = 0;
    for (var key in jsonAll) {
        var value = jsonAll[key];
        if (value.locname == $('#addlocin').val().trim())
        {
            flag = 1;
            break;
        }
    }
    if (flag == 0) {
        if ($('#addlocin').val().trim() != "")
        {
            var nextno = jsonAll[jsonAll.length - 1].lno + 1;//function random()   
            var jsonLoc =
               {
                   "lno": nextno,
                   "locname": $('#addlocin').val().trim(),
               }
            jsonAll.push(jsonLoc);
            var jsonAllToStr = JSON.stringify(jsonAll);
            storage.setItem(userLockey, jsonAllToStr);
        }
        else
        {
            var messageDialog = new Windows.UI.Popups.MessageDialog("The Locationname is empty ");
            messageDialog.showAsync();
        }
       
    }
    else {
        //same file
        var messageDialog = new Windows.UI.Popups.MessageDialog("The Location exists!");
        messageDialog.showAsync();
    }
    
}
function displayAllLoc()
{
    var jsonAll = JSON.parse(getLoc());
    //$('#disLoc').val(jsonAll[1].lname);
    return jsonAll;
}
function getLoc()
{
    var userLockey = "Loc";//consider get from where login?
    //var userLockey = "abc" + "Loc";
    var flag = 0;
    var jsonLocstr;
    for (var i = 0; i < storage.length; i++) {
        if (storage.key(i) == userLockey) {
            jsonLocstr = storage.getItem(storage.key(i));
            flag = 1;
            break;
        }
    }
    if (flag == 0) {
        jsonLocstr=loadSystemLoc();
    }
    else {
    }
    return jsonLocstr;
}
function getFile()
{
    var userFilekey ="File";//consider get from where login?
    //var userFilekey = "abc" + "File";
    var jsonFilestr;
    var flag = 0;
    for (var i = 0; i < storage.length; i++) {
        if (storage.key(i) == userFilekey) {
            jsonFilestr = storage.getItem(storage.key(i));
            flag = 1;
            break;
        }
    }
    if (flag == 0) {
        jsonFilestr = loadSystemFile();
    }
    return jsonFilestr;
}
function loadSystemFile() {
    var json0 = '[]';
    var jsonAll = eval('(' + json0 + ')');
    var jsonfile0 = {
        "fno": 0,
        "filename": "self",
    };
    var jsonfile1 = {
        "fno": 1,
        "filename": "work",
    };
    jsonAll.push(jsonfile0);
    jsonAll.push(jsonfile1);
    var jsonAllToStr = JSON.stringify(jsonAll);
    storage.setItem( "File", jsonAllToStr);
    return jsonAllToStr;
    //storage.setItem("abc" + "File", jsonAllToStr);
}
function addCustomerFile() {
    var userFilekey = "File";
    //var userFilekey = "abc" + "File";
    var jsonAll = JSON.parse(getFile());
    //deal with same name
    var flag = 0;
    for (var key in jsonAll) {
        var value = jsonAll[key];
        if (value.filename == $('#addfilein').val().trim()) {
            flag = 1;
            break;
        }
    }
    if (flag == 0) {
        if ($('#addfilein').val().trim()!="") {
            var nextno = jsonAll[jsonAll.length - 1].fno + 1;//function random()
        var jsonFile =
           {
               "fno": nextno,
               "filename": $('#addfilein').val().trim(),
           }
        jsonAll.push(jsonFile);
        var jsonAllToStr = JSON.stringify(jsonAll);
        storage.setItem(userFilekey, jsonAllToStr);
        }
        else{
                var messageDialog = new Windows.UI.Popups.MessageDialog("The filename is empty!");
                messageDialog.showAsync();
        }
        
    }
    else {
        //same file
        var messageDialog = new Windows.UI.Popups.MessageDialog("The file exists!");
        messageDialog.showAsync();
    }

}
function displayAllFile() {
    var jsonAll = JSON.parse(getFile());
    //$('#disFile').val(jsonAll[1].filename);
    return jsonAll;
}
function displaylocGTD(locname)
{
    //var userGTDkey = $('#username').val() + "GTD";//consider get from where login?
    var userGTDkey = "GTD";
    var jsonGTDstr;
    var flag = 0;
    var jsonAll;
    var json0 = '[]';
    var jsonlocAll = eval('(' + json0 + ')');
    for (var i = 0; i < storage.length; i++) {
        if (storage.key(i) == userGTDkey) {
            jsonGTDstr = storage.getItem(storage.key(i));
            flag = 1;
            break;
        }
    }
    if (flag == 0) return [{ "GTDno": -1, "GTDdes": "", "GTDremark": "", "GTDloc": "", "GTDlevel": "6", "GTDfile": "", "GTDdate": "", "GTDtime": "", "GTDimg": "" }];
    flag = 0;
    jsonAll = JSON.parse(jsonGTDstr);
    //display json in detail
    for (var key in jsonAll) {
        var value = jsonAll[key];
        if(value.GTDloc==locname)
        {
            jsonlocAll.push(value);
            flag = 1;
        }
    }
    if (flag == 0) {
        return [{ "GTDno": "-1", "GTDdes": "", "GTDremark": "", "GTDloc": "", "GTDlevel": "6", "GTDfile": "", "GTDdate": "", "GTDtime": "", "GTDimg": "" }];

    }
    return jsonlocAll;
}
function displayfileGTD(filename) {
    //var userGTDkey = $('#username').val() + "GTD";//consider get from where login?
    var userGTDkey = "GTD";//consider get from where login?
    var jsonGTDstr;
    var jsonAll;
    var flag = 0;
    for (var i = 0; i < storage.length; i++) {
        if (storage.key(i) == userGTDkey) {
            jsonGTDstr = storage.getItem(storage.key(i));
            flag = 1;
            break;
        }
    }
    if (flag == 0) return [{ "GTDno": -1, "GTDdes": "", "GTDremark": "", "GTDloc": "", "GTDlevel": "6", "GTDfile": "", "GTDdate": "", "GTDtime": "", "GTDimg": "" }];
    flag = 0;
    jsonAll = JSON.parse(jsonGTDstr);
    var json0 = '[]';
    var jsonfileAll = eval('(' + json0 + ')');
    //display json in detail
    for (var key in jsonAll) {
        var value = jsonAll[key];
        if (value.GTDfile == filename) {
            jsonfileAll.push(value);
            flag = 1;
        }
    }
    if (flag == 0) return [{ "GTDno": "-1", "GTDdes": "", "GTDremark": "", "GTDloc": "", "GTDlevel": "6", "GTDfile": "", "GTDdate": "", "GTDtime": "", "GTDimg": "" }];
    return jsonfileAll;
}
function showtodayGTD()
{
    //var userGTDkey = $('#username').val() + "GTD";//consider get from where login?
    var userGTDkey = "GTD";
    var jsonGTDstr;
    var jsonAll;
    var flag = 0;
    for (var i = 0; i < storage.length; i++) {
        if (storage.key(i) == userGTDkey) {
            jsonGTDstr = storage.getItem(storage.key(i));
            flag = 1;
            break;
        }
    }
    if (flag == 0) return [{ "GTDno": -1, "GTDdes": "", "GTDremark": "", "GTDloc": "", "GTDlevel": "6", "GTDfile": "", "GTDdate": "", "GTDtime": "", "GTDimg": "" }];
    flag = 0;
    jsonAll = JSON.parse(jsonGTDstr);
    var json0 = '[]';
    var jsontodayAll = eval('(' + json0 + ')');
    //display json in detail
    for (var key in jsonAll) {
        var value = jsonAll[key];
        var timeArray = new Array;
        timeArray = dealtimestr(value.GTDdate,value.GTDtime);
        var month = parseInt(timeArray[0]);
        var day = parseInt(timeArray[1]);
        var year = parseInt(timeArray[2]);
        var now = new Date();
        //current time to match
        var yy = now.getFullYear();       //年
        var mon = now.getMonth() + 1;     //月
        var dd = now.getDate();            //日
        //hour and minute undone!
        var hh = now.getHours();            //时
        var mm = now.getMinutes();          //分
        if (day == dd && year == yy && month == mon) {
            jsontodayAll.push(value);
            flag = 1;
        }
    }
    if (flag == 0) return [{ "GTDno": -1, "GTDdes": "", "GTDremark": "", "GTDloc": "", "GTDlevel": "6", "GTDfile": "", "GTDdate": "", "GTDtime": "", "GTDimg": "" }];
    return jsontodayAll;
}
function showtomrrowGTD(){
    //var userGTDkey = $('#username').val() + "GTD";//consider get from where login?
    var userGTDkey = "GTD";
    var jsonGTDstr;
    var jsonAll;
    var flag = 0;
    for (var i = 0; i < storage.length; i++) {
        if (storage.key(i) == userGTDkey) {
            jsonGTDstr = storage.getItem(storage.key(i));
            flag = 1;
            break;
        }
    }
    if (flag == 0) return [{ "GTDno": -1, "GTDdes": "", "GTDremark": "", "GTDloc": "", "GTDlevel": "6", "GTDfile": "", "GTDdate": "", "GTDtime": "", "GTDimg": "" }];
    flag = 0;
    jsonAll = JSON.parse(jsonGTDstr);
    var json0 = '[]';
    var jsontomorrowAll = eval('(' + json0 + ')');
    //display json in detail
    for (var key in jsonAll) {
        var value = jsonAll[key];
        var timeArray = new Array;
        timeArray = dealtimestr(value.GTDdate,value.GTDtime);
        var month = parseInt(timeArray[0]);
        var day = parseInt(timeArray[1]);
        var year = parseInt(timeArray[2]);
        var now = new Date();
        //current time to match
        var yy = now.getFullYear();       //年
        var mon = now.getMonth() + 1;     //月
        var dd = now.getDate();            //日
        var hh = now.getHours();            //时
        var mm = now.getMinutes();          //分
         if (day == (dd + 1) && year == yy && month == mon) {
             jsontomorrowAll.push(value);
             flag = 1;
        }
    }
    if (flag == 0) return [{ "GTDno": "-1", "GTDdes": "", "GTDremark": "", "GTDloc": "", "GTDlevel": "6", "GTDfile": "", "GTDdate": "", "GTDtime": "", "GTDimg": "" }];
    return jsontomorrowAll;
}
function showfutureGTD()
{
    var userGTDkey = "GTD";
    var jsonGTDstr;
    var jsonAll;
    var flag = 0;
    for (var i = 0; i < storage.length; i++) {
        if (storage.key(i) == userGTDkey) {
            jsonGTDstr = storage.getItem(storage.key(i));
            flag = 1;
            break;
        }
    }
    if (flag == 0) return [{ "GTDno": -1, "GTDdes": "", "GTDremark": "", "GTDloc": "", "GTDlevel": "6", "GTDfile": "", "GTDdate": "", "GTDtime": "", "GTDimg": "" }];
    flag = 0;
    jsonAll = JSON.parse(jsonGTDstr);
    var json0 = '[]';
    var jsonfutureAll = eval('(' + json0 + ')');
    //display json in detail
    for (var key in jsonAll) {
        var value = jsonAll[key];
        var timeArray = new Array;
        timeArray = dealtimestr(value.GTDdate,value.GTDtime);
        var month = parseInt(timeArray[0]);
        var day = parseInt(timeArray[1]);
        var year = parseInt(timeArray[2]);
        var now = new Date();
        //current time to match
        var yy = now.getFullYear();       //年
        var mon = now.getMonth() + 1;     //月
        var dd = now.getDate();            //日
        var hh = now.getHours();            //时
        var mm = now.getMinutes();          //分
        if ((day > dd && month == mon && year == yy) || ((month > mon) && (year == yy)) || (year > yy)) {
            jsonfutureAll.push(value);
            flag = 1;
        }
    }
    if (flag == 0) return [{ "GTDno": "-1", "GTDdes": "", "GTDremark": "", "GTDloc": "", "GTDlevel": "6", "GTDfile": "", "GTDdate": "", "GTDtime": "", "GTDimg": "" }];
    return jsonfutureAll;
}
function showhistoryGTD()
{
    //var userGTDkey = $('#username').val() + "GTD";//consider get from where login?
    var userGTDkey = "GTD";
    var jsonGTDstr;
    var jsonAll;
    var flag = 0;
    for (var i = 0; i < storage.length; i++) {
        if (storage.key(i) == userGTDkey) {
            jsonGTDstr = storage.getItem(storage.key(i));
            flag = 1;
            break;
        }
    }
    if (flag == 0) return [{ "GTDno": -1, "GTDdes": "", "GTDremark": "", "GTDloc": "", "GTDlevel": "6", "GTDfile": "", "GTDdate": "", "GTDtime": "", "GTDimg": "" }];
    flag = 0;
    jsonAll = JSON.parse(jsonGTDstr);
    var json0 = '[]';
    var jsonhistoryAll = eval('(' + json0 + ')');
    //display json in detail
    for (var key in jsonAll) {
        var value = jsonAll[key];
        var timeArray = new Array;
        timeArray = dealtimestr(value.GTDdate,value.GTDtime);
        var month = parseInt(timeArray[0]);
        var day = parseInt(timeArray[1]);
        var year = parseInt(timeArray[2]);
        var now = new Date();
        //current time to match
        var yy = now.getFullYear();       //年
        var mon = now.getMonth() + 1;     //月
        var dd = now.getDate();            //日
        var hh = now.getHours();            //时
        var mm = now.getMinutes();          //分
        if (((day <= (dd - 1)) && year == yy && month == mon) || (month < mon) && (year == yy) || (year < yy)) {
            jsonhistoryAll.push(value);
            flag = 1;
        }
    }
    if (flag == 0) return [{ "GTDno": "-1", "GTDdes": "", "GTDremark": "", "GTDloc": "", "GTDlevel": "6", "GTDfile": "", "GTDdate": "", "GTDtime": "", "GTDimg": "" }];

    return jsonhistoryAll;
}
function dealtimestr(date,time)
{
   // var date = "9/20/2013";
    var ch = new Array;
    var ta=new Array;
    ta=time.split(":");
    ch = date.split("/");
    //for (var i = 0; i < ch.length; i++) {
    //    document.write(ch[i], "<br>");
    //}
    ch.push(ta[0]);
    ch.push(ta[1]);
    return ch;
}
function editGTD(GTDno, a) {
    var date;
    var time;
    var name;
    var ram;
    var lev;
    var img;
    var loc;
    var file;
    if (a == 1) {
        date="disgdate";
        time="disgtime";
        name="#disgnamein";
        ram = "#disgramin";
        lev="disglevelin";
        img = "#disgimgin";
        loc = "#disglocin";
        file="#disgfilein";
    }
    else if (a == 2) {
        date = "disgdate1";
        time = "disgtime1";
        name = "#disgnamein1";
        ram = "#disgramin1";
        lev = "disglevelin1";
        img = "#disgimgin1";
        loc = "#disglocin1";
        file = "#disgfilein1";
    }
    else
    {
        date = "disgdate2";
        time = "disgtime2";
        name = "#disgnamein2";
        ram = "#disgramin2";
        lev = "disglevelin2";
        img = "#disgimgin2";
        loc = "#disglocin2";
        file = "#disgfilein2";
    }
    var userGTDkey = "GTD";
    var jsonGTDstr;
    var flag = 0;
    var jsonAll;
    var nextno;
    for (var i = 0; i < storage.length; i++) {
        if (storage.key(i) == userGTDkey) {
            jsonGTDstr = storage.getItem(storage.key(i));
            flag = 1;
            break;
        }
    }
    if (flag == 0) {
        //Gtd is null,start to creat new Gtd
        var json0 = '[]';
        jsonAll = eval('(' + json0 + ')');
        nextno = 0;
    }
    else {
        jsonAll = JSON.parse(jsonGTDstr);
        if (jsonAll.length == 0) {
            nextno = 0;
        }
        else {
            nextno = jsonAll[jsonAll.length - 1].GTDno + 1;//function random()
        }

    }
    var dp = document.getElementById(date).winControl;
    var date = dp.current;
    var datestring = date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear();

    var tp = document.getElementById(time).winControl;
    var time = tp.current;
    var timestring = time.getHours() + ":" + time.getMinutes();

    //var rp = $("#maglevelin").winConrol;
    var rp = document.getElementById(lev).winControl;
    var lev = rp.userRating;
    if ($(name).val().trim() != "") {
        var jsonGTD =
       {
           "GTDno": GTDno,
           "GTDdes": $(name).val().trim(),
           "GTDremark": $(ram).html(),
           "GTDloc": $(loc).val(),
           "GTDlevel": String(lev),
           "GTDfile": $(file).val(),
           "GTDdate": datestring,
           "GTDtime": timestring,
           "GTDimg": $(img).val(),
       }
        jsonAll.push(jsonGTD);
        var jsonAllToStr = JSON.stringify(jsonAll);
        storage.setItem(userGTDkey, jsonAllToStr);
        //var s = jsonGTD.GTDdate+" "+jsonGTD.GTDtime +":00";
        var s = datestring + " " + timestring + ":00";
        var duetime = new Date(Date.parse(s));
        var now = new Date();
        if (duetime - now <= 0) {
        }
        else {
            showtoast(jsonGTD.GTDdes, jsonGTD.GTDimg, s);
        }
    }
    else
    {
        var messageDialog = new Windows.UI.Popups.MessageDialog("Gtd name couldn't be empty!");
        messageDialog.showAsync();
    }
   
}


function showtoast(text, src, duetime) {
    // var s = "7/2/2013 10:55:00";
    var d = new Date(Date.parse(duetime));

    var Notifications = Windows.UI.Notifications;
    var dueTime = new Date(d);
    var idNumber = Math.floor(Math.random() * 100000000);  // Generates a unique ID number for the notification.

    // Set up the notification text.
    var toastXml = Notifications.ToastNotificationManager.getTemplateContent(Notifications.ToastTemplateType.toastImageAndText02);
    var strings = toastXml.getElementsByTagName("text");
    strings[0].appendChild(toastXml.createTextNode(text));

    strings[1].appendChild(toastXml.createTextNode("Received: " + dueTime.toLocaleTimeString()));
    var toastImageElements = toastXml.getElementsByTagName("image");
    toastImageElements[0].setAttribute("src", "ms-appx:///" + src);
    toastImageElements[0].setAttribute("alt", "red graphic");

    var toastNode = toastXml.selectSingleNode("/toast");
    toastNode.setAttribute("duration", "long"); var audio = toastXml.createElement("audio");
    audio.setAttribute("src", "ms-winsoundevent:Notification.Looping.Alarm");
    audio.setAttribute("loop", "true");

    toastXml.selectSingleNode("/toast").appendChild(audio);
    // Create the toast notification object.
    var toast = new Notifications.ScheduledToastNotification(toastXml, dueTime);
    toast.id = "Toast" + idNumber;

    // Add to the schedule.
    Notifications.ToastNotificationManager.createToastNotifier().addToSchedule(toast);

}




function updateDynamicMetro() {
    Windows.UI.Notifications.TileUpdateManager.createTileUpdaterForApplication().clear();
    var info = showtodayGTD();
    Windows.UI.Notifications.TileUpdateManager.createTileUpdaterForApplication().enableNotificationQueue(true);
    var Notifications = Windows.UI.Notifications;
    var tileXml = Notifications.TileUpdateManager.getTemplateContent(Notifications.TileTemplateType.tileWideSmallImageAndText01);
    var tileTextAttributes = tileXml.getElementsByTagName("text");
    var tileImageAttributes = tileXml.getElementsByTagName("image");
    if (info[0].GTDno == -1) {
        updateDynamicMetroNum(0);
        return;
    }
    if (info.length == 0) {
        //updateDynamicMetroNum(0);
        //tileTextAttributes[0].innerText = info[i].GTDdes;
        tileImageAttributes[0].setAttribute("src", "./img/finalsmall");
        var tileNotification = new Notifications.TileNotification(tileXml);
        Windows.UI.Notifications.TileUpdateManager.createTileUpdaterForApplication().update(tileNotification);
        return;
    }

    for (var i = 0; i < info.length; i++) {
        //tileTextAttributes[0].appendChild(tileXml.createTextNode(info[i].text));
        tileTextAttributes[0].innerText = info[i].GTDdes;
        tileImageAttributes[0].setAttribute("src", info[i].GTDimg);

        var tileNotification = new Notifications.TileNotification(tileXml);
        Windows.UI.Notifications.TileUpdateManager.createTileUpdaterForApplication().update(tileNotification);
    }
    updateDynamicMetroNum(info.length);
    
}

function updateDynamicMetroNum(num)
{
    var badge = NotificationsExtensions.BadgeContent.BadgeNumericNotificationContent(num);
    var tileNotification = badge.createNotification();
    Windows.UI.Notifications.BadgeUpdateManager.createBadgeUpdaterForApplication().update(tileNotification);
}
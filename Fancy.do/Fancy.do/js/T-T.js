//定义一些会被改变的变量适用于各个地方的改变
var style;
var loc;
var file;
var dis;
var enterdisg;
var lv5="#ff2f28";
var lv4="#ff289e";
var lv3="#ffe93f";
var lv2 = "#1fa000";
var lv1 = "#00a3c1";
var lv6 = "#ffffff";
//读取并显示出事件（可编辑012）
function readGTDjson(a) {
    WinJS.UI.processAll();
    $("#disgdele").attr("title",a.GTDno);
    $("#disgnamein").attr("value", a.GTDdes);
    $("#disgimgdis").attr("src", a.GTDimg);
    $("#disgremin").html(a.GTDremark);
    var dp = document.getElementById("disgdate").winControl;
    //dp.current = new Date(a.GTDdate);
    dp.current = a.GTDdate;
    var tp = document.getElementById("disgtime").winControl;
    var st = "January 20,2013 " + a.GTDtime + ":5"
    tp.current = new Date(st);
    var rp = document.getElementById("disglevelin").winControl;
    rp.userRating = a.GTDlevel;
    var loc = a.GTDloc;
    var title = document.getElementById('disglocin');
    for (var i = 0; i < title.options.length; i++) {
        if (title.options[i].innerHTML == loc) {
            title.options[i].selected = true;
            break;
        }
    }
    var file = a.GTDfile;
    title = document.getElementById('disgfilein');
    for (var i = 0; i < title.options.length; i++) {
        if (title.options[i].innerHTML == file) {
            title.options[i].selected = true;
            break;
        }
    }
    var img = a.GTDimg;
    title = document.getElementById('disgimgin');
    for (var i = 0; i < title.options.length; i++) {
        if (title.options[i].value == img) {
            title.options[i].selected = true;
            break;
        }
    }

}

function readGTDjson1(a) {
    WinJS.UI.processAll();
    $("#disgdele1").attr("title", a.GTDno);
    $("#disgnamein1").attr("value", a.GTDdes);
    $("#disgimgdis1").attr("src", a.GTDimg);
    $("#disgremin1").html(a.GTDremark);
    var dp = document.getElementById("disgdate1").winControl;
    //dp.current = new Date(a.GTDdate);
    dp.current = a.GTDdate;
    var tp = document.getElementById("disgtime1").winControl;
    var st = "January 20,2013 " + a.GTDtime + ":5"
    tp.current = new Date(st);
    var rp = document.getElementById("disglevelin1").winControl;
    rp.userRating = a.GTDlevel;
    var loc = a.GTDloc;
    var title = document.getElementById('disglocin1');
    for (var i = 0; i < title.options.length; i++) {
        if (title.options[i].innerHTML == loc) {
            title.options[i].selected = true;
            break;
        }
    }
    var file = a.GTDfile;
    title = document.getElementById('disgfilein1');
    for (var i = 0; i < title.options.length; i++) {
        if (title.options[i].innerHTML == file) {
            title.options[i].selected = true;
            break;
        }
    }
    var img = a.GTDimg;
    title = document.getElementById('disgimgin1');
    for (var i = 0; i < title.options.length; i++) {
        if (title.options[i].value == img) {
            title.options[i].selected = true;
            break;
        }
    }

}

function readGTDjson2(a) {
    WinJS.UI.processAll();
    $("#disgdele2").attr("title", a.GTDno);
    $("#disgnamein2").attr("value", a.GTDdes);
    $("#disgimgdis2").attr("src", a.GTDimg);
    $("#disgremin2").html(a.GTDremark);
    var dp = document.getElementById("disgdate2").winControl;
    //dp.current = new Date(a.GTDdate);
    dp.current = a.GTDdate;
    var tp = document.getElementById("disgtime2").winControl;
    var st = "January 20,2013 " + a.GTDtime + ":5"
    tp.current = new Date(st);
    var rp = document.getElementById("disglevelin2").winControl;
    rp.userRating = a.GTDlevel;
    var loc = a.GTDloc;
    var title = document.getElementById('disglocin2');
    for (var i = 0; i < title.options.length; i++) {
        if (title.options[i].innerHTML == loc) {
            title.options[i].selected = true;
            break;
        }
    }
    var file = a.GTDfile;
    title = document.getElementById('disgfilein2');
    for (var i = 0; i < title.options.length; i++) {
        if (title.options[i].innerHTML == file) {
            title.options[i].selected = true;
            break;
        }
    }
    var img = a.GTDimg;
    title = document.getElementById('disgimgin2');
    for (var i = 0; i < title.options.length; i++) {
        if (title.options[i].value == img) {
            title.options[i].selected = true;
            break;
        }
    }

}
//addGTD页面刷新
function addGTDready() {
    style = displayAllStyle();
    var page = 0;//已经显示过的数目
    for (var i = 0; i < 8; i++) {
        var agb = "#agb" + i;
        if (page >= style.length) {
            //page = 0;
            //$(agb).html(style[page].sname);
            $(agb).attr("title", page);
            $(agb).html(" ");
            //$(agb).hide();
        }
        else {
            //$(agb).show();
            $(agb).html(style[page].sname);
            $(agb).attr("title", page);
        }
        page++;
    }
    //if (page >= style.length) page = 0;
    $("#addGTD").hammer().on("swiperight", function (ev) {
        if (page >= style.length) page = 0;
        for (var i = 0; i < 8; i++) {
            var agb = "#agb" + i;
            if (page >= style.length) {
                //page = 0;
                //$(agb).html(style[page].sname);
                $(agb).attr("title", page);
                $(agb).html(" ");
            }
            else {
                $(agb).html(style[page].sname);
                $(agb).attr("title", page);
            }
            page++;
        }
        
        $(".block").css({
            "animation": "blockturning 1.5s",
        });
        setTimeout(function () {
            $(".block").css({
                "animation": "none 0.1s",
            });
        }, 1500);
        ev.gesture.preventDefault();
        ev.stopPropagation();
    });
    $("#addGTD").hammer().on("swipeleft", function (ev) {
        //if (page != 0) {
        for (var i = 0; i < 16; i++) {
            page--;
            if (page < 0) {
                //page = style.length - 1;
                page = style.length + 8 - style.length % 8 - 1;
            }
        }
        //}
        if (page >= style.length) page = 0;
        for (var i = 0; i < 8; i++) {
            var agb = "#agb" + i;
            if (page >= style.length) {
                //page = 0;
                //$(agb).html(style[page].sname);
                $(agb).attr("title", page);
                $(agb).html(" ");
            }
            else {
                $(agb).html(style[page].sname);
                $(agb).attr("title", page);
            }
            page++;
        }
        //if (page >= style.length) page = 0;
        $(".block").css({
            "animation": "blockturning 1.5s",
        });
        setTimeout(function () {
            $(".block").css({
                "animation": "none 0.1s",
            });
        }, 1500);
        ev.gesture.preventDefault();
        ev.stopPropagation();
    });
    $(".addnew").click(function () {
        $("#addGTD").hide();
        $("#manageGTD").fadeIn();
        
    });
    $(".block").click(function () {
        $("#addGTD").hide();
        $("#manageGTD").fadeIn();
        var i = $(this).attr("title");
        if (i>=style.length) {
            $("#magnamein").val("");
        }
        else {
            $("#magnamein").val(style[i].sname);
            var img = style[i].simg;
            document.getElementById('magimgdis').src = img;
        }
        var title = document.getElementById('magimgin');
        for (var i = 0; i < title.options.length; i++) {
            if (title.options[i].value == img) {
                title.options[i].selected = true;
                break;
            }
        }
    });

}
//deletestyle页面刷新
function deletestyleready() {
    $(".delebutton").unbind("click");
    style = displayAllStyle();
    $("#delestyle").html("");
    for (var i = 0; i < style.length; i++) {
        var n = style[i].sname;
        var img = style[i].simg;
        $("#delestyle").append("</div>");
        $("#delestyle").append("</div>");
        $("#delestyle").append("<div class='delebutton' id=" + style[i].sno + ">DELETE");
        $("#delestyle").append("<img src=" + img + " class='deleimg'/>");
        $("#delestyle").append("<div class='delediv' title=" + i + ">" + n);
    }
    $("#delestyle").hammer().on("swipedown", function (ev) {
        $("#addstyle").slideDown();
        $("#delestyle").slideUp();
        ev.gesture.preventDefault();
        ev.stopPropagation();
    });
    $(".delediv").hammer().on("swipeleft", function (ev) {
        var but = style[$(this).attr("title")].sno;
        var i = $("#" + but).css("width");
        if ($("#" + but).css("width") == "0px") $("#" + but).animate({ width: '30%' });;
        ev.gesture.preventDefault();
        ev.stopPropagation();
    });
    $(".delediv").hammer().on("swiperight", function (ev) {
        var but = style[$(this).attr("title")].sno;
        if ($("#" + but).css("width") != "0px") $("#" + but).animate({ width: '0%' });

        ev.gesture.preventDefault();
        ev.stopPropagation();
    });
    $(".delebutton").click(function () {
        var but = $(this).attr("id");
        delStyle(but);
        $("#" + but).animate({ width: '0%' });
        addGTDready();
        deletestyleready();
        //$("#delestyle").slideUp();
    });
}
//locview页面刷新
function locviewready() {
    updateDynamicMetro();
    ///初始化地点展示窗
    loc = displayAllLoc();
    var page = 0;//展示地点用的计数变量
    for (var i = 0; i < 6; i++) {
        var lvb = "#lvb" + i;
        if (page >= loc.length) {
            //page = 0;
            //$(lvb).html(loc[page].locname);
            $(lvb).html(" ");
            $(lvb).attr("title", page);
        }
        else {
            $(lvb).html(loc[page].locname);
            $(lvb).attr("title", page);
        }
        page++;
    }
    //定义展示事件用的变量
    var disp = 0;

    $("#locview").hammer().on("swipeup", function (ev) {
        $("#locview").slideUp();
        $("#addloc").slideDown();
        ev.gesture.preventDefault();
        ev.stopPropagation();
    });
    $("#locview").hammer().on("swiperight", function (ev) {
        if (page >= loc.length) page = 0;
        for (var i = 0; i < 6; i++) {
            var lvb = "#lvb" + i;
            if (page >= loc.length) {
                //page = 0;
                //$(lvb).html(loc[page].locname);
                $(lvb).html("");
                $(lvb).attr("title", page);
            }
            else {
                $(lvb).html(loc[page].locname);
                $(lvb).attr("title", page);
            }
            page++;
        }
        $(".lvb").css({
            "animation": "blockturning 1.5s",
        });
        setTimeout(function () {
            $(".lvb").css({
                "animation": "none 0.1s",
            });
        }, 1500);
        ev.gesture.preventDefault();
        ev.stopPropagation();
    });
    $("#locview").hammer().on("swipeleft", function (ev) {
        for (var i = 0; i < 12; i++) {
            page--;
            if (page < 0) page = loc.length + 6 - loc.length % 6 - 1;//page = loc.length - 1;
        }
        if (page >= style.length) page = 0;
        for (var i = 0; i < 6; i++) {
            var lvb = "#lvb" + i;
            if (page >= loc.length) {
                //page = 0;
                //$(lvb).html(loc[page].locname);
                $(lvb).html("");
                $(lvb).attr("title", page);
            }
            else {
                $(lvb).html(loc[page].locname);
                $(lvb).attr("title", page);
            }
            page++;
        }
        $(".lvb").css({
            "animation": "blockturning 1.5s",
        });
        setTimeout(function () {
            $(".lvb").css({
                "animation": "none 0.1s",
            });
        }, 1500);
        ev.gesture.preventDefault();
        ev.stopPropagation();
    });
    $(".lvb").click(function () {
        var i = $(this).attr("title");
        if (i >= loc.length) {

        }
        else {
            //根据选择初始化展示事件的变量
            var name = loc[$(this).attr("title")].locname;
            dis = displaylocGTD(loc[$(this).attr("title")].locname);
            dispage = 0;
            WinJS.UI.processAll();
            //初始化展示
            for (var i = 0; i < 6; i++) {
                var lvd = "#lvd" + i;
                if (dispage >= dis.length) {
                    $(lvd).html("");
                    $(lvd).css("background-color", lv6);
                    $(lvd).attr("title", dispage);
                }
                else {
                    $(lvd).html(dis[dispage].GTDdes);
                    $(lvd).append("<br />");
                    $(lvd).append(dis[dispage].GTDdate);
                    $(lvb).append("  ");
                    $(lvd).append(dis[dispage].GTDtime);
                    $(lvd).append("<br />");
                    switch (dis[dispage].GTDlevel) {
                        case '6':
                            $(lvd).css("background-color", lv6)
                            $(lvd).css("color", "#000000")
                            break;
                        case '5':
                            $(lvd).css("background-color", lv5)
                            $(lvd).css("color", "#000000")
                            break;
                        case '4':
                            $(lvd).css("background-color", lv4)
                            $(lvd).css("color", "#000000")
                            break;
                        case '3':
                            $(lvd).css("background-color", lv3)
                            $(lvd).css("color", "#000000")
                            break;
                        case '2':
                            $(lvd).css("background-color", lv2)
                            $(lvd).css("color", "#000000")
                            break;
                        case '1':
                            $(lvd).css("background-color", lv1)
                            $(lvd).css("color", "#000000")
                            break;
                        case '0':
                            $(lvd).css("background-color", lv1)
                            $(lvd).css("color", "#000000")
                            break;

                    }
                    $(lvd).attr("title", dispage);
                }
                dispage++;
            }
            $("#lvdishead").html(loc[$(this).attr("title")].locname);
            $("#locview").hide();
            $("#lvdis").fadeIn();
        }
       
    });
    $("#lvdis").hammer().on("swiperight", function (ev) {
        if (dispage >= dis.length) dispage = 0;
        for (var i = 0; i < 6; i++) {
            var lvd = "#lvd" + i;
            
            if (dispage >= dis.length) {
                $(lvd).html("");
                $(lvd).css("background-color", lv6);
                $(lvd).attr("title", dispage);
            }
            else {
                $(lvd).html(dis[dispage].GTDdes);
                $(lvd).append("<br />");
                $(lvd).append(dis[dispage].GTDdate);
                $(lvb).append("  ");
                $(lvd).append(dis[dispage].GTDtime);
                $(lvd).append("<br />");
                switch (dis[dispage].GTDlevel) {
                    case '6':
                        $(lvd).css("background-color", lv6)
                        $(lvd).css("color", "#000000")
                        break;
                    case '5':
                        $(lvd).css("background-color", lv5)
                        $(lvd).css("color", "#000000")
                        break;
                    case '4':
                        $(lvd).css("background-color", lv4)
                        $(lvd).css("color", "#000000")
                        break;
                    case '3':
                        $(lvd).css("background-color", lv3)
                        $(lvd).css("color", "#000000")
                        break;
                    case '2':
                        $(lvd).css("background-color", lv2)
                        $(lvd).css("color", "#000000")
                        break;
                    case '1':
                        $(lvd).css("background-color", lv1)
                        $(lvd).css("color", "#000000")
                        break;
                    case '0':
                        $(lvd).css("background-color", lv1)
                        $(lvd).css("color", "#000000")
                        break;

                }
                $(lvd).attr("title", dispage);
            }
            dispage++;
        }
        $(".lvd").css({
            "animation": "blockturning 1.5s",
        });
        setTimeout(function () {
            $(".lvd").css({
                "animation": "none 0.1s",
            });
        }, 1500);
        ev.gesture.preventDefault();
        ev.stopPropagation();
    });
    $("#lvdis").hammer().on("swipeleft", function (ev) {
        for (var i = 0; i < 12; i++) {
            dispage--;
            if (dispage < 0) dispage = dis.length + 6 - dis.length % 6 - 1;
        }
        if (dispage >= dis.length) dispage = 0;
        for (var i = 0; i < 6; i++) {
            var lvd = "#lvd" + i;
            if (dispage >= dis.length) {
                $(lvd).html("");
                $(lvd).css("background-color", lv6);
                $(lvd).attr("title", dispage);
            }
            else {
                $(lvd).html(dis[dispage].GTDdes);
                $(lvd).append("<br />");
                $(lvd).append(dis[dispage].GTDdate);
                $(lvb).append("  ");
                $(lvd).append(dis[dispage].GTDtime);
                $(lvd).append("<br />");
                switch (dis[dispage].GTDlevel) {
                    case '6':
                        $(lvd).css("background-color", lv6)
                        $(lvd).css("color", "#000000")
                        break;
                    case '5':
                        $(lvd).css("background-color", lv5)
                        $(lvd).css("color", "#000000")
                        break;
                    case '4':
                        $(lvd).css("background-color", lv4)
                        $(lvd).css("color", "#000000")
                        break;
                    case '3':
                        $(lvd).css("background-color", lv3)
                        $(lvd).css("color", "#000000")
                        break;
                    case '2':
                        $(lvd).css("background-color", lv2)
                        $(lvd).css("color", "#000000")
                        break;
                    case '1':
                        $(lvd).css("background-color", lv1)
                        $(lvd).css("color", "#000000")
                        break;
                    case '0':
                        $(lvd).css("background-color", lv1)
                        $(lvd).css("color", "#000000")
                        break;

                }
                $(lvd).attr("title", dispage);
            }
            dispage++;
        }
        $(".lvd").css({
            "animation": "blockturning 1.5s",
        });
        setTimeout(function () {
            $(".lvd").css({
                "animation": "none 0.1s",
            });
        }, 1500);
        ev.gesture.preventDefault();
        ev.stopPropagation();
    });
    $("#lvdishead").click(function () {
        $("#lvdis").hide();
        $("#locview").fadeIn();
        
    });
    $(".lvd").click(function () {
        if ($(this).attr("title") >= dis.length||dis[$(this).attr("title")].GTDno == -1) {

        }
        else {
            readGTDjson1(dis[$(this).attr("title")]);
            enterdig = "#locview";
            $("#lvdis").hide();
            $("#disGTD1").show();
        }

    });
}
//fileview页面刷新
function fileviewready() {
    //展示文件夹的变量以及初始化
    file = displayAllFile();
    var page = 0;
    for (var i = 0; i < 6; i++) {
        var fvb = "#fvb" + i;
        if (page >= file.length) {
            //page = 0;
            //$(fvb).html(file[page].filename);
            $(fvb).html("");
            $(fvb).attr("title", page);

        }
        else {
            $(fvb).html(file[page].filename);
            $(fvb).attr("title", page);
        }
        page++;
    }
    //定义展示事件用的变量
    var disp = 0;


    $("#fileview").hammer().on("swipeup", function (ev) {
        $("#fileview").slideUp();
        $("#addfile").slideDown();
        ev.gesture.preventDefault();
        ev.stopPropagation();
    });
    $("#fileview").hammer().on("swiperight", function (ev) {
        if (page >= file.length) page = 0;
        for (var i = 0; i < 6; i++) {
            var fvb = "#fvb" + i;
            if (page >= file.length) {
                //page = 0;
                //$(fvb).html(file[page].filename);
                $(fvb).html("");
                $(fvb).attr("title", page);

            }
            else {
                $(fvb).html(file[page].filename);
                $(fvb).attr("title", page);
            }
            page++;
        }
        $(".fvb").css({
            "animation": "blockturning 1.5s",
        });
        setTimeout(function () {
            $(".fvb").css({
                "animation": "none 0.1s",
            });
        }, 1500);
        ev.gesture.preventDefault();
        ev.stopPropagation();
    });
    $("#fileview").hammer().on("swipeleft", function (ev) {
        for (var i = 0; i < 12; i++) {
            page--;
            if (page < 0) page = file.length + 6 - file.length % 6 - 1;
        }
        if (page >= file.length) page = 0;
        for (var i = 0; i < 6; i++) {
            var fvb = "#fvb" + i;
            if (page >= file.length) {
                //page = 0;
                //$(fvb).html(file[page].filename);
                $(fvb).html("");
                $(fvb).attr("title", page);

            }
            else {
                $(fvb).html(file[page].filename);
                $(fvb).attr("title", page);
            }
            page++;
        }
        $(".fvb").css({
            "animation": "blockturning 1.5s",
        });
        setTimeout(function () {
            $(".fvb").css({
                "animation": "none 0.1s",
            });
        }, 1500);
        ev.gesture.preventDefault();
        ev.stopPropagation();
    });

    $(".fvb").click(function () {
        //根据选择初始化展示事件的变量
        var i = $(this).attr("title");
        if (i >= file.length) {

        }
        else {
            dis = displayfileGTD(file[$(this).attr("title")].filename);
            dispage = 0;
            WinJS.UI.processAll();
            //初始化展示
            for (var i = 0; i < 6; i++) {
                var fvd = "#fvd" + i;
                if (dispage >= dis.length) {
                    $(fvd).html("");
                    $(fvd).css("background-color", lv6);
                    $(fvd).attr("title", dispage);
                }
                else {
                    $(fvd).html(dis[dispage].GTDdes);
                    $(fvd).append("<br />");
                    $(fvd).append(dis[dispage].GTDdate);
                    $(fvb).append("  ");
                    $(fvd).append(dis[dispage].GTDtime);
                    $(fvd).append("<br />");
                    switch (dis[dispage].GTDlevel) {
                        case '6':
                            $(fvd).css("background-color", lv6)
                            $(fvd).css("color", "#000000")
                            break;
                        case '5':
                            $(fvd).css("background-color", lv5)
                            $(fvd).css("color", "#000000")
                            break;
                        case '4':
                            $(fvd).css("background-color", lv4)
                            $(fvd).css("color", "#000000")
                            break;
                        case '3':
                            $(fvd).css("background-color", lv3)
                            $(fvd).css("color", "#000000")
                            break;
                        case '2':
                            $(fvd).css("background-color", lv2)
                            $(fvd).css("color", "#000000")
                            break;
                        case '1':
                            $(fvd).css("background-color", lv1)
                            $(fvd).css("color", "#000000")
                            break;
                        case '0':
                            $(fvd).css("background-color", lv1)
                            $(fvd).css("color", "#000000")
                            break;

                    }
                    $(fvd).attr("title", dispage);
                }
                dispage++;
            }
            $("#fvdishead").html(file[$(this).attr("title")].filename);
            $("#fileview").hide();
            $("#fvdis").fadeIn();
        }
        
    });
    $("#fvdis").hammer().on("swiperight", function (ev) {
        if (dispage >= dis.length) dispage = 0;
        for (var i = 0; i < 6; i++) {
            var fvd = "#fvd" + i;
            if (dispage >= dis.length) {
                $(fvd).css("background-color", lv6);
                $(fvd).html("");
                $(fvd).attr("title", dispage);
            }
            else {
                $(fvd).html(dis[dispage].GTDdes);
                $(fvd).append("<br />");
                $(fvd).append(dis[dispage].GTDdate);
                $(fvb).append("  ");
                $(fvd).append(dis[dispage].GTDtime);
                $(fvd).append("<br />");
                switch (dis[dispage].GTDlevel) {
                    case '6':
                        $(fvd).css("background-color", lv6)
                        $(fvd).css("color", "#000000")
                        break;
                    case '5':
                        $(fvd).css("background-color", lv5)
                        $(fvd).css("color", "#000000")
                        break;
                    case '4':
                        $(fvd).css("background-color", lv4)
                        $(fvd).css("color", "#000000")
                        break;
                    case '3':
                        $(fvd).css("background-color", lv3)
                        $(fvd).css("color", "#000000")
                        break;
                    case '2':
                        $(fvd).css("background-color", lv2)
                        $(fvd).css("color", "#000000")
                        break;
                    case '1':
                        $(fvd).css("background-color", lv1)
                        $(fvd).css("color", "#000000")
                        break;
                    case '0':
                        $(fvd).css("background-color", lv1)
                        $(fvd).css("color", "#000000")
                        break;

                }
                $(fvd).attr("title", dispage);
            }
            dispage++;
        }
        $(".fvd").css({
            "animation": "blockturning 1.5s",
        });
        setTimeout(function () {
            $(".fvd").css({
                "animation": "none 0.1s",
            });
        }, 1500);
        ev.gesture.preventDefault();
        ev.stopPropagation();
    });
    $("#fvdis").hammer().on("swipeleft", function (ev) {
        for (var i = 0; i < 12; i++) {
            dispage--;
            if (dispage < 0) dispage = dis.length + 6 - dis.length % 6 - 1;
        }
        if (dispage >= dis.length) dispage = 0;
        for (var i = 0; i < 6; i++) {
            var fvd = "#fvd" + i;
            if (dispage >= dis.length) {
                $(fvd).css("background-color", lv6);
                $(fvd).html("");
                $(fvd).attr("title", dispage);
            }
            else {
                $(fvd).html(dis[dispage].GTDdes);
                $(fvd).append("<br />");
                $(fvd).append(dis[dispage].GTDdate);
                $(fvb).append("  ");
                $(fvd).append(dis[dispage].GTDtime);
                $(fvd).append("<br />");
                switch (dis[dispage].GTDlevel) {
                    case '6':
                        $(fvd).css("background-color", lv6)
                        $(fvd).css("color", "#000000")
                        break;
                    case '5':
                        $(fvd).css("background-color", lv5)
                        $(fvd).css("color", "#000000")
                        break;
                    case '4':
                        $(fvd).css("background-color", lv4)
                        $(fvd).css("color", "#000000")
                        break;
                    case '3':
                        $(fvd).css("background-color", lv3)
                        $(fvd).css("color", "#000000")
                        break;
                    case '2':
                        $(fvd).css("background-color", lv2)
                        $(fvd).css("color", "#000000")
                        break;
                    case '1':
                        $(fvd).css("background-color", lv1)
                        $(fvd).css("color", "#000000")
                        break;
                    case '0':
                        $(fvd).css("background-color", lv1)
                        $(fvd).css("color", "#000000")
                        break;

                }
                $(fvd).attr("title", dispage);
            }
            dispage++;
        }
        $(".fvd").css({
            "animation": "blockturning 1.5s",
        });
        setTimeout(function () {
            $(".fvd").css({
                "animation": "none 0.1s",
            });
        }, 1500);
        ev.gesture.preventDefault();
        ev.stopPropagation();
    });
    $("#fvdishead").click(function () {
        
        $("#fvdis").hide();
        $("#fileview").fadeIn();
    });
    $(".fvd").click(function () {
        if ($(this).attr("title") >= dis.length || dis[$(this).attr("title")].GTDno==-1) {

        }
        else {
            readGTDjson2(dis[$(this).attr("title")]);
            $("#fvdis").hide();
            $("#disGTD2").fadeIn();
        }

    });

}
//timeview页面刷新
function timeviewready() {
    $(".tvline").show();
    $("#tvdis").hide();
    $(".tvline").css("border-color", "black");
    $(".tvline").unbind("click");
    var a;//判断点击的事today还是。。。。
    var flag = 0;
    //展示事件用的变量
    var disp = 0;
    //展示事件的函数
    function linedis() {
        if (a == "#tvtoday") {
            dis = showtodayGTD();
        }
        else if (a == "#tvtomo") {
            dis = showtomrrowGTD();
        }
        else if (a == "#tvhis") {
            dis = showhistoryGTD();
        }
        else if (a == "#tvfutu") {
            dis = showfutureGTD();
        }
        if (dis != null) {
            for (var i = 0; i < 6; i++) {
                var tvb = "#tvb" + i;
                if (disp >= dis.length) {
                    $(tvb).html("");
                    $(tvb).attr("title", disp);
                    $(tvb).css("background-color", lv6);
                }
                else {
                    $(tvb).show();
                    $(tvb).html(dis[disp].GTDdes);
                    $(tvb).append("<br />");
                    $(tvb).append(dis[disp].GTDdate);
                    $(tvb).append("  ");
                    $(tvb).append(dis[disp].GTDtime);
                    $(tvb).append("<br />");
                    switch (dis[disp].GTDlevel) {
                        case '6':
                            $(tvb).css("background-color", lv6)
                            $(tvb).css("color", "#000000")
                            break;
                        case '5':
                            $(tvb).css("background-color", lv5)
                            $(tvb).css("color", "#000000")
                            break;
                        case '4':
                            $(tvb).css("background-color", lv4)
                            $(tvb).css("color", "#000000")
                            break;
                        case '3':
                            $(tvb).css("background-color", lv3)
                            $(tvb).css("color", "#000000")
                            break;
                        case '2':
                            $(tvb).css("background-color", lv2)
                            $(tvb).css("color", "#000000")
                            break;
                        case '1':
                            $(tvb).css("background-color", lv1)
                            $(tvb).css("color", "#000000")
                            break;
                        case '0':
                            $(tvb).css("background-color", lv1)
                            $(tvb).css("color", "#000000")
                            break;

                    }
                    $(tvb).attr("title", disp);
                }
                disp++;
            }
        }

    }
    //点击条目的函数
    function lineclick() {
        if (flag == 0) {
            flag = 1;
            $(".tvline").fadeOut(30);
            setTimeout(function () { $(a).css("border-color", "white"); }, 30);
            $(a).fadeIn(30);
            setTimeout(function () { $("#tvdis").slideDown(); }, 90);
            //初始化事件列表
            disp = 0;
            linedis();
        }
        else if (flag == 1) {
            $(a).fadeOut(30);
            $("#tvdis").slideUp(30);
            setTimeout(function () {
                $(a).css("border-color", "black")
                $(".tvline").fadeIn();
            }, 60);
            flag = 0;
        }
        else;
    }
    $("#tvtoday").click(function () {
        a = "#tvtoday";
        lineclick();
    });
    $("#tvtomo").click(function () {
        a = "#tvtomo";
        lineclick();
    });
    $("#tvhis").click(function () {
        a = "#tvhis";
        lineclick();
    });
    $("#tvfutu").click(function () {
        a = "#tvfutu";
        lineclick();
    });
    //左右滑动翻页
    $("#tvdis").hammer().on("swiperight", function (ev) {
        if (disp >= dis.length) disp = 0;
        linedis();
        $(".tvblock").css({
            "animation": "blockturning 1.5s",
        });
        setTimeout(function () {
            $(".tvblock").css({
                "animation": "none 0.1s",
            });
        }, 1500);
        ev.gesture.preventDefault();
        ev.stopPropagation();
    });
    $("#tvdis").hammer().on("swipeleft", function (ev) {
        for (var i = 0; i < 12; i++) {
            disp--;
            if (disp < 0) disp = dis.length + 6 - dis.length % 6 - 1;
        }
        if (disp >= dis.length) disp = 0;
        linedis();
        $(".tvblock").css({
            "animation": "blockturning 1.5s",
        });
        setTimeout(function () {
            $(".tvblock").css({
                "animation": "none 0.1s",
            });
        }, 1500);
        ev.gesture.preventDefault();
        ev.stopPropagation();
    });
    $(".tvblock").click(function () {
        if ($(this).attr("title") >= dis.length || dis[$(this).attr("title")].GTDno == -1) {
           
        }
        else {
            readGTDjson(dis[$(this).attr("title")]);
            enterdig = "#timeview";
            $(enterdig).hide();
            $("#disGTD").fadeIn();
        }

    });
}
//magGTD刷新
function magGTDready() {
    $("#magimgin").html("");
    $("#maglocin").html("");
    var imgsrc = getimg();
    for (var i = 0; i < imgsrc.length; i++) {
        $("#magimgin").append("<option value =\"" + imgsrc[i].src + "\">" + imgsrc[i].name + "</option>");
    }
    //默认显示第一个
    document.getElementById("magimgdis").src = imgsrc[0].src;
    //图片选择器初始化设置完毕


    //初始化地点和文件列表
    loc = displayAllLoc();
    file = displayAllFile();
    for (var i = 0; i < loc.length; i++) {
        $("#maglocin").append("<option value =\"" + loc[i].locname + "\">" + loc[i].locname + "</option>");
    }
    for (var i = 0; i < file.length; i++) {
        $("#magfilein").append("<option value =\"" + file[i].filename + "\">" + file[i].filename + "</option>");
    }
    //地点文件列表初始化完毕
}
//disGTD刷新
function disGTDready() {
    var imgsrc = getimg();
    $("#disgimgin").html("");
    $("#disglocin").html("");
    for (var i = 0; i < imgsrc.length; i++) {
        $("#disgimgin").append("<option value =\"" + imgsrc[i].src + "\">" + imgsrc[i].name + "</option>");
    }
    //图片选择器初始化设置完毕

    loc = displayAllLoc();
    file = displayAllFile();
    $("#disglocin").html("");
    $("#disgfilein").html("");
    for (var i = 0; i < loc.length; i++) {
        $("#disglocin").append("<option value =\"" + loc[i].locname + "\">" + loc[i].locname + "</option>");
    }
    for (var i = 0; i < file.length; i++) {
        $("#disgfilein").append("<option value =\"" + file[i].filename + "\">" + file[i].filename + "</option>");
    }
    //地点文件列表初始化完毕
}
function disGTD1ready() {
    var imgsrc = getimg();
    $("#disgimgin1").html("");
    $("#disglocin1").html("");
    for (var i = 0; i < imgsrc.length; i++) {
        $("#disgimgin1").append("<option value =\"" + imgsrc[i].src + "\">" + imgsrc[i].name + "</option>");
    }
    ////图片选择器初始化设置完毕
    //初始化地点和文件列表
    loc = displayAllLoc();
    file = displayAllFile();
    for (var i = 0; i < loc.length; i++) {
        $("#disglocin1").append("<option value =\"" + loc[i].locname + "\">" + loc[i].locname + "</option>");
    }
    for (var i = 0; i < file.length; i++) {
        $("#disgfilein1").append("<option value =\"" + file[i].filename + "\">" + file[i].filename + "</option>");
    }
    //地点文件列表初始化完毕
}
function disGTD2ready() {
    var imgsrc = getimg();
    $("#disgimgin2").html("");
    $("#disglocin2").html("");
    for (var i = 0; i < imgsrc.length; i++) {
        $("#disgimgin2").append("<option value =\"" + imgsrc[i].src + "\">" + imgsrc[i].name + "</option>");
    }
    ////图片选择器初始化设置完毕
    //初始化地点和文件列表
    loc = displayAllLoc();
    file = displayAllFile();
    for (var i = 0; i < loc.length; i++) {
        $("#disglocin2").append("<option value =\"" + loc[i].locname + "\">" + loc[i].locname + "</option>");
    }
    for (var i = 0; i < file.length; i++) {
        $("#disgfilein2").append("<option value =\"" + file[i].filename + "\">" + file[i].filename + "</option>");
    }
    //地点文件列表初始化完毕
}

$("#addGTD").ready(function () {
    style = displayAllStyle();
    var page = 0;//已经显示过的数目
    for (var i = 0; i < 8; i++) {
        var agb = "#agb" + i;
        if (page >= style.length) {
            //page = 0;
            //$(agb).html(style[page].sname);
            $(agb).attr("title", page);
            $(agb).html(" ");
            //$(agb).hide();
        }
        else {
            //$(agb).show();
            $(agb).html(style[page].sname);
            $(agb).attr("title", page);
        }
        page++;
    }
    //if (page >= style.length) page = 0;
    $("#addGTD").hammer().on("swiperight", function (ev) {
        if (page >= style.length) page = 0;
        for (var i = 0; i < 8; i++) {
            var agb = "#agb" + i;
            if (page >= style.length) {
                //page = 0;
                //$(agb).html(style[page].sname);
                $(agb).attr("title", page);
                $(agb).html(" ");
            }
            else {
                $(agb).html(style[page].sname);
                $(agb).attr("title", page);
            }
            page++;
        }
        
        $(".block").css({
            "animation": "blockturning 1.5s",
        });
        setTimeout(function () {
            $(".block").css({
                "animation": "none 0.1s",
            });
        }, 1500);
        ev.gesture.preventDefault();
        ev.stopPropagation();
    });
    $("#addGTD").hammer().on("swipeleft", function (ev) {
        //if (page != 0) {
            for (var i = 0; i < 16; i++) {
                page--;
                if (page < 0) {
                    //page = style.length - 1;
                    page = style.length + 8 - style.length % 8 - 1;
                }
            }
        //}
        if (page >= style.length) page = 0;
        for (var i = 0; i < 8; i++) {
            var agb = "#agb" + i;
            if (page >= style.length) {
                //page = 0;
                //$(agb).html(style[page].sname);
                $(agb).attr("title", page);
                $(agb).html(" ");
            }
            else {
                $(agb).html(style[page].sname);
                $(agb).attr("title", page);
            }
            page++;
        }
        //if (page >= style.length) page = 0;
        $(".block").css({
            "animation": "blockturning 1.5s",
        });
        setTimeout(function () {
            $(".block").css({
                "animation": "none 0.1s",
            });
        }, 1500);
        ev.gesture.preventDefault();
        ev.stopPropagation();
    });
    $(".addnew").click(function () {
        $("#addGTD").hide();
        $("#manageGTD").fadeIn();
        
    });
    $(".block").click(function () {
        $("#addGTD").hide();
        $("#manageGTD").fadeIn();
        var i = $(this).attr("title");
        if (i>=style.length) {
            $("#magnamein").val("");
        }
        else {
            $("#magnamein").val(style[i].sname);
            var img = style[i].simg;
            document.getElementById('magimgdis').src = img;
        }
        var title = document.getElementById('magimgin');
        for (var i = 0; i < title.options.length; i++) {
            if (title.options[i].value == img) {
                title.options[i].selected = true;
                break;
            }
        }
    });

});

$("#manageGTD").ready(function () {

    var imgsrc = getimg();
    for (var i = 0; i < imgsrc.length; i++) {
        $("#magimgin").append("<option value =\"" + imgsrc[i].src + "\">" + imgsrc[i].name + "</option>");
    }
    //默认显示第一个
    document.getElementById("magimgdis").src = imgsrc[0].src;
    //图片选择器初始化设置完毕

    //初始化地点和文件列表 
    loc = displayAllLoc();
    file = displayAllFile();
    for (var i = 0; i < loc.length; i++) {
        $("#maglocin").append("<option value =\"" + loc[i].locname + "\">" + loc[i].locname + "</option>");
    }
    for (var i = 0; i < file.length; i++) {
        $("#magfilein").append("<option value =\"" + file[i].filename + "\">" + file[i].filename + "</option>");
    }
    //地点文件列表初始化完毕
    //初始化页面中得各个输入
    function initmag() {
        $("#magnamein").val("");
        $("#magremin").html("");
        document.getElementById("magimgdis").src = imgsrc[0].src;
        var title = document.getElementById("maglocin");
        title.options[0].selected = true;
        title = document.getElementById("magfilein");
        title.options[0].selected = true;
        title = document.getElementById("magimgin");
        title.options[0].selected = true;
    }
    //图片选择更改
    $("#magimgin").change(function () {
        document.getElementById("magimgdis").src = $("#magimgin").val();
    });
    //点击ok
    $("#magok").click(function () {
        WinJS.UI.processAll();
        addGTD();
        $("#manageGTD").hide();
        $("#addGTD").fadeIn();
        initmag();
        locviewready();
        fileviewready();
        timeviewready();
    });
    //点击cancel
    $("#magcan").click(function () {
        $("#manageGTD").hide();
        $("#addGTD").fadeIn();
        initmag();
    });
    //点击remark
    $("#magrem").click(function () {
        $("#magremin").slideToggle();
    });
});

$("#timeview").ready(function () {
    var a;//判断点击的事today还是。。。。
    var flag = 0;
    //展示事件用的变量
    var disp = 0;
    //展示事件的函数
    function linedis() {
        if (a == "#tvtoday") {
            dis = showtodayGTD();
        }
        else if (a == "#tvtomo") {
            dis = showtomrrowGTD();
        }
        else if (a == "#tvhis") {
            dis = showhistoryGTD();
        }
        else if (a == "#tvfutu") {
            dis = showfutureGTD();
        }
        if (dis != null) {
            for (var i = 0; i < 6; i++) {
                var tvb = "#tvb" + i;
                if (disp >= dis.length) {
                    $(tvb).html("");
                    $(tvb).attr("title", disp);
                    $(tvb).css("background-color", lv6);
                }
                else {
                    $(tvb).show();
                    $(tvb).html(dis[disp].GTDdes);
                    $(tvb).append("<br />");
                    $(tvb).append(dis[disp].GTDdate);
                    $(tvb).append("  ");
                    $(tvb).append(dis[disp].GTDtime);
                    $(tvb).append("<br />");
                    switch (dis[disp].GTDlevel) {
                        case '6':
                            $(tvb).css("background-color", lv6)
                            $(tvb).css("color", "#000000")
                            break;
                        case '5':
                            $(tvb).css("background-color", lv5)
                            $(tvb).css("color", "#000000")
                            break;
                        case '4':
                            $(tvb).css("background-color", lv4)
                            $(tvb).css("color", "#000000")
                            break;
                        case '3':
                            $(tvb).css("background-color", lv3)
                            $(tvb).css("color", "#000000")
                            break;
                        case '2':
                            $(tvb).css("background-color", lv2)
                            $(tvb).css("color", "#000000")
                            break;
                        case '1':
                            $(tvb).css("background-color", lv1)
                            $(tvb).css("color", "#000000")
                            break;
                        case '0':
                            $(tvb).css("background-color", lv1)
                            $(tvb).css("color", "#000000")
                            break;

                    }
                    $(tvb).attr("title", disp);
                }
                disp++;
            }
        }

    }
    //点击条目的函数
    function lineclick() {
        if (flag == 0) {
            flag = 1;
            $(".tvline").fadeOut(30);
            setTimeout(function () { $(a).css("border-color", "white"); }, 30);
            $(a).fadeIn(30);
            setTimeout(function () { $("#tvdis").slideDown(); }, 90);
            //初始化事件列表
            disp = 0;
            linedis();
        }
        else if (flag == 1) {
            $(a).fadeOut(30);
            $("#tvdis").slideUp(30);
            setTimeout(function () {
                $(a).css("border-color", "black")
                $(".tvline").fadeIn();
            }, 60);
            flag = 0;
        }
        else;
    }
    $("#tvtoday").click(function () {
        a = "#tvtoday";
        lineclick();
    });
    $("#tvtomo").click(function () {
        a = "#tvtomo";
        lineclick();
    });
    $("#tvhis").click(function () {
        a = "#tvhis";
        lineclick();
    });
    $("#tvfutu").click(function () {
        a = "#tvfutu";
        lineclick();
    });
    //左右滑动翻页
    $("#tvdis").hammer().on("swiperight", function (ev) {
        if (disp >= dis.length) disp = 0;
        linedis();
        $(".tvblock").css({
            "animation": "blockturning 1.5s",
        });
        setTimeout(function () {
            $(".tvblock").css({
                "animation": "none 0.1s",
            });
        }, 1500);
        ev.gesture.preventDefault();
        ev.stopPropagation();
    });
    $("#tvdis").hammer().on("swipeleft", function (ev) {
        for (var i = 0; i < 12; i++) {
            disp--;
            if (disp < 0) disp = dis.length + 6 - dis.length % 6 - 1;
        }
        if (disp >= dis.length) disp = 0;
        linedis();
        $(".tvblock").css({
            "animation": "blockturning 1.5s",
        });
        setTimeout(function () {
            $(".tvblock").css({
                "animation": "none 0.1s",
            });
        }, 1500);
        ev.gesture.preventDefault();
        ev.stopPropagation();
    });
    $(".tvblock").click(function () {
        if ($(this).attr("title") >= dis.length || dis[$(this).attr("title")].GTDno == -1) {
           
        }
        else {
            readGTDjson(dis[$(this).attr("title")]);
            enterdig = "#timeview";
            $(enterdig).hide();
            $("#disGTD").fadeIn();
        }

    });
});

$("#locview").ready(function () {
    ///初始化地点展示窗
    loc = displayAllLoc();
    var page = 0;//展示地点用的计数变量
    for (var i = 0; i < 6; i++) {
        var lvb = "#lvb" + i;
        if (page >= loc.length) {
            //page = 0;
            //$(lvb).html(loc[page].locname);
            $(lvb).html(" ");
            $(lvb).attr("title", page);
        }
        else {
            $(lvb).html(loc[page].locname);
            $(lvb).attr("title", page);
        }
        page++;
    }
    //定义展示事件用的变量
    var disp = 0;

    $("#locview").hammer().on("swipeup", function (ev) {
        $("#locview").slideUp();
        $("#addloc").slideDown();
        ev.gesture.preventDefault();
        ev.stopPropagation();
    });
    $("#locview").hammer().on("swiperight", function (ev) {
        if (page >= loc.length) page = 0;
        for (var i = 0; i < 6; i++) {
            var lvb = "#lvb" + i;
            if (page >= loc.length) {
                //page = 0;
                //$(lvb).html(loc[page].locname);
                $(lvb).html("");
                $(lvb).attr("title", page);
            }
            else {
                $(lvb).html(loc[page].locname);
                $(lvb).attr("title", page);
            }
            page++;
        }
        $(".lvb").css({
            "animation": "blockturning 1.5s",
        });
        setTimeout(function () {
            $(".lvb").css({
                "animation": "none 0.1s",
            });
        }, 1500);
        ev.gesture.preventDefault();
        ev.stopPropagation();
    });
    $("#locview").hammer().on("swipeleft", function (ev) {
        for (var i = 0; i < 12; i++) {
            page--;
            if (page < 0) page = loc.length + 6 - loc.length % 6 - 1;//page = loc.length - 1;
        }
        if (page >= style.length) page = 0;
        for (var i = 0; i < 6; i++) {
            var lvb = "#lvb" + i;
            if (page >= loc.length) {
                //page = 0;
                //$(lvb).html(loc[page].locname);
                $(lvb).html("");
                $(lvb).attr("title", page);
            }
            else {
                $(lvb).html(loc[page].locname);
                $(lvb).attr("title", page);
            }
            page++;
        }
        $(".lvb").css({
            "animation": "blockturning 1.5s",
        });
        setTimeout(function () {
            $(".lvb").css({
                "animation": "none 0.1s",
            });
        }, 1500);
        ev.gesture.preventDefault();
        ev.stopPropagation();
    });
    $(".lvb").click(function () {
        var i = $(this).attr("title");
        if (i >= loc.length) {

        }
        else {
            //根据选择初始化展示事件的变量
            var name = loc[$(this).attr("title")].locname;
            dis = displaylocGTD(loc[$(this).attr("title")].locname);
            dispage = 0;
            WinJS.UI.processAll();
            //初始化展示
            for (var i = 0; i < 6; i++) {
                var lvd = "#lvd" + i;
                if (dispage >= dis.length) {
                    $(lvd).html("");
                    $(lvd).css("background-color", lv6);
                    $(lvd).attr("title", dispage);
                }
                else {
                    $(lvd).html(dis[dispage].GTDdes);
                    $(lvd).append("<br />");
                    $(lvd).append(dis[dispage].GTDdate);
                    $(lvb).append("  ");
                    $(lvd).append(dis[dispage].GTDtime);
                    $(lvd).append("<br />");
                    switch (dis[dispage].GTDlevel) {
                        case '6':
                            $(lvd).css("background-color", lv6)
                            $(lvd).css("color", "#000000")
                            break;
                        case '5':
                            $(lvd).css("background-color", lv5)
                            $(lvd).css("color", "#000000")
                            break;
                        case '4':
                            $(lvd).css("background-color", lv4)
                            $(lvd).css("color", "#000000")
                            break;
                        case '3':
                            $(lvd).css("background-color", lv3)
                            $(lvd).css("color", "#000000")
                            break;
                        case '2':
                            $(lvd).css("background-color", lv2)
                            $(lvd).css("color", "#000000")
                            break;
                        case '1':
                            $(lvd).css("background-color", lv1)
                            $(lvd).css("color", "#000000")
                            break;
                        case '0':
                            $(lvd).css("background-color", lv1)
                            $(lvd).css("color", "#000000")
                            break;

                    }
                    $(lvd).attr("title", dispage);
                }
                dispage++;
            }
            $("#lvdishead").html(loc[$(this).attr("title")].locname);
            $("#locview").hide();
            $("#lvdis").fadeIn();
        }
       
    });
    $("#lvdis").hammer().on("swiperight", function (ev) {
        if (dispage >= dis.length) dispage = 0;
        for (var i = 0; i < 6; i++) {
            var lvd = "#lvd" + i;
            
            if (dispage >= dis.length) {
                $(lvd).html("");
                $(lvd).css("background-color", lv6);
                $(lvd).attr("title", dispage);
            }
            else {
                $(lvd).html(dis[dispage].GTDdes);
                $(lvd).append("<br />");
                $(lvd).append(dis[dispage].GTDdate);
                $(lvb).append("  ");
                $(lvd).append(dis[dispage].GTDtime);
                $(lvd).append("<br />");
                switch (dis[dispage].GTDlevel) {
                    case '6':
                        $(lvd).css("background-color", lv6)
                        $(lvd).css("color", "#000000")
                        break;
                    case '5':
                        $(lvd).css("background-color", lv5)
                        $(lvd).css("color", "#000000")
                        break;
                    case '4':
                        $(lvd).css("background-color", lv4)
                        $(lvd).css("color", "#000000")
                        break;
                    case '3':
                        $(lvd).css("background-color", lv3)
                        $(lvd).css("color", "#000000")
                        break;
                    case '2':
                        $(lvd).css("background-color", lv2)
                        $(lvd).css("color", "#000000")
                        break;
                    case '1':
                        $(lvd).css("background-color", lv1)
                        $(lvd).css("color", "#000000")
                        break;
                    case '0':
                        $(lvd).css("background-color", lv1)
                        $(lvd).css("color", "#000000")
                        break;

                }
                $(lvd).attr("title", dispage);
            }
            dispage++;
        }
        $(".lvd").css({
            "animation": "blockturning 1.5s",
        });
        setTimeout(function () {
            $(".lvd").css({
                "animation": "none 0.1s",
            });
        }, 1500);
        ev.gesture.preventDefault();
        ev.stopPropagation();
    });
    $("#lvdis").hammer().on("swipeleft", function (ev) {
        for (var i = 0; i < 12; i++) {
            dispage--;
            if (dispage < 0) dispage = dis.length + 6 - dis.length % 6 - 1;
        }
        if (dispage >= dis.length) dispage = 0;
        for (var i = 0; i < 6; i++) {
            var lvd = "#lvd" + i;
            if (dispage >= dis.length) {
                $(lvd).html("");
                $(lvd).css("background-color", lv6);
                $(lvd).attr("title", dispage);
            }
            else {
                $(lvd).html(dis[dispage].GTDdes);
                $(lvd).append("<br />");
                $(lvd).append(dis[dispage].GTDdate);
                $(lvb).append("  ");
                $(lvd).append(dis[dispage].GTDtime);
                $(lvd).append("<br />");
                switch (dis[dispage].GTDlevel) {
                    case '6':
                        $(lvd).css("background-color", lv6)
                        $(lvd).css("color", "#000000")
                        break;
                    case '5':
                        $(lvd).css("background-color", lv5)
                        $(lvd).css("color", "#000000")
                        break;
                    case '4':
                        $(lvd).css("background-color", lv4)
                        $(lvd).css("color", "#000000")
                        break;
                    case '3':
                        $(lvd).css("background-color", lv3)
                        $(lvd).css("color", "#000000")
                        break;
                    case '2':
                        $(lvd).css("background-color", lv2)
                        $(lvd).css("color", "#000000")
                        break;
                    case '1':
                        $(lvd).css("background-color", lv1)
                        $(lvd).css("color", "#000000")
                        break;
                    case '0':
                        $(lvd).css("background-color", lv1)
                        $(lvd).css("color", "#000000")
                        break;

                }
                $(lvd).attr("title", dispage);
            }
            dispage++;
        }
        $(".lvd").css({
            "animation": "blockturning 1.5s",
        });
        setTimeout(function () {
            $(".lvd").css({
                "animation": "none 0.1s",
            });
        }, 1500);
        ev.gesture.preventDefault();
        ev.stopPropagation();
    });
    $("#lvdishead").click(function () {
        $("#lvdis").hide();
        $("#locview").fadeIn();
        
    });
    $(".lvd").click(function () {
        if ($(this).attr("title") >= dis.length||dis[$(this).attr("title")].GTDno == -1) {

        }
        else {
            readGTDjson1(dis[$(this).attr("title")]);
            enterdig = "#locview";
            $("#lvdis").hide();
            $("#disGTD1").show();
        }

    });
});

$("#addloc").ready(function () {
    $("#addloc").hammer().on("swipedown", function (ev) {
        $("#addloc").slideUp();
        $("#locview").slideDown();
        ev.gesture.preventDefault();
        ev.stopPropagation();
    });
    $("#alok").click(function () {
        addCustomerLoc();
        locviewready();
        disGTDready();
        disGTD1ready();
        disGTD2ready();
        magGTDready();
        $("#addloc").slideUp();
        $("#locview").slideDown();
        $("#addlocin").html("");
    });
    $("#alcan").click(function () {
        $("#addloc").slideUp();
        $("#locview").slideDown();
        $("#addlocin").html("");
    });
});

$("#fileview").ready(function () {
    //展示文件夹的变量以及初始化
    file = displayAllFile();
    var page = 0;
    for (var i = 0; i < 6; i++) {
        var fvb = "#fvb" + i;
        if (page >= file.length) {
            //page = 0;
            //$(fvb).html(file[page].filename);
            $(fvb).html("");
            $(fvb).attr("title", page);

        }
        else {
            $(fvb).html(file[page].filename);
            $(fvb).attr("title", page);
        }
        page++;
    }
    //定义展示事件用的变量
    var disp = 0;


    $("#fileview").hammer().on("swipeup", function (ev) {
        $("#fileview").slideUp();
        $("#addfile").slideDown();
        ev.gesture.preventDefault();
        ev.stopPropagation();
    });
    $("#fileview").hammer().on("swiperight", function (ev) {
        if (page >= file.length) page = 0;
        for (var i = 0; i < 6; i++) {
            var fvb = "#fvb" + i;
            if (page >= file.length) {
                //page = 0;
                //$(fvb).html(file[page].filename);
                $(fvb).html("");
                $(fvb).attr("title", page);

            }
            else {
                $(fvb).html(file[page].filename);
                $(fvb).attr("title", page);
            }
            page++;
        }
        $(".fvb").css({
            "animation": "blockturning 1.5s",
        });
        setTimeout(function () {
            $(".fvb").css({
                "animation": "none 0.1s",
            });
        }, 1500);
        ev.gesture.preventDefault();
        ev.stopPropagation();
    });
    $("#fileview").hammer().on("swipeleft", function (ev) {
        for (var i = 0; i < 12; i++) {
            page--;
            if (page < 0) page = file.length + 6 - file.length % 6 - 1;
        }
        if (page >= file.length) page = 0;
        for (var i = 0; i < 6; i++) {
            var fvb = "#fvb" + i;
            if (page >= file.length) {
                //page = 0;
                //$(fvb).html(file[page].filename);
                $(fvb).html("");
                $(fvb).attr("title", page);

            }
            else {
                $(fvb).html(file[page].filename);
                $(fvb).attr("title", page);
            }
            page++;
        }
        $(".fvb").css({
            "animation": "blockturning 1.5s",
        });
        setTimeout(function () {
            $(".fvb").css({
                "animation": "none 0.1s",
            });
        }, 1500);
        ev.gesture.preventDefault();
        ev.stopPropagation();
    });

    $(".fvb").click(function () {
        //根据选择初始化展示事件的变量
        var i = $(this).attr("title");
        if (i >= file.length) {

        }
        else {
            dis = displayfileGTD(file[$(this).attr("title")].filename);
            dispage = 0;
            WinJS.UI.processAll();
            //初始化展示
            for (var i = 0; i < 6; i++) {
                var fvd = "#fvd" + i;
                if (dispage >= dis.length) {
                    $(fvd).html("");
                    $(fvd).css("background-color", lv6);
                    $(fvd).attr("title", dispage);
                }
                else {
                    $(fvd).html(dis[dispage].GTDdes);
                    $(fvd).append("<br />");
                    $(fvd).append(dis[dispage].GTDdate);
                    $(fvb).append("  ");
                    $(fvd).append(dis[dispage].GTDtime);
                    $(fvd).append("<br />");
                    switch (dis[dispage].GTDlevel) {
                        case '6':
                            $(fvd).css("background-color", lv6)
                            $(fvd).css("color", "#000000")
                            break;
                        case '5':
                            $(fvd).css("background-color", lv5)
                            $(fvd).css("color", "#000000")
                            break;
                        case '4':
                            $(fvd).css("background-color", lv4)
                            $(fvd).css("color", "#000000")
                            break;
                        case '3':
                            $(fvd).css("background-color", lv3)
                            $(fvd).css("color", "#000000")
                            break;
                        case '2':
                            $(fvd).css("background-color", lv2)
                            $(fvd).css("color", "#000000")
                            break;
                        case '1':
                            $(fvd).css("background-color", lv1)
                            $(fvd).css("color", "#000000")
                            break;
                        case '0':
                            $(fvd).css("background-color", lv1)
                            $(fvd).css("color", "#000000")
                            break;

                    }
                    $(fvd).attr("title", dispage);
                }
                dispage++;
            }
            $("#fvdishead").html(file[$(this).attr("title")].filename);
            $("#fileview").hide();
            $("#fvdis").fadeIn();
        }
        
    });
    $("#fvdis").hammer().on("swiperight", function (ev) {
        if (dispage >= dis.length) dispage = 0;
        for (var i = 0; i < 6; i++) {
            var fvd = "#fvd" + i;
            if (dispage >= dis.length) {
                $(fvd).css("background-color", lv6);
                $(fvd).html("");
                $(fvd).attr("title", dispage);
            }
            else {
                $(fvd).html(dis[dispage].GTDdes);
                $(fvd).append("<br />");
                $(fvd).append(dis[dispage].GTDdate);
                $(fvb).append("  ");
                $(fvd).append(dis[dispage].GTDtime);
                $(fvd).append("<br />");
                switch (dis[dispage].GTDlevel) {
                    case '6':
                        $(fvd).css("background-color", lv6)
                        $(fvd).css("color", "#000000")
                        break;
                    case '5':
                        $(fvd).css("background-color", lv5)
                        $(fvd).css("color", "#000000")
                        break;
                    case '4':
                        $(fvd).css("background-color", lv4)
                        $(fvd).css("color", "#000000")
                        break;
                    case '3':
                        $(fvd).css("background-color", lv3)
                        $(fvd).css("color", "#000000")
                        break;
                    case '2':
                        $(fvd).css("background-color", lv2)
                        $(fvd).css("color", "#000000")
                        break;
                    case '1':
                        $(fvd).css("background-color", lv1)
                        $(fvd).css("color", "#000000")
                        break;
                    case '0':
                        $(fvd).css("background-color", lv1)
                        $(fvd).css("color", "#000000")
                        break;

                }
                $(fvd).attr("title", dispage);
            }
            dispage++;
        }
        $(".fvd").css({
            "animation": "blockturning 1.5s",
        });
        setTimeout(function () {
            $(".fvd").css({
                "animation": "none 0.1s",
            });
        }, 1500);
        ev.gesture.preventDefault();
        ev.stopPropagation();
    });
    $("#fvdis").hammer().on("swipeleft", function (ev) {
        for (var i = 0; i < 12; i++) {
            dispage--;
            if (dispage < 0) dispage = dis.length + 6 - dis.length % 6 - 1;
        }
        if (dispage >= dis.length) dispage = 0;
        for (var i = 0; i < 6; i++) {
            var fvd = "#fvd" + i;
            if (dispage >= dis.length) {
                $(fvd).css("background-color", lv6);
                $(fvd).html("");
                $(fvd).attr("title", dispage);
            }
            else {
                $(fvd).html(dis[dispage].GTDdes);
                $(fvd).append("<br />");
                $(fvd).append(dis[dispage].GTDdate);
                $(fvb).append("  ");
                $(fvd).append(dis[dispage].GTDtime);
                $(fvd).append("<br />");
                switch (dis[dispage].GTDlevel) {
                    case '6':
                        $(fvd).css("background-color", lv6)
                        $(fvd).css("color", "#000000")
                        break;
                    case '5':
                        $(fvd).css("background-color", lv5)
                        $(fvd).css("color", "#000000")
                        break;
                    case '4':
                        $(fvd).css("background-color", lv4)
                        $(fvd).css("color", "#000000")
                        break;
                    case '3':
                        $(fvd).css("background-color", lv3)
                        $(fvd).css("color", "#000000")
                        break;
                    case '2':
                        $(fvd).css("background-color", lv2)
                        $(fvd).css("color", "#000000")
                        break;
                    case '1':
                        $(fvd).css("background-color", lv1)
                        $(fvd).css("color", "#000000")
                        break;
                    case '0':
                        $(fvd).css("background-color", lv1)
                        $(fvd).css("color", "#000000")
                        break;

                }
                $(fvd).attr("title", dispage);
            }
            dispage++;
        }
        $(".fvd").css({
            "animation": "blockturning 1.5s",
        });
        setTimeout(function () {
            $(".fvd").css({
                "animation": "none 0.1s",
            });
        }, 1500);
        ev.gesture.preventDefault();
        ev.stopPropagation();
    });
    $("#fvdishead").click(function () {
        
        $("#fvdis").hide();
        $("#fileview").fadeIn();
    });
    $(".fvd").click(function () {
        if ($(this).attr("title") >= dis.length || dis[$(this).attr("title")].GTDno==-1) {

        }
        else {
            readGTDjson2(dis[$(this).attr("title")]);
            $("#fvdis").hide();
            $("#disGTD2").fadeIn();
        }

    });

});

$("#addfile").ready(function () {
    $("#addfile").hammer().on("swipedown", function (ev) {
        $("#fileview").slideDown();
        $("#addfile").slideUp();
        ev.gesture.preventDefault();
        ev.stopPropagation();
    });
    $("#afok").click(function () {
        addCustomerFile();
        fileviewready();
        magGTDready();
        disGTDready();
        disGTD1ready();
        disGTD2ready();
        $("#fileview").slideDown();
        $("#addfile").slideUp();
        $("#addfilein").html("");
    });
    $("#afcan").click(function () {
        $("#fileview").slideDown();
        $("#addfile").slideUp();
        $("#addfilein").html("");

    });
});

$("#disGTD").ready(function () {
        var imgsrc = getimg();
        for (var i = 0; i < imgsrc.length; i++) {
            $("#disgimgin").append("<option value =\"" + imgsrc[i].src + "\">" + imgsrc[i].name + "</option>");
        }
        ////图片选择器初始化设置完毕
        //初始化地点和文件列表
        loc = displayAllLoc();
        file = displayAllFile();
        for (var i = 0; i < loc.length; i++) {
            $("#disglocin").append("<option value =\"" + loc[i].locname + "\">" + loc[i].locname + "</option>");
        }
        for (var i = 0; i < file.length; i++) {
            $("#disgfilein").append("<option value =\"" + file[i].filename + "\">" + file[i].filename + "</option>");
        }
        //地点文件列表初始化完毕
        // 初始化各个输入变量
        function initdisGTD() {
            $("#disgnamein").val("");
            $("#disgremin").html("");
            document.getElementById("disgimgdis").src = imgsrc[0].src;
            var rp = document.getElementById("disglevelin").winControl;
            rp.userRating = 0;
            var now = new Date();
            var dp = document.getElementById("disgdate").winControl;
            dp.current = now;
            var tp = document.getElementById("disgtime").winControl;
            tp.current = now;
            var title = document.getElementById("disglocin");
            title.options[0].selected = true;
            title = document.getElementById("disgfilein");
            title.options[0].selected = true;
            title = document.getElementById("disgimgin");
            title.options[0].selected = true;
        }
        //改变选择图片
        $("#disgimgin").change(function () {
            document.getElementById("disgimgdis").src = $("#disgimgin").val();
        });
        //点击ok
        $("#disgok").click(function () {
            WinJS.UI.processAll();
            delGTD($("#disgdele").attr("title"));
            editGTD($("#disgdele").attr("title"),1);
            $(enterdig).fadeIn();
            $("#disGTD").hide();
            locviewready();
            fileviewready();
            timeviewready();
            initdisGTD();
            //添加修改内容
        });
        //点击cancel
        $("#disgcan").click(function () {
            $("#timeview").fadeIn();
            $("#disGTD").hide();
            initdisGTD();
        });
        //点击delete
        $("#disgdele").click(function () {
            delGTD($("#disgdele").attr("title"));
            $("#timeview").fadeIn();
            $("#disGTD").hide();
            locviewready();
            fileviewready();
            timeviewready();
            initdisGTD();
        });
        $("#disgrem").click(function () {

            $("#disgremin").slideToggle();

        });
});

$("#disGTD1").ready(function () {
    var imgsrc = getimg();
    for (var i = 0; i < imgsrc.length; i++) {
        $("#disgimgin1").append("<option value =\"" + imgsrc[i].src + "\">" + imgsrc[i].name + "</option>");
    }
    ////图片选择器初始化设置完毕
    //初始化地点和文件列表
    loc = displayAllLoc();
    file = displayAllFile();
    for (var i = 0; i < loc.length; i++) {
        $("#disglocin1").append("<option value =\"" + loc[i].locname + "\">" + loc[i].locname + "</option>");
    }
    for (var i = 0; i < file.length; i++) {
        $("#disgfilein1").append("<option value =\"" + file[i].filename + "\">" + file[i].filename + "</option>");
    }
    //地点文件列表初始化完毕
    // 初始化各个输入变量
    function initdisGTD() {
        $("#disgnamein1").val("");
        $("#disgremin1").html("");
        document.getElementById("disgimgdis1").src = imgsrc[0].src;
        var rp = document.getElementById("disglevelin1").winControl;
        rp.userRating = 0;
        var now = new Date();
        var dp = document.getElementById("disgdate1").winControl;
        dp.current = now;
        var tp = document.getElementById("disgtime1").winControl;
        tp.current = now;
        var title = document.getElementById("disglocin1");
        title.options[0].selected = true;
        title = document.getElementById("disgfilein1");
        title.options[0].selected = true;
        title = document.getElementById("disgimgin1");
        title.options[0].selected = true;
    }
    //改变选择图片
    $("#disgimgin1").change(function () {
        document.getElementById("disgimgdis1").src = $("#disgimgin1").val();
    });
    //点击ok
    $("#disgok1").click(function () {
        WinJS.UI.processAll();
        delGTD($("#disgdele1").attr("title"));
        editGTD($("#disgdele1").attr("title"),2);
        $("#locview").fadeIn();
        $("#disGTD1").hide();
        locviewready();
        fileviewready();
        timeviewready();
        initdisGTD();
        //添加修改内容
    });
    //点击cancel
    $("#disgcan1").click(function () {
        $("#locview").fadeIn();
        $("#disGTD1").hide();
        initdisGTD();
    });
    //点击delete
    $("#disgdele1").click(function () {
        delGTD($("#disgdele1").attr("title"));
        $("#locview").fadeIn();
        $("#disGTD1").hide();
        locviewready();
        fileviewready();
        timeviewready();
        initdisGTD();
    });
    $("#disgrem1").click(function () {

        $("#disgremin1").slideToggle();

    });
});

$("#disGTD2").ready(function () {
    var imgsrc = getimg();
    for (var i = 0; i < imgsrc.length; i++) {
        $("#disgimgin2").append("<option value =\"" + imgsrc[i].src + "\">" + imgsrc[i].name + "</option>");
    }
    ////图片选择器初始化设置完毕
    //初始化地点和文件列表
    loc = displayAllLoc();
    file = displayAllFile();
    for (var i = 0; i < loc.length; i++) {
        $("#disglocin2").append("<option value =\"" + loc[i].locname + "\">" + loc[i].locname + "</option>");
    }
    for (var i = 0; i < file.length; i++) {
        $("#disgfilein2").append("<option value =\"" + file[i].filename + "\">" + file[i].filename + "</option>");
    }
    //地点文件列表初始化完毕
    // 初始化各个输入变量
    function initdisGTD() {
        $("#disgnamein2").val("");
        $("#disgremin2").html("");
        document.getElementById("disgimgdis2").src = imgsrc[0].src;
        var rp = document.getElementById("disglevelin2").winControl;
        rp.userRating = 0;
        var now = new Date();
        var dp = document.getElementById("disgdate2").winControl;
        dp.current = now;
        var tp = document.getElementById("disgtime2").winControl;
        tp.current = now;
        var title = document.getElementById("disglocin2");
        title.options[0].selected = true;
        title = document.getElementById("disgfilein2");
        title.options[0].selected = true;
        title = document.getElementById("disgimgin2");
        title.options[0].selected = true;
    }
    //改变选择图片
    $("#disgimgin2").change(function () {
        document.getElementById("disgimgdis2").src = $("#disgimgin2").val();
    });
    //点击ok
    $("#disgok2").click(function () {
        WinJS.UI.processAll();
        delGTD($("#disgdele2").attr("title"));
        editGTD($("#disgdele2").attr("title"),3);
        $("#fileview").fadeIn();
        $("#disGTD2").hide();
        locviewready();
        fileviewready();
        timeviewready();
        initdisGTD();
        //添加修改内容
    });
    //点击cancel
    $("#disgcan2").click(function () {
        $("#fileview").fadeIn();
        $("#disGTD2").hide();
        initdisGTD();
    });
    //点击delete
    $("#disgdele2").click(function () {
        delGTD($("#disgdele2").attr("title"));
        $("#fileview").fadeIn();
        $("#disGTD2").hide();
        locviewready();
        fileviewready();
        timeviewready();
        initdisGTD();
    });
    $("#disgrem2").click(function () {

        $("#disgremin2").slideToggle();

    });
});

$("#addstyle").ready(function () {
    //初始化图片列表
    var imgsrc = getimg();
    for (var i = 0; i < imgsrc.length; i++) {
        $("#adsimgin").append("<option value =\"" + imgsrc[i].src + "\">" + imgsrc[i].name + "</option>");
    }
    //默认显示第一个
    document.getElementById("adsimgdis").src = imgsrc[0].src;
    $("#adsimgin").change(function () {

        document.getElementById("adsimgdis").src = $("#adsimgin").val();
    });
    //初始化设置完毕
    $("#adsok").click(function () {

        addCustomerStyle();

        addGTDready();
        deletestyleready();
        $("#adsnamein").attr("value", "");
        document.getElementById("adsimgdis").src = imgsrc[0].src;
        var title = document.getElementById("adsimgin");
        title.options[0].selected = true;
    });
    $("#addstyle").hammer().on("swipeup", function (ev) {
        $("#addstyle").slideUp();
        $("#delestyle").slideDown();
        ev.gesture.preventDefault();
        ev.stopPropagation();
    });
});

$("#delestyle").ready(function () {
    style = displayAllStyle();
    for (var i = 0; i < style.length; i++) {
        var n = style[i].sname;
        var img = style[i].simg;
        $("#delestyle").append("</div>");
        $("#delestyle").append("</div>");
        $("#delestyle").append("<div class='delebutton' id=" + style[i].sno + ">DELETE");
        $("#delestyle").append("<img src=" + img + " class='deleimg'/>");
        $("#delestyle").append("<div class='delediv' title=" + i + ">" + n);
    }
    $("#delestyle").hammer().on("swipedown", function (ev) {
        $("#addstyle").slideDown();
        $("#delestyle").slideUp();
        ev.gesture.preventDefault();
        ev.stopPropagation();
    });
    $(".delediv").hammer().on("swipeleft", function (ev) {
        var but = style[$(this).attr("title")].sno;
        var i = $("#" + but).css("width");
        if ($("#" + but).css("width") == "0px") $("#" + but).animate({ width: '30%' });;
        ev.gesture.preventDefault();
        ev.stopPropagation();
    });
    $(".delediv").hammer().on("swiperight", function (ev) {
        var but = style[$(this).attr("title")].sno;
        if ($("#" + but).css("width") != "0px") $("#" + but).animate({ width: '0%' });

        ev.gesture.preventDefault();
        ev.stopPropagation();
    });
    $(".delebutton").click(function () {
        var but = $(this).attr("id");
        delStyle(but);
        $("#" + but).animate({ width: '0%' });
        addGTDready();
        deletestyleready();
        //$("#delestyle").slideUp();
    });
});


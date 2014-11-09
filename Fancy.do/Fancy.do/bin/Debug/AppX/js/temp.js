function getimg() {
    return [
        {
            "src": "img/custom.png", "name": "customer default"
        },
        {
            "src": "img/aniversary.png", "name": "aniversary"
        },
        {
            "src": "img/gift.png", "name": "send gift"
        },
        {
            "src": "img/homework.png", "name": "task work"
        },
        {
            "src": "img/games.png", "name": "play games"
        },
        {
            "src": "img/music.png", "name": "listen to music"
        },
        {
            "src": "img/waterflower.png", "name": "water flowers"
        },
        {
            "src": "img/jizhang.png", "name": "keep accounts"
        },
        {"src":"images/mess.png","name":" send message"},
        { "src": "images/meal.png", "name": "eat" },
        { "src": "images/meeting.png", "name": "meeting" },
        { "src": "images/ok.png", "name": "easy" },
        { "src": "images/phone.png", "name": "call someone" },
        { "src": "img/labe.png", "name": "do experiments" },
        { "src": "img/special.png", "name": "special things" }
    ];
}
function alert(a)
{
    var messageDialog = new Windows.UI.Popups.MessageDialog(a);
    messageDialog.showAsync();
    
}
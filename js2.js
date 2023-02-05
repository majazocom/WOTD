var btn = document.getElementById("btn");
var wordinfo = document.getElementById("word-info");
var WordReturnObj = [];



var RandomWordComplete = function (data) {
    var word = data.Word;

    document.getElementById("word-info").innerHTML = data.Word;
    wordMeaning(word);
}

btn.addEventListener("click", function () {


    $.ajax({
        type: "GET",
        url: "https://random-word-api.herokuapp.com/word",
        dataType: "jsonp",
        jsonpCallback: 'RandomWordComplete'
    });


});


function wordMeaning(word) {
    
    $.ajax({
        type: "GET",
        url: 'https://api.dictionaryapi.dev/api/v2/entries/en/' + encodeURIComponent(word),
        dataType: "xml",
        success: function (xml) {
            var defintions = $(xml).find('definition');
                if(defintions.length == 0){
                    document.getElementById("def-bajs").innerHTML = "";
                    document.getElementById("myAnchor").innerHTML = "google it";
                    document.getElementById("myAnchor").href = "https://www.google.se/#q=" + encodeURIComponent(word);
                }else{
                    document.getElementById("def-bajs").innerHTML = defintions[0].innerHTML; 
                    document.getElementById("myAnchor").innerHTML = "";
                    
}
    }
       
});

}

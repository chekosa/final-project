/* instagram feed */

(function ($) {
    var userId = "3224939316";
    var accessToken = "3224939316.5b9e1e6.f83ad992e1b14234ac4ce86defc0be3e";
    var numDisplay = "8";
    $.ajax({
        type: "GET",
        dataType: "jsonp",
        cache: false,
        url: "https://api.instagram.com/v1/users/"+userId+"/media/recent/?access_token="+accessToken,
        success: function(data) {
            for (var i = 0; i < numDisplay; i++) {
        $(".insta").append("<div class='insta-box'><a target='_blank' href='" + data.data[i].link +"'><img class='instagram-image' src='" + data.data[i].images.standard_resolution.url +"' width='300' /></a></div>");
            }

        }
    });
})(jQuery);

$(document).ready(function() {
    var open_menu = function() {
        $(".modal").addClass("show");
        $(".mark").addClass("fadein");
    }
    var close_menu = function() {
        $(".modal").removeClass("show");
        $(".mark").removeClass("fadein");
    }
    $("#main_content .product-left .btn-buy_now").click(function(e) {
        e.preventDefault();
        open_menu();

    });
    $(".modal-close").click(function(e) {
        e.preventDefault();
        close_menu();
    });
    $(".mark").click(function(e) {
        e.preventDefault();
        close_menu();

    });
    // zoom images
    $('.show-product').zoom();
    // su kien nhap vao anh thumb
    $(".product-list").click(function(e) {
        e.preventDefault();
        let picture_src = $(this).find("img").attr("src");
        $(".show-product img").attr("src", picture_src);

    });

});
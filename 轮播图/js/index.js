require(["jquery-1.11.2", "carousel"], function($, Carousel){
    var imgs = ["img/1.png", "img/2.png","img/3.png","img/4.png"];
    var setting = {
        selector : "#container",
        imgArr : imgs,
        speed : 1000
    };

    var carousel = new Carousel(setting);
    carousel.init();
});
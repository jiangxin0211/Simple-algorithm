requirejs.config({
    paths : {
        jquery: "jquery-1.11.2"
    }
});
define(["jquery"], function($){
    function Carousel(settings){
        this.defaultSettings = {
            selector : document.body,
            imgArr : [],
            speed : 1000
        };
        $.extend(this.defaultSettings, settings);// 合并
        this.$container = $('<div class="carousel-container"></div>');
        this.$imgs = $('<div class="carousel-imgs"></div>');
        this.$arrows = $('<div class="carousel-arrows"></div>');
        this.$left = $('<div class="carousel-left">&lt;</div>');
        this.$right = $('<div class="carousel-right">&gt;</div>');
    }
    Carousel.prototype.init = function(){
        this.nowIndex = 0;
        this.$container.append(this.$imgs).append(this.$arrows);
        this.$arrows.append(this.$left).append(this.$right);
        for(var i=0; i<this.defaultSettings.imgArr.length; i++){
            this.$imgs.append("<img src='"+ this.defaultSettings.imgArr[i] +"'>");
        }
        $("img", this.$imgs).eq(0).addClass("selected");

        $(this.defaultSettings.selector).append(this.$container);

        this.$left.on("click", function(){
            this.nowIndex--;
            if(this.nowIndex === -1){
                this.nowIndex = this.defaultSettings.imgArr.length - 1;
            }
            changeImg.call(this);
        }.bind(this));
        this.$right.on("click", function(){
            this.nowIndex++;
            if(this.nowIndex === this.defaultSettings.imgArr.length){
                this.nowIndex = 0;
            }
            changeImg.call(this);
        }.bind(this));// bind把内部的this实例化成外面的this,bind不会立即执行

        this.$container.hover(function(){
            clearInterval(this.timer);
        }.bind(this), function(){
            play.call(this);
        }.bind(this));

        play.call(this);

        function play(){
            this.timer = setInterval(function(){
                this.$right.trigger("click");
            }.bind(this), this.defaultSettings.speed);
        }

        //私有方法
        function changeImg(){
            $("img", this.$imgs).eq(this.nowIndex).addClass("selected").siblings().removeClass("selected");
        }
    };
    return Carousel;
});
$(function(){
    /*提示初始化*/
    $('[data-toggle="tooltip"]').tooltip()
    /*获取当前所有item元素*/
    var items = $('.carousel-inner .item');
    /*监听屏幕的大小改变*/
   $(window).on("resize",function(){
       var width = $(window).width();
       if(width >= 768){
           $(items).each(function(index,value){
               var item = $(this);
               var imgSrc = item.data("largeImage");
               console.log(imgSrc);

               item.html($('<a href="javascript:;" class="pcImg"></a>').css("backgroundImage","url('"+imgSrc+"')"));
           })
       }else{
           $(items).each(function(index, value){
               var item = $(this);
               var imgSrc = item.data("smallImage");
               console.log(imgSrc);
               item.html('<a href="javascript:;" class="moblieImg"><img src="'+imgSrc+'"/></a>');
           });
       }
   }).trigger("resize");

/*添加移动端滑动事件*/
    var startX, endX;
    var carouselInner = $(".carousel-inner")[0];
    carouselInner.addEventListener("touchstart",function(e){
        startX = e.targetTouches[0].clientX;
    });
    carouselInner.addEventListener("touchend",function(e){
        endX = e.changedTouches[0].clientX;
        if(endX - startX > 0){
            $('.carousel').carousel('prev');
        }else if(endX - startX < 0){
            $('.carousel').carousel('next');
        }
    });

    /*产品导航块添加滑动效果*/
    var ul = $(".wjs_product .nav-tabs");
    var lis = ul.find("li");
    var totalWidth = 0;
    lis.each(function(index, value){
       totalWidth += $(value).innerWidth();
    });
    ul.width(totalWidth);

    var myScroll = new IScroll('.tabs-parent',{
        scrollX:true,
        scrollY:false
    });

});
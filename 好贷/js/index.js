function fnTab(aUl,aLi,ipt,son) {
    $(aUl).click(function () {
        $(this).css('background','url("img/bg2.png")no-repeat 0 0').next('ul').stop().slideToggle();
    })
    $(aLi).click(function () {
        $(this).each(function () {
            $(ipt).val($(this).find('i').html());
            $(son).html($(this).find('span').html());
            $('#ul1').css('display','none');
            $('#ul2').css('display','none');
            $(aUl).css('background','url("img/bg1.png")no-repeat 0 0')
        })
    })
}
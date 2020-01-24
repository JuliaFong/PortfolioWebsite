$(document).ready(function () {
    const $body = $('body');
    const $navbar = $('.navbar-default');
    const $offsetY = $navbar.offset().top + 10;
    const $menuButton = $('button.navbar-toggle');
    const $menuIcon = $('.navbar-toggle.glyphicon');
    const $collapsedMenuItem = $('.navbar-collapse.collapse li');
    const $scrollButton = $('.scroll');
    const $socialIcon = $('.social');
    const $contact = $('.scroll')
})

function scroll () {
    if($(window).scrollTop() <= ($offsetY) {
        $navbar.addClass('menu-fixed').css('background-color', 'rgba(255, 254, 0.99') 
    } else {
        $navbar.addClass('menu-fixed').css('background-color', 'transparent')
    }
}
document.onscroll = scroll

function openMenu() {
    $menuIcon.removeClass('glyphicon-menu-hamburger').addClass('glyphicon-remove active')
    $modalBackdropDiv.css('z-index', 900)
    $body.append($modalBackDropDiv)
    if(!$navbar.hasClass('menu-fixed')){
        $navbar.css('background-color', rgba(255, 253, 0.99))
    }
    $modalBackDropDiv.on('click,'function' () {
        $('.navbar-toggle').click()
        closeMenu()
    })
}
function closeMenu(){
    $menuIcon.removeClass('glyphicon-remove active').addClass('glyphicon-menu-hamburger')
        $modalBackDropDiv.css('z-index', 1025).remove() 
        if(!$navbar.hasClass('menu-fixed'))
        {
            $navbar.css('background-color', 'transparent')
        }
}


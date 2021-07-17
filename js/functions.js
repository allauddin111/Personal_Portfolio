$(document).on('click', 'a[href^="#"]', function (event) {
    if (event.currentTarget.className.includes("carousel-control")) { return }

    event.preventDefault();

    const offsetToScroll = possibleMobile() ? 0 : 20;

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top - offsetToScroll
    }, 'slow');

    $('label.hamburguer-menu input').prop('checked', false);
});

const showNavbar = function() {
    const headerHeight = $('header').height() - 70;
    if($(window).scrollTop() > headerHeight) {
        $('nav').parent().removeClass('hidden-content');
        $('label.hamburguer-menu').removeClass('hidden-content');
        $('#header-text').hide()
    } else if($(window).scrollTop() < headerHeight) {
        $('nav').parent().addClass('hidden-content');
        $('label.hamburguer-menu').addClass('hidden-content');
        $('#header-text').show()
    }
};


$(document).ready(function() {
    $('#spinner-loading').addClass('hidden');
    $('#site-content').removeClass('hidden');

    AOS.init();

    $(window).scroll(function() {
        showNavbar();
    });

    $('#my-years').text(calculateAge(new Date(1993, 08, 09)));
});

$('#go-to-top').on('click', function(_event) {
    $('html, body').animate({ scrollTop: 0 }, 'slow');
})

$('#send-contact-form').on('click', function(event) {
    const $form = $(event.currentTarget).parents('.form-horizontal');
    const $name = $form.find('#inputName');
    const $email = $form.find('#inputEmail');
    const $body = $form.find('#inputBody');
    const $emptyFormAlert = $form.find('#empty-form-alert');

    if(!$name.val()) {
        event.preventDefault();
        $emptyFormAlert.text('Enter Your Name:)');
    } else if(!$email.val()) {
        event.preventDefault();
        $emptyFormAlert.text('Your Email is imortant!');
    } else if(!$body.val()) {
        event.preventDefault();
        $emptyFormAlert.text('Enter the Message to be sent...');
    } else {
        $emptyFormAlert.text('Sending Message');
    }
})

function possibleMobile() {
    return window.innerWidth <= 800;
}

$('#experience #projects-all').on('click', function(e) {
    $('#experience .projects-picker span').removeClass('active');
    $(e.currentTarget).addClass('active');

    $('#experience .project').removeClass('hidden');
})
$('#experience #projects-fullstack').on('click', function(e) {
    $('#experience .projects-picker span').removeClass('active');
    $(e.currentTarget).addClass('active');

    $('#experience .project').addClass('hidden');
    $('#experience #unpie').removeClass('hidden');
    $('#experience #protagonistas').removeClass('hidden');
})
$('#experience #projects-frontend').on('click', function(e) {
    $('#experience .projects-picker span').removeClass('active');
    $(e.currentTarget).addClass('active');

    $('#experience .project').addClass('hidden');
    $('#experience #construcciones').removeClass('hidden');
    $('#experience #unpie').removeClass('hidden');
    $('#experience #modernizacion').removeClass('hidden');
})
$('#experience #projects-hardware').on('click', function(e) {
    $('#experience .projects-picker span').removeClass('active');
    $(e.currentTarget).addClass('active');

    $('#experience .project').addClass('hidden');
    $('#experience #construcciones').removeClass('hidden');
    $('#experience #unpie').removeClass('hidden');
    $('#experience #modernizacion').removeClass('hidden');
     $('#experience #protagonistas').removeClass('hidden');
})
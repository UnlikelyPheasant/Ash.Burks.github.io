$(document).ready(function() {
    const theme = localStorage.getItem('theme');
    if (theme === 'light') {
        applyLightTheme();
    } else if (theme === 'dark') {
        applyDarkTheme();
    }

    $('#checkbox1').prop('checked', theme === 'light');
    $('#checkbox2').prop('checked', theme === 'dark');

    $('#checkbox1').on('click', function() {
        console.log('Light checkbox changed:', this.checked);
        if (this.checked) {
            applyLightTheme();
            localStorage.setItem('theme', 'light');
            $('#checkbox2').prop('checked', false);
        }
    });

    $('#checkbox2').on('click', function() {
        console.log('Dark checkbox changed:', this.checked);
        if (this.checked) {
            applyDarkTheme();
            localStorage.setItem('theme', 'dark');
            $('#checkbox1').prop('checked', false);
        }
    });

    function applyLightTheme() {
        $('body').css({
            'background-color': '#FBF6EE',
            'background': 'linear-gradient(-45deg, #FDFAF7, #FBF6EE, #EED9B9, #FBF6EE, #FDFAF7)',
            'background-size': '400% 600%',
            'animation': 'gradient 15s ease infinite',
            'color': '#000000'
        });
        $('#ash').css('color', '#000000');
        $("a").css('color', '#000000');
        $('#checkbox1').css({'accent-color' : '#000000'});

    }

    function applyDarkTheme() {
        $('body').css({
            'background-color': '#121212',
            'background': 'linear-gradient(-45deg, #2B2B2B, #121212, #000000, #121212, #2B2B2B)',
            'background-size': '400% 600%',
            'animation': 'gradient 15s ease infinite',
            'color': '#ffffff'
        });
        $('#ash').css('color', '#ffffff');
        $("a").css('color', '#ffffff');
        $('#checkbox2').css({'accent-color' : '#ffffff'});
    }
});
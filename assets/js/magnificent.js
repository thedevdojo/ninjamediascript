  Flatdoc.run({
    fetcher: Flatdoc.file(documentation)
  });

  $(document).ready(function(){
    $(".header").sticky({topSpacing:0});
    setup_configurations();
    $('.title_link').click(function(){
      $('body').animate({ scrollTop: 0 }, 'slow');
    });

    $('.read_on_btn').click(function(){
      $("html, body").animate({ scrollTop: $('.header').offset().top }, 1000);
    });

    $('.top-menu a').click(function(){
      window.open($(this).attr('href'));
    });

  });

  function setup_configurations(){
    $(document).attr('title', magnificent.name);
    copy_configs();
    color_configs();
    social_configs();
    menu_configs();
    background_configs();
  }

  function copy_configs(){
    $('.headline h1').text(magnificent.headline);

    if(magnificent.view_documentation_button_text != ''){
      $('.read_on_btn span').text(magnificent.view_documentation_button_text);
    }
    $('.title_link, .headline h5 span').text(magnificent.name);
    $('.headline p span').text(magnificent.short_description);

    $('.primary_button').text(magnificent.primary_button_text);
    $('.primary_button').attr('href', magnificent.primary_button_url);

    if(magnificent.primary_button_icon != ''){
      $('.primary_button').prepend('<i class="fa ' + magnificent.primary_button_icon + '"></i>');
    }

  }

  function color_configs(){
    $('a, .menu a, .read_on_btn').not('a.button, .top-menu a, a.level-1, a.title_link, a.fa, .menu a.level-1').css('color', magnificent.color);
    $('a.big.button').css('color', magnificent.color);
    $('.button, a.big.button').css('border-color', magnificent.color);
    $('.button').not('a.big.button').css('background', magnificent.color);
    $('.button').hover(function(){
        $(this).css('background', '#111');
    }, function(){
        $(this).css('background', magnificent.color);
    });
    $('.menu a').hover(function(){
      $(this).css('color', '#777777');
    }, function(){
      $(this).css('color', magnificent.color);
    });
    $('a.big.button').hover(function(){
        $(this).css('background', magnificent.color);
        $(this).css('color', '#fff');
    }, function(){
        $(this).css('background', 'none');
        $(this).css('color', magnificent.color);
    });

    if(magnificent.color_scheme == 'dark'){
      $('body').css({ background: '#41454E', 'color': '#f1f1f1' });
      $('.menubar, .top-menu, .title_link, .header, .title-card, .right').addClass('dark');
    }
  }

  function social_configs(){
    
    // FACEBOOK
    if(magnificent.facebook == ''){
      $('.fa-facebook').hide();
    } else {
      $('.fa-facebook').attr('href', magnificent.facebook);
    }

    // TWITTER
    if(magnificent.twitter == ''){
      $('.fa-twitter').hide();
    } else {
      $('.fa-twitter').attr('href', magnificent.twitter);
    }

    // GOOGLE
    if(magnificent.google_plus == ''){
      $('.fa-google-plus').hide();
    } else {
      $('.fa-google-plus').attr('href', magnificent.google_plus);
    }

    // INSTAGRAM
    if(magnificent.instagram == ''){
      $('.fa-instagram').hide();
    } else {
      $('.fa-instagram').attr('href', magnificent.instagram);
    }

    // PINTEREST
    if(magnificent.pinterest == ''){
      $('.fa-pinterest').hide();
    } else {
      $('.fa-pinterest').attr('href', magnificent.pinterest);
    }

    // LINKED IN
    if(magnificent.linkedin == ''){
      $('.fa-linkedin').hide();
    } else {
      $('.fa-linkedin').attr('href', magnificent.linkedin);
    }

    // DRIBBBLE
    if(magnificent.dribbble == ''){
      $('.fa-dribbble').hide();
    } else {
      $('.fa-dribbble').attr('href', magnificent.dribbble);
    }

    // GITHUB
    if(magnificent.github == ''){
      $('.fa-github-alt').hide();
    } else {
      $('.fa-github-alt').attr('href', magnificent.github);
    }

  }

  function menu_configs(){
    var menu = magnificent.menu_items.split(',');
    var menu_url = magnificent.menu_item_urls.split(',');
    var custom_menu = '';
    
    for (var i = 0; i < menu.length; i++) {
      custom_menu += '<li><a href="' + menu_url[i] + '" target="_blank">' + menu[i] + '</a></li>';
    }

    $('.top-menu').html(custom_menu);
  }

  function background_configs(){
    if(magnificent.video_background == true){
   
          $('.title-area').css('background', 'none');
          $('.title-area').videoBG({
            mp4:'videos/video.mp4',
            ogv:'videos/video.ogv',
            webm:'videos/video.webm',
            scale:true,
            zIndex:0
          });

          $('.title-area img').css('display', 'none');

   
    }
  }
/*! bigSlide - v0.6.1 - 2015-02-12
* http://ascott1.github.io/bigSlide.js/
* Copyright (c) 2015 Adam D. Scott; Licensed MIT */
(function($) {
  'use strict';

  $.fn.bigSlide = function(options) {
    // store the menuLink in a way that is globally accessible
    var menuLink = this;

    // plugin settings
    var settings = $.extend({
      'navMobile': ('#navMobile'),
      'push': ('.push'),
      'side': 'right',
      'navMobileWidth': '15.625em',
      'speed': '180',
      'state': 'closed'
    }, options);

    // store the menu's state in the model
    var model = {
      'state': settings.state
    };

    // talk back and forth between the view and state
    var controller = {
      init: function(){
        view.init();
      },
      // update the menu's state
      changeState: function(){
        if (model.state === 'closed') {
          model.state = 'open'
        } else {
          model.state = 'closed'
        }
      },
      // check the menu's state
      getState: function(){
        return model.state;
      }
    };

    // the view contains all of the visual interactions
    var view = {
      init: function(){
        // cache DOM values
        this.$navMobile = $(settings.navMobile);
        this.$push = $(settings.push);
        this.width = settings.navMobileWidth;

        // CSS for how the menu will be positioned off screen
        var positionOffScreen = {
          'position': 'fixed',
          'top': '0',
          'bottom': '0',
          'height': '100%'
        };

        // manually add the settings values
        positionOffScreen[settings.side] = '-' + settings.navMobileWidth;
        positionOffScreen.width = settings.navMobileWidth;

        // add the css values to position things offscreen
        if (settings.state === 'closed') {
          this.$navMobile.css(positionOffScreen);
          this.$push.css(settings.side, '0');
        }

        // css for the sliding animation
        var animateSlide = {
          '-webkit-transition': settings.side + ' ' + settings.speed + 'ms ease',
          '-moz-transition': settings.side + ' ' + settings.speed + 'ms ease',
          '-ms-transition': settings.side + ' ' + settings.speed + 'ms ease',
          '-o-transition': settings.side + ' ' + settings.speed + 'ms ease',
          'transition': settings.side + ' ' + settings.speed + 'ms ease'
        };

        // add the animation css
        this.$navMobile.css(animateSlide);
        this.$push.css(animateSlide);

        // register a click listener for desktop & touchstart for mobile
        menuLink.on('click.bigSlide touchstart.bigSlide', function(e) {
          e.preventDefault();
          if (controller.getState() === 'open') {
            view.toggleClose();
          } else {
            view.toggleOpen();
          }
        });
      },

      // toggle the menu open
      toggleOpen: function() {
        controller.changeState();
        this.$navMobile.css(settings.side, '0');
        this.$push.css(settings.side, this.width);
        //menuLink.addClass(settings.activeBtn);
        this.$push.css("overflow", "hidden");
      },

      // toggle the menu closed
      toggleClose: function() {
        controller.changeState();
        this.$navMobile.css(settings.side, '-' + this.width);
        this.$push.css(settings.side, '0');
        //menuLink.removeClass(settings.activeBtn);
        this.$push.css("overflow", "auto");
      }

    }

    // 2:21PM 3/2 Success!
    // Found the right place to write this custom code
    // and close panel on browser resize.
    $(window).resize(function() {
      var width = $(window).width();
      if (width > 1025) {
        view.toggleClose();
      }
    });

    controller.init();

  };

}(jQuery));

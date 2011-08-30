(function() {
  var vibrateLoop;
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  vibrateLoop = function() {
    var bottom, left, right, top;
    left = parseInt($(this).css('padding-left'));
    right = parseInt($(this).css('padding-right'));
    top = parseInt($(this).css('padding-top'));
    bottom = parseInt($(this).css('padding-bottom'));
    if ($(this).data('vibrate.wiggled')) {
      $(this).css('padding-left', left + 1);
      $(this).css('padding-bottom', bottom + 1);
      $(this).css('padding-top', top - 1);
      $(this).css('padding-right', right - 1);
      $(this).data('vibrate.wiggled', false);
    } else {
      $(this).css('padding-left', left - 1);
      $(this).css('padding-bottom', bottom - 1);
      $(this).css('padding-top', top + 1);
      $(this).css('padding-right', right + 1);
      $(this).data('vibrate.wiggled', true);
    }
    if ($(this).data('vibrate.status' || $(this).data('vibrate.wiggled'))) {
      return setTimeout((__bind(function() {
        return vibrateLoop.apply(this);
      }, this)), $(this).data('vibrate.speed'));
    }
  };
  $.fn.vibrate = function(opts) {
    if (opts == null) {
      opts = {
        speed: 50
      };
    }
    $(this).data('vibrate.speed', opts.speed);
    $(this).data('vibrate.status', false);
    $(this).mouseover(function() {
      $(this).data('vibrate.status', true);
      return vibrateLoop.apply(this);
    });
    $(this).mouseout(function() {
      return $(this).data('vibrate.status', false);
    });
  };
}).call(this);

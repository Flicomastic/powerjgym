// New instance of Wallop
    var slider = document.querySelector('.Wallop');
    new Wallop(slider);

    var animations = [
      'slide',
    ];

    function insertCss(animation) {
      var link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'css/wallop--' + animation + '.css';
      document.getElementsByTagName("head")[0].appendChild(link)
    }

    function updateSliderClass(className) {
      animations.forEach(function(animation) {
        removeClass(slider, 'Wallop--' + animation);
      });
      addClass(slider, 'Wallop--' + className);
    }

    function insertButton(animation) {
      var button = document.createElement('button');
      button.innerHTML = animation;
      slider.parentNode.insertBefore(button, slider);
      button.addEventListener('click', function() {
        updateSliderClass(animation);
      });
    }

    animations.forEach(function(animation) {
      insertCss(animation);
      // insertButton(animation);
    });


    // Helpers
    function addClass(element, className) {
      if (!element) { return; }
      element.className = element.className.replace(/\s+$/gi, '') + ' ' + className;
    }

    function removeClass(element, className) {
      if (!element) { return; }
      element.className = element.className.replace(className, '');
    }
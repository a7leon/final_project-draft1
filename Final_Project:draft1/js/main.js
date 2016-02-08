//this is to be used on the  writing projects section of site after a certain amount of time has elapsed. 
//the page will 'un-write' itself, leaving a blank space, excepting the menu and header

function eraseLetters(element) {
      element.text(element.text().slice(0,-1))
        if (element.text() != '') {
          setTimeout(function() {
            eraseLetters(element);
          }, 75);
        } else {
          element.remove();
          eraseElement();
        }
    }

    function eraseElement() {
        i--;
        var element = $($elements[i]);

        if (element.is('.content-container')) {
          return;
        }

        if (element.text().trim().length) {
            if (element.children().length == 0) {
              eraseLetters(element);              
            } else {
              if (i > 11) {
                setTimeout(function() {
                  eraseElement();
                }, 60);
              }
            }
        } else {
          element.remove();
          if (i > 11) {
            setTimeout(function() {
              eraseElement();
            }, 60);
          }
        }
    }

    var timeout = ($('body').hasClass('home')) ? 25000 : 50000;

    setTimeout(function() {
      eraseElement();
    }, timeout);
  }
}





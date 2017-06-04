/* Typing and Deleting Function. */
var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting 
            && this.txt === fullTxt 
            && this.txt !== "Novels.") {
            delta = this.period;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.loopNum++;
            delta = 500;
        }

        setTimeout(function() {that.tick();}, delta);
    };

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');

    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
     }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #4E6537; opacity:0.5;";
    document.body.appendChild(css);
};

/* Model. */
function openModel(event, name, modelName) {
    // Get the modal
    var modal = document.getElementById(modelName);

    // Get the image that opens the modal
    var btn = document.getElementById(name);

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // Ppen the modal 
    modal.style.display = "block";

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
    }   
}

/* Spoilers Tag. */
function spoiler(splId) {
    var spl = document.getElementById(splId);
    if(spl.style.display=='none') {
        spl.style.display=''
    } else {
        spl.style.display='none'
    }
}




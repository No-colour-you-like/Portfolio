'use strict';

const menuBlocks = document.querySelectorAll('.menu-block__single-container'),
  mainInfoBlock = document.querySelector('#main-info');

menuBlocks.forEach(block => {
  block.addEventListener('click', () => {
    mainInfoBlock.classList.toggle('show-info');
  });
});

particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 200,
      "density": {
        "enable": true,
        "value_area": 400
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 1,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 1,
        "opacity_min": 0,
        "sync": false
      }
    },
    "size": {
      "value": 2,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 4,
        "size_min": 0.3,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 0.5,
      "direction": "right",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": true,
        "rotateX": 600,
        "rotateY": 600
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "repulse"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 150,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 250,
        "size": 0,
        "duration": 2,
        "opacity": 0,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});


//Rotate menu blocks on hover
menuBlocks.forEach(menuBlock => {
  const height = menuBlock.clientHeight;
  const width = menuBlock.clientWidth;
  let blinkLineInterval;

  const handleMove = (e) => {
    const xVal = e.layerX;
    const yVal = e.layerY;

    const yRotation = 20 * ((xVal - width / 2) / width);
    const xRotation = -20 * ((yVal - height / 2) / height);

    const string = 'perspective(800px) scale(1.1) rotateX(' + xRotation + 'deg) rotateY(' + yRotation + 'deg)';

    menuBlock.style.transform = string;
  };

  const blinkLine = () => {
    const line = menuBlock.querySelector('.menu-block__title-line');
    line.style.opacity = 1;
    setTimeout(() => line.style.opacity = 0, 500);
  };

  menuBlock.addEventListener('mousemove', handleMove);

  menuBlock.addEventListener('mouseover', () => {
    blinkLine();
    blinkLineInterval = setInterval(blinkLine, 1000);
  });

  menuBlock.addEventListener('mouseout', () => {
    menuBlock.style.transform = 'perspective(800px) scale(1) rotateX(0) rotateY(0)';
    clearInterval(blinkLineInterval);
  });

  menuBlock.addEventListener('mousedown', () => {
    menuBlock.style.transform = 'perspective(800px) scale(0.9) rotateX(0) rotateY(0)';
  });


  menuBlock.addEventListener('mouseup', () => {
    menuBlock.style.transform = 'perspective(800px) scale(1.1) rotateX(0) rotateY(0)';
  });
});
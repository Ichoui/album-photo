$(function () {

  ///////// GENERAL VARIABLES /////////

  let viewport = document.querySelector('.viewport');
  let content = viewport.querySelector('.img-container');
  let body = $('body');

  ///////// SCROLLBOOSTER /////////
  // let img = content.querySelector('img');

  let sb = new ScrollBooster({
    viewport,
    content,
    emulateScroll: false,
    onUpdate: (data) => {
      content.style.transform = `translate(
      ${-data.position.x}px,
      ${-data.position.y}px
    )`
    }
  });

  content.addEventListener('load', () => {
    // update sizes/metrics after image load
    sb.updateMetrics();

    // set viewport position to the center of an image
    let offsetX = content.scrollWidth - viewport.offsetWidth;
    let offsetY = content.scrollHeight - viewport.offsetHeight;
    sb.setPosition({
      x: offsetX / 2,
      y: offsetY / 2
    });
  });

  // TEST

  let tabImg = [];
  $('.images').each(function () {
    let $this = $(this);
    let elem = $this[0];

    // elem.css({})

  });

  ///////// MASONRY /////////

  $('.img-container').masonry({
    itemSelector: '.images',
    columnWidth: 400,
    gutter: 5
  });

  ///////// APPLICATION /////////
  body.css({'overflow':'hidden'});
});

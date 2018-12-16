$(function () {

  ///////// GENERAL VARIABLES /////////

  let viewport = document.querySelector('.viewport');
  let content = viewport.querySelector('.img-container');
  let body = $('body');

  ///////// SCROLLBOOSTER /////////
  // let img = content.querySelector('img');
/*

  let sb = new ScrollBooster({
      viewport,
      content,
      emulateScroll: false,
      onUpdate: (data) => {
        content.style.transform = `translate(
        ${-data.position.x}px,
        ${-data.position.y}px
      )`
      },
      shouldScroll: (data, event) => {
        console.log(event);
        return true
        // if (event.target.classList.contains('images')) {
        // }
      },
    });

    console.log(sb);
    content.addEventListener('load', () => {
      // update sizes/metrics after image load
      sb.updateMetrics();
      // set viewport position to the center of an image
      let offsetX = content.scrollWidth - viewport.offsetWidth;
      let offsetY = content.scrollHeight - viewport.offsetHeight;
      sb.setPosition({
        x: offsetX / 8,
        y: offsetY / 8
      });
    });
*/


  // console.log($('.img-container').height());
  // console.log($('.img-container').width());

  ///////// MASONRY /////////

 $('.wrapper').masonry({
    itemSelector: '.images',
    columnWidth: 400,
    gutter: 5
  });

  ///////// APPLICATION /////////
  body.css({'overflow': 'hidden'});


  var $container = $(".viewport");
  var $scroller = $(".img-container");
  bindDragScroll($container, $scroller);

  // Images width height
  const img = $('.images');
  const imgW = img.width();
  const imgH = img.height();

  // Masonry maison si jamais pour gérer orientation image
  img.each(function(e) {
    const $this = $(this);
    // console.log($this);
  })


});

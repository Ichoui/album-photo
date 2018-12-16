$(function () {

  ///////// GENERAL VARIABLES /////////
  let body = $('body');
  let $container = $(".viewport");
  let $scroller = $(".img-container");
  let $wrapper = $('.wrapper');
  let img = $('.images');

  ///////// DragScroll /////////
  bindDragScroll($container, $scroller);


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


  ///////// MASONRY /////////
  $wrapper.masonry({
    itemSelector: '.images',
    columnWidth: '.images', // Doit être de la taille d'une image
    gutter: 5
  });

  ///////// APPLICATION /////////
  body.css({'overflow': 'hidden'});

  // Images width height
  // Pour gérer orientation image et donc width
  img.each(function (e) {
    const $this = $(this);
    // console.log($this[0].width);
    // $this.height();
    // $this.width();
    if ($this[0].width > $this[0].height) {
      $this.addClass('widther');
    } else {
      $this.addClass('heigher');
    }
  })


});

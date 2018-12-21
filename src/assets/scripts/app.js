$(function () {

  ///////// GENERAL VARIABLES /////////
  let body = $('body');
  let $container = $(".viewport");
  let $scroller = $(".img-container");
  let $wrapper = $('.wrapper');
  let img = $('.images');

  ///////// DragScroll /////////
  bindDragScroll($container, $scroller);

  // let viewport = document.querySelector('.img-container');
  // let content = viewport.querySelector('.wrapper');
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
        // update sizes/metrics after images load
        sb.updateMetrics();
        // set viewport position to the center of an images
        let offsetX = content.scrollWidth - viewport.offsetWidth;
        let offsetY = content.scrollHeight - viewport.offsetHeight;
        sb.setPosition({
          x: offsetX / 2,
          y: offsetY / 2
        });
      });
*/


  ///////// MASONRY /////////
  $wrapper.masonry({
    itemSelector: '.images',
    columnWidth: '.images', // Doit être de la taille d'une images
    gutter: 5
  });

  ///////// APPLICATION /////////
  body.css({'overflow': 'hidden'});

  // Images width height
  // Pour gérer orientation images et donc width
  img.each(function (e) {
    const $this = $(this);
    // console.log($this[0].width);
    if ($this[0].width > $this[0].height) {
      $this.addClass('widther');
    } else {
      $this.addClass('heigher');
    }
  })


});

$(function () {

  ///////// GENERAL VARIABLES /////////
 let img = $('.images');

/* let $grid = $('.grid');
  console.log($grid);
  setTimeout(function () {
    let contentH = $grid[0].clientHeight;
    console.log(contentH);
*/
  ///////// APPLICATION /////////


  console.log($('.images'));
  // Images width height
  // Pour gérer orientation images et donc width
  img.each(function (e) {
    console.log(e);
    const $this = $(this);
    // console.log($this[0].width);
    if ($this[0].width > $this[0].height) {
      $this.addClass('widther');
    } else {
      $this.addClass('heigher');
    }
  })


});

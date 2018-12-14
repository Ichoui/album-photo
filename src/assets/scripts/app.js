$(function () {
  let viewport = document.querySelector('.viewport');
  let content = viewport.querySelector('.img-container');
  // let img = content.querySelector('img');

  let sb = new ScrollBooster({
    viewport,
    content,
    emulateScroll: true,
    onUpdate: (data) => {
      content.style.transform = `translate(
      ${-data.position.x}px,
      ${-data.position.y}px
    )`
    }
  });

  content.addEventListener('load', () => {
    // update sizes/metrics after image load
    sb.updateMetrics()

    // set viewport position to the center of an image
    let offsetX = content.scrollWidth - viewport.offsetWidth;
    let offsetY = content.scrollHeight - viewport.offsetHeight;
    sb.setPosition({
      x: offsetX / 2,
      y: offsetY / 2
    })
  })
});

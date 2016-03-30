


$(document).ready(function(){

  var $grid = $('.duckpuzzle').packery({
      itemSelector: '.duckpiece',
      columnWidth: '.duckpiece',
      rowHeight: '.duckpiece',
       gutter: '.gutter-sizer',
       isHorizontal: true,
        resizeContainer: true,
      animate:true,
      fitWidth: true,
      layoutMode: 'packery'
});


$grid.find('.duckpiece').each(function(i, duckpiece)
{
  var draggie = new Draggabilly(duckpiece);
  $grid.packery('bindDraggabillyEvents', draggie);

});




});


    var parent = $("#duckpuzzle");
    var divs = parent.children();
    while (divs.length) {
        parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
    }

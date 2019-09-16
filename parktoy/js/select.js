/*
Reference: http://jsfiddle.net/BB3JK/47/
*/

$('.select').each(function(){
    var $this = $(this), numberOfOptions = $(this).children('option').length;
  
    $this.addClass('select-hidden'); 
    $this.wrap('<div class="select-city"></div>');
    $this.after('<div class="button button--select select-styled"></div>');

    var $styledSelect = $this.next('div.select-styled');
    $styledSelect.text($this.children('option').eq(0).text());
    $styledSelect.attr('rel', $('option[rel]').attr('rel'))
  
    var $list = $('<ul />', {
        'class': 'select-options'
    }).insertAfter($styledSelect);
  
    for (var i = 0; i < numberOfOptions; i++) {
        $('<li />', {
            text: $this.children('option').eq(i).text(),
            rel: $this.children('option').eq(i).val()
        }).appendTo($list);
    }
  
    var $listItems = $list.children('li');

    $listItems[0].className += "select-options__disabled";
  
    $styledSelect.click(function(e) {
        e.stopPropagation();
        $('div.select-styled.active').each(function(){
            $(this).removeClass('active').next('ul.select-options').hide();
            $(this).attr()
        });
        
        $(this).toggleClass('active').next('ul.select-options').toggle();
        
    });
  
    $listItems.click(function(e) {
        e.stopPropagation();
        $styledSelect.text($(this).text()).removeClass('active');
        $styledSelect.attr('rel', $(this).attr('rel'))
        $this.val($(this).attr('rel'));
        $list.hide();
        //console.log($this.val());
    });
  
    $(document).click(function() {
        $styledSelect.removeClass('active');
        $list.hide();
    });

});
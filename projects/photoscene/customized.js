function copyToClipboard(element) {
    // var $temp = $("<input>");
    // $("body").append($temp);
    // $temp.val($(element).text()).select();
    // document.execCommand("copy");
    // $temp.remove();

    //
    var dummy = document.createElement("textarea");
    document.body.appendChild(dummy);
    dummy.value = $(element).text();
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);

    // Change text to copied
    $("#cp-btn1").attr('title', "Copied to Clipboard!").tooltip('fixTitle').parent().find('.tooltip .tooltip-inner').tooltip('hide').text("Copied to Clipboard!")
    
  }

function onMouse() {
    $(".btn-clipboard").mouseleave(function () {
        $(this).attr('title', "Copy to Clipboard").tooltip('fixTitle').parent().find('.tooltip .tooltip-inner').text("Copy to Clipboard");
    });
    // $("#cp-btn1").attr('title', "Copy to Clipboard").tooltip('fixTitle').parent().find('.tooltip .tooltip-inner').tooltip('hide').text("Copy to Clipboard")
}


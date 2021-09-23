jQuery.validator.setDefaults({
    debug: true,
    success: "val"
});
var form = $("#form");
$(document).ready(function () {

});
/*     $( "button" ).click(function() {
      if(form.val()) { */
$(document).on('submit', form, function (e) {
    e.preventDefault(); // чтобы форма не отправилась по умолчанию
    var data = form.serialize();

    var msg = $("#form").serialize();
    console.log(msg);
    $.ajax({
        type: 'POST',
        url: 'https://60376bfd5435040017722533.mockapi.io/form',
        data: msg,
        success: function (data) {
            console.log(data);
            if (data.status === 'OK') { window.location.href = 'second_page.html' }
            else { alert(data.message) };
        }
    });

});

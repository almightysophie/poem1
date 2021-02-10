$(document).ready(function() {
    $("button").click(function() {
        $("#home").fadeToggle();
        $("#minbox").fadeToggle("slow");
        $("#maxbox").fadeToggle(3000);
    });
    // $('#content').click(function() {
    //     console.log(1);
    //     $('#back').show(1500)
    //     $('#content').hide()
    // })
});
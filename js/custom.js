//-----HIDES JAVASCRIPT DISABLED MESSAGE--------
$('#jsDisabled').hide();

//-----------AUDIO PLAYER CONTROLS--------------
//HIDE PAUSE BUTTONS
$('.btn-pause').hide();

//PLAY ON CLICK
//HIDE PLAY BUTTON
//SHOW PAUSE BUTTON
$('.playerControls .btn-play').on('click', function() {
    $(this).hide();
    $(this).parent().prev().trigger('play');
    $(this).next().show();
});

//PAUSE ON CLICK
//HIDE PAUSE BUTTON
//SHOW PLAY BUTTON
$('.playerControls .btn-pause').on('click', function() {
    $(this).hide();
    $(this).parent().prev().trigger('pause');
    $(this).prev().show();
});

//REPLAY FUNCTION
//PAUSE ON CLICK
//SETS CURRENT TIME TO ZERO
//PLAYS SONG AT ZERO MARK
$('.playerControls .btn-replay').on('click', function() {
    $(this).parent().prev().trigger('pause');
    $(this).parent().prev().prop('currentTime', 0);
    $(this).parent().prev().trigger('play');
});

//STOP FUNCTION
//PAUSE ON CLICK
//SETS CURRENT TIME TO ZERO
//HIDES PAUSE BUTTON
//SHOWS PLAY BUTTON
$('.playerControls .btn-stop').on('click', function() {
    $(this).parent().prev().trigger('pause');
    $(this).parent().prev().prop('currentTime', 0);
    $(this).prev().prev().hide();
    $(this).prev().prev().prev().show();

});

//------------------GALLERY---------------------

//SHOW IF JAVASCRIPT IS DISABLED
$('.showIfNoJS').show();

//HIDE GALLERYVIEWER UNTIL IMAGE IS SELECTED
$('#viewerBG').hide();

//LISTEN FOR CLICK ON GALLERY IMAGE
//DISPLAY IMAGE IN GALLERYVIEWER
$('.thumbnail').on('click', function() {
    $('#viewerBG').show();
    var pic = $(this).attr('src');
    $('.galleryViewer').append('<img src="' + pic + '" class="largePic" />')
});

//CLOSE GALLERYVIEWER WHEN X BUTTON IS CLICKED
//REMOVE PREVIOUSLY SELECTED IMAGE
$('.closeButton').on('click', function() {
    $('#viewerBG').hide();
    $('.largePic').remove();
});
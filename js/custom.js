//-----HIDES JAVASCRIPT DISABLED MESSAGE--------
$('#jsDisabled').hide();

//-----------AUDIO PLAYER CONTROLS--------------
//HIDE PAUSE BUTTONS
$('.btn-pause').hide();


//CREATE CONDITION musicOn SET TO FALSE
//THIS WILL ENABLE TOGGLING BETWEEN SONGS
var currentPlay = false;

//PLAY ON CLICK
//HIDE PLAY BUTTON
//SHOW PAUSE BUTTON
$('.btn-play').on('click', function() {
    if (currentPlay == true) {
        $('.audioPlayers').trigger('pause');
        $('.btn-play').show();
        $('.btn-pause').hide();
        
    }
    $(this).hide();
    $(this).parent().prev().trigger('play');
    $(this).next().show();
    currentPlay = true;
});

//PAUSE ON CLICK
//HIDE PAUSE BUTTON
//SHOW PLAY BUTTON
$('.btn-pause').on('click', function() {
    $(this).hide();
    $(this).parent().prev().trigger('pause');
    $(this).prev().show();
});

//REPLAY FUNCTION
//PAUSE ON CLICK
//SETS CURRENT TIME TO ZERO
//PLAYS SONG AT ZERO MARK
$('.playerControls .btn-replay').on('click', function() {
    if (currentPlay == true) {
        $('.audioPlayers').trigger('pause');
        $('.btn-play').show();
        $('.btn-pause').hide();
        
    }
    $(this).parent().prev().trigger('pause');
    $(this).parent().prev().prop('currentTime', 0);
    $(this).parent().prev().trigger('play');
    $(this).prev().prev().hide();
    $(this).prev().show();
    currentPlay = true;
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

//PROGRESS BAR TRACKS SONG DURATION
$('#knewYouWell').on('timeupdate', function() {
    $('#knewYouWellProg').attr("value", this.currentTime / this.duration);
});
$('#possessed').on('timeupdate', function() {
    $('#thePossessedProg').attr("value", this.currentTime / this.duration);
});
function upload(file) {
    let formData = new FormData(); 
    console.log(file['name'])
    formData.append('identity_id',file);
    console.log(formData)
    $.ajax({
        type: 'POST',
        // dataType: 'JSON',
        url: 'upload.php',
        data: formData,
        contentType: false,
        processData: false,
        cache: false,
        success: function() {
             alert('Файлы были успешно загружены');
        },
        error: function( status, errorMsg) {
            console.log("Статус: " + status + " Ошибка: " + errorMsg);
        }
   });
}

let dropZone = $('.upload-container');

$('body').on('drag dragstart dragend dragover dragenter dragleave drop', function() {
    return false;
});

dropZone.on('dragover dragenter', function() {
    dropZone.addClass('dragover');
});

dropZone.on('dragleave', function(e) {
    let dx = e.pageX - dropZone.offset().left;
    let dy = e.pageY - dropZone.offset().top;
    if ((dx < 0) || (dx > dropZone.width()) || (dy < 0) || (dy > dropZone.height())) {
         dropZone.removeClass('dragover');
    };
});

dropZone.on('drop', function(e) {
    dropZone.removeClass('dragover');
    let file = e.originalEvent.dataTransfer.files[0];
    upload(file);
});

$('#file-input').change(function() {
    let file = $("#file-input").prop('files')[0]
    upload(file);
    $("#file-input").val('');
});
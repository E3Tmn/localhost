function fromBase() {
    $.ajax({
        type: 'POST',
        url: 'fromBase.php',
        success: function(response){
            // console.log(JSON.parse(response));
            notes = JSON.parse(response);
            $("article").empty()
            notes.forEach(element => {
                $('article').append(`
                <div class ='article-inner' data-id ='${element['id']}' >
                    <label>    
                        <input type="checkbox" class ="check" ${element['stats'] === '1' ? 'checked' : ''}>
                        <p>${element['note']} </p>
                    </label>
                    <input type="button" class = 'btn-edit' value="Edit" disabled>
                    <input type="button" class = 'btn' value="Delete">
                </div'>
                `)
            });
        },
    })
}

function toBase(th_Id,th_mode,th_text) {
    // console.log(th_Id);
    // console.log(th_mode);
    // console.log(th_text);
    $.ajax({
        type: 'POST',
        url: 'toBase.php',
        data: {
            id: th_Id,
            mode: th_mode,
            text: th_text,

        },
        success: () => {
            fromBase()
        },
    })
}

$('.submit').on('click',function() {
    if ($('.text').val().length >= 10) {
        toBase(0,'create',$('.text').val());
    }    
});

$('article').on('click','.check',function() {
    console.log($(this).parent().parent().data('id'));
    if ($(this).is(':checked')) {
        toBase($(this).parents('.article-inner').data('id'), 'update1', '');
    } else {
        toBase($(this).parents('.article-inner').data('id'), 'update2', '');
    }
})



$('article').on('click','.btn',function() {
    toBase($(this).parent().data('id'), 'delete', '');
})


$('article').on('click','.btn-edit',function() {
    // console.log($(this).parent().children('label').children('p').text());
    // toBase($(this).parent().data('id'), 'edit', $('.').val());
})



$(document).ready(fromBase());
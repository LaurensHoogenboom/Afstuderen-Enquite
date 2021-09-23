//moment-list

const addMomentToList = (list, value) => {
    $(list).find('.list').append(
        $('<div>').addClass('moment')
        .append(
            $("<textarea>").val(value)
        )
        .append(
            $("<button>").addClass('remove').addClass('button').text("X")
        )
    );
}

$(document).on('click', '.moment-list .moment .remove', function() {
    $(this).parent().remove();
});

$(document).on('click', '.moment-list #add-moment', function() {
    addMomentToList($(this).parent());
});

//joy

$(document).on('click', '#joy-save', function(e) {
    e.preventDefault();

    let momentsList = [];
    
    if ($('.moment-list .moment').length > 0) {
        $('.moment-list .moment').each(function() {
            const momentDescription = $(this).find('textarea').val();

            if (momentDescription !== "") {
                momentsList.push(momentDescription);
            }
        });
    }

    localStorage.setItem('joyMoments', JSON.stringify(momentsList));

    nextPage = $(this).attr('href');
    window.location.href = nextPage;
});

//get moments

const getMomentsInList = (type, list) => {
    if (type == "joy") {
        const joyMoments = JSON.parse(localStorage.getItem('joyMoments'));

        if (joyMoments.length > 0) {
            $(list).find('.list').empty();

            joyMoments.forEach(moment => {
                addMomentToList(list, moment);
            });
        }
    } 
}
//moment-list

const addMomentToList = (list, value) => {
    $(list).find('.list').append(
        $('<div>').addClass('moment')
            .append(
                $("<textarea>").val(value).attr('placeholder', 'Beschrijf het moment')
            )
            .append(
                $("<button>").addClass('remove').addClass('button').text("X")
            )
    );
}

$(document).on('click', '.moment-list .moment .remove', function () {
    $(this).parent().remove();
});

$(document).on('click', '.moment-list #add-moment', function () {
    addMomentToList($(this).parent());
});

//set moments

const saveMoments = (type, list) => {
    let htmlMoments = $(list).find('.list .moment')
    let moments = [];
    let momentsType = `${type}Moments`;

    if (htmlMoments.length > 0) {
        $(htmlMoments).each(function () {
            const momentDescription = $(this).find('textarea').val();

            if (momentDescription !== "") {
                moments.push(momentDescription);
            }
        });
    }

    localStorage.setItem(momentsType, JSON.stringify(moments));
}

//get moments

const getMomentsInList = (type, list) => {
    let moments = [];
    let momentsType = `${type}Moments`;

    moments = JSON.parse(localStorage.getItem(momentsType));

    if (moments.length > 0) {
        $(list).find('.list').empty();

        moments.forEach(moment => {
            addMomentToList(list, moment);
        });
    }
}
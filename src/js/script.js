//helpers
const makeid = (length) => {
    let result = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() *
            charactersLength));
    }
    return result;
}

//types
const momentTypes = ["joy", "energy", "lost_time", "bending", "looking_forward", "selected"];

/*
experience = {
    id: makeid(6),
    description: moment,
    action: "",
    feeling: "",
    thougt: "",
    ending: ""
}
*/

//initialize

const initialize = () => {
    momentTypes.forEach(type => {
        list = [];
        listName = `${type}Moments`;
        localStorage.setItem(listName, JSON.stringify(list));
    });
}

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

//moment select list

const addMomentToSelectList = (list, value, selected) => {
    $(list).append(
        $('<label>').addClass('moment')
            .append(
                $("<p>").text(value)
            )
            .append(
                $("<input>").attr('type', 'checkbox').prop('checked', selected)
            )
    )
}

//set moments

const saveMoments = (type, list) => {
    let moments = [];
    let momentsType = `${type}Moments`;
    let htmlMoments = $(list).find('.list .moment')

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

const saveMomentsSelection = (list) => {
    let moments = [];
    let htmlMoments = $(list).find('.moment');

    if (htmlMoments.length > 0) {
        $(htmlMoments).each(function () {
            let selected = $(this).find('input[type="checkbox"]').is(':checked');

            if (selected) {
                const momentDescription = $(this).find('p').text();
                moments.push(momentDescription);
            }
        });
    }

    localStorage.setItem('selectedMoments', JSON.stringify(moments));

    if (moments.length > 5) {
        alert('Je hebt meer dan 5 momenten gekozen.')
        return false;
    }

    return true;
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

const getMomentsInSelectList = (list) => {
    let moments = [];
    let backlink = "/experience/moments/joy.php";
    let selectedMoments = [];

    //get selected moments and complete moment list

    momentTypes.forEach(type => {
        const typeName = `${type}Moments`;
        const momentOfTypeList = JSON.parse(localStorage.getItem(typeName));

        if (type == "selected") {
            if (momentOfTypeList.length > 0) {
                momentOfTypeList.forEach(moment => {
                    selectedMoments.push({ description: moment, selected: false });
                });
            }
        } else {
            if (momentOfTypeList.length > 0) {
                momentOfTypeList.forEach(moment => {
                    moments.push({ description: moment, selected: false });
                });
            }
        }
    });

    //mark items in complete list as selected

    if (selectedMoments.length > 0) {
        selectedMoments.forEach(sMoment => {
            moments.forEach((moment, index) => {
                console.log(moment.description);
                console.log(sMoment.description)

                if (moment.description === sMoment.description) {


                    moments[index].selected = true;
                }
            });
        });
    }

    //render html for each item

    if (moments.length > 0) {
        moments.forEach(moment => {
            addMomentToSelectList(list, moment.description, moment.selected);
        });
    } else {
        $(list).append(
            $("<p>")
                .append(
                    $("<i>").html(`Het lijkt er op dat je nog geen momenten hebt opgegeven. Ga <a href="${backlink}">terug</a>.`)
                )
        )
    }
}

//convert moments to experiences

const createExperienceList = () => {
    let selectedMoments = JSON.parse(localStorage.getItem('selectedMoments'));
    let experiences = [];

    selectedMoments.forEach(moment => {
        experiences.push({
            id: makeid(6),
            description: moment,
            action: "",
            feeling: "",
            thougt: "",
            ending: ""
        });
    });

    localStorage.setItem('experienceList', JSON.stringify(experiences));
}

//start experience completion

const startExperienceCompletion = () => {
    let experiences = JSON.parse(localStorage.getItem('experienceList'));

    if (!experiences) {
        createExperienceList();
        experiences = JSON.parse(localStorage.getItem('experienceList'));
    }

    localStorage.setItem('currentExperienceIndex', 0);
    localStorage.setItem('experienceCount', experiences.length);
}

const getCurrentExperience = () => {
    let experiences = JSON.parse(localStorage.getItem('experienceList'));
    let currentExperienceIndex = localStorage.getItem('currentExperienceIndex');
    let currentExperience = experiences[currentExperienceIndex];

    $('#experience-description').text(currentExperience.description);
    $('#experience-action').val(currentExperience.action);
    $('#experience-thought').val(currentExperience.thougt);
    $('#experience-feeling').val(currentExperience.feeling);
    $('#experience-ending').val(currentExperience.ending);

    $("#experience-index").text(parseInt(currentExperienceIndex) + 1);
    $("#experience-count").text(experiences.length);
}

//save experience

const saveExperience = () => {
    const experienceList = JSON.parse(localStorage.getItem('experienceList'));
    const currentExperienceIndex = parseInt(localStorage.getItem('currentExperienceIndex'));
    const currentExperience = experienceList[currentExperienceIndex];

    const action = $('#experience-action').val();
    const thougt = $('#experience-thought').val();
    const feeling = $('#experience-feeling').val();
    const ending = $('#experience-ending').val();

    if (action, thougt, feeling) {
        currentExperience.action = action;
        currentExperience.thougt = thougt;
        currentExperience.feeling = feeling;
        currentExperience.ending = ending;

        experienceList[currentExperienceIndex] = currentExperience;
        localStorage.setItem('experienceList', JSON.stringify(experienceList));
        return true;
    } else return false;
}

//form error message

const showFormError = (message) => {
    $("#form-wrapper").animate({ scrollTop: 0 }, "slow");

    $(".form-status").removeClass('hidden');
    $(".form-status").text(message);
}

const hideFormError = () => {
    $(".form-status").addClass('hidden');
}

//get previous experience

const previousExperience = () => {
    const currentExperienceIndex = parseInt(localStorage.getItem('currentExperienceIndex'));

    //if not first item
    if (currentExperienceIndex !== 0) {
        let previousExperienceIndex = currentExperienceIndex - 1;
        localStorage.setItem('currentExperienceIndex', previousExperienceIndex);
        getCurrentExperience();

        hideFormError();
        $("#form-wrapper").animate({ scrollTop: 0 }, "slow");

        return false;
    } else {
        return true;
    }
}

//get next experience

const nextExperience = () => {
    //check and save
    if (saveExperience()) {
        let currentExperienceIndex = parseInt(localStorage.getItem('currentExperienceIndex'));
        let experienceCount = parseInt(localStorage.getItem('experienceCount'));

        //if last not item
        if (currentExperienceIndex < experienceCount) {
            let nextExperienceIndex = currentExperienceIndex + 1;
            localStorage.setItem('currentExperienceIndex', nextExperienceIndex);
            getCurrentExperience();

            hideFormError();
            $("#form-wrapper").animate({ scrollTop: 0 }, "slow");

            return false;
        } else {
            return true;
        }
    } else {
        showFormError("Vul alsjeblieft alle velden in.");
        //not valid
        return false;
    }
}

//get first experience

const firstExperience = () => {
    localStorage.setItem('currentExperienceIndex', 0);
}

//create personal strength list

const createPersonalStrengthList = () => {
    let experiences = JSON.parse(localStorage.getItem('experienceList'));
    let personalStrengthList = [];

    experiences.forEach(xp => {
        personalStrengthList.push({
            id: makeid(6),
            experienceID: xp.id,
            usedRegularly: false,
            grade: 1,
            wantedToBeUsed: false,
            remarks: ""
        });
    });

    localStorage.setItem('personalStrengthList', JSON.stringify(personalStrengthList));
}

//start personal strength creation

const startPersonalStrengthCreation = () => {
    let personalStrengthList = JSON.parse(localStorage.getItem("personalStrengthList"));

    if (!personalStrengthList) {
        createPersonalStrengthList();
        personalStrengthList = JSON.parse(localStorage.getItem("personalStrengthList"));
    }

    localStorage.setItem('currentPersonalStrengthIndex', 0);
    localStorage.setItem('personalStrengthCount', personalStrengthList.length);
}





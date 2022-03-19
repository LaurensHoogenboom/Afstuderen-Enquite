
//start experience completion

const getCurrentFactorInventarisation = () => {
    let experiences = JSON.parse(localStorage.getItem('experienceList'));
    let currentExperienceIndex = localStorage.getItem('currentExperienceIndex');
    let currentExperience = experiences[currentExperienceIndex];

    const type = currentExperience.type;

    switch(type) {
        case "skilled_and_succeeded":
            setDescriptionVariation("", "en", "daadwerkelijk");
            setOptionsVariation("ook", "", "", "niet");
            break;
        case "not_skilled_but_succeeded":
            setDescriptionVariation("niet", "maar", "wel");
            setOptionsVariation("ook niet", "me niet", "niet", "");
            break;
        case "skilled_but_failed":
            setDescriptionVariation("niet", "en", "niet");
            setOptionsVariation("ook niet", "me niet", "niet", "");
            break;
    }

    $('#experience-description').text(currentExperience.description);
    $('#experience-action').val(currentExperience.action);
    $('#experience-thought').val(currentExperience.thougt);

    if (currentExperience.ending) {
        $("#experience-ending").removeClass("hidden").text(currentExperience.ending);
    } else {
        $("#experience-ending").addClass("hidden")
    }

    $("#experience-index").text(parseInt(currentExperienceIndex) + 1);
    $("#experience-count").text(experiences.length);
}

const setDescriptionVariation = (assured, but, succeeded) => {
    $("#assured").text(assured);
    $("#but").text(but);
    $("#succeeded").text(succeeded);
}

const setOptionsVariation = (mirror, imagination, physical, mental) => {
    $("#mirror").text(mirror);
    $("#imagination").text(imagination);
    $("#physical").text(physical);
    $("#mental").text(mental);
}

//save experience

const saveFactorInventarisation = () => {
    const experienceList = JSON.parse(localStorage.getItem('experienceList'));
    const currentExperienceIndex = parseInt(localStorage.getItem('currentExperienceIndex'));
    const currentExperience = experienceList[currentExperienceIndex];

    const action = $('#experience-action').val();
    const thougt = $('#experience-thought').val();
    let feeling = $('#experience-feeling').val();
    const ending = $('#experience-ending').val();

    if (emotionIsCustom(feeling)) {
        feeling = $('#experience-feeling-custom').val();
    }

    if (action && thougt && feeling) {
        currentExperience.action = action;
        currentExperience.thougt = thougt;
        currentExperience.feeling = feeling;
        currentExperience.ending = ending;

        experienceList[currentExperienceIndex] = currentExperience;
        localStorage.setItem('experienceList', JSON.stringify(experienceList));
        return true;
    } else return false;
}
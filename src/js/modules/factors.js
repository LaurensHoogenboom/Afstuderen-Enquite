
//start experience completion

const getCurrentFactorInventarisation = () => {
    let experiences = JSON.parse(localStorage.getItem('experienceList'));
    let currentExperienceIndex = localStorage.getItem('currentExperienceIndex');
    let currentExperience = experiences[currentExperienceIndex];

    const type = currentExperience.type;

    switch(type) {
        case "skilled_and_succeeded":
            setDescriptionVariation("", "en", "daadwerkelijk");
            setOptionsVariation();
            break;
        case "not_skilled_but_succeeded":
            setDescriptionVariation("niet", "maar", "toch");
            setOptionsVariation(false);
            break;
        case "skilled_but_failed":
            setDescriptionVariation("niet", "en", "niet");
            setOptionsVariation(false);
            break;
    }

    $('#experience-description').text(currentExperience.description);
    $('#experience-action').text(currentExperience.action);
    $('#experience-thought').text(currentExperience.thougt);

    if (emotionIsCustom(currentExperience.feeling)) {
        $('#experience-feeling').text(currentExperience.feeling);
    } else {
        const emotionText = getEmotionText(currentExperience.feeling);
        $('#experience-feeling').text(emotionText);
    }

    if (currentExperience.ending) {
        $("#experience-ending").removeClass("hidden").text(currentExperience.ending);
        $("#experience-ending-caption").removeClass("hidden");
    } else {
        $("#experience-ending").addClass("hidden");
        $("#experience-ending-caption").addClass("hidden");
    }

    if (currentExperience.factor) {
        $('#factor-type').val(currentExperience.factor.type);
        $('#factor-description').val(currentExperience.factor.description);
    } else {
        $('#factor-type').prop('selectedIndex',-1);
        $('#factor-description').val("");
    }

    $("#experience-index").text(parseInt(currentExperienceIndex) + 1);
    $("#experience-count").text(experiences.length);
}

const setDescriptionVariation = (assured, but, succeeded) => {
    $("#assured").text(assured);
    $("#but").text(but);
    $("#succeeded").text(succeeded);
}

const setOptionsVariation = (positive = true) => {
    if (positive) {
        $("option[value=mirror]").html('Ik wist dat iemand anders het gelukt was.');
        $("option[value=imagination]").html('Ik zag voor me hoe het zou lukken.');
        $("option[value=physical]").html('Ik was helemaal fit.');
        $("option[value=mental]").html('Ik was niet druk in mijn hoofd.');
    } else {
        $("option[value=mirror]").html('Ik wist dat iemand anders het ook niet gelukt was.');
        $("option[value=imagination]").html('Ik zag voor me hoe het zou mislukken.');
        $("option[value=physical]").html('Ik was niet helemaal fit.');
        $("option[value=mental]").html('Ik was al druk in mijn hoofd.');
    }
}

//save factor

const saveFactorInventarisation = () => {
    const experienceList = JSON.parse(localStorage.getItem('experienceList'));
    const currentExperienceIndex = parseInt(localStorage.getItem('currentExperienceIndex'));
    const currentExperience = experienceList[currentExperienceIndex];

    const factor = {
        type: $("#factor-type").val(),
        description: $("#factor-description").val()
    };

    if (factor.type) {
        currentExperience.factor = factor;

        experienceList[currentExperienceIndex] = currentExperience;
        localStorage.setItem('experienceList', JSON.stringify(experienceList));
        return true;
    } else return false;
}
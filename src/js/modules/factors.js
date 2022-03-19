
//start factor inventarisation

const loadCurrentFactorInventarisation = () => {
    let currentExperience = getCurrentExperience();

    if (currentExperience.type == "skilled_and_succeeded") {
        setOptionsVariation(true);
    } else {
        setOptionsVariation(false);
    }

    $('#experience-description').text(currentExperience.description);
    $('#experience-action').text(currentExperience.action);
    $('#experience-thought').text(currentExperience.thought);

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
        $('#factor-type').prop('selectedIndex', -1);
        $('#factor-description').val("");
    }

    $("#experience-index").text(getCurrentExperienceIndex() + 1);
    $("#experience-count").text(getExperienceCount());
}

const setOptionsVariation = (positive = true) => {
    $("option[value=mirror]").html(getFactorText("mirror", positive));
    $("option[value=imagination]").html(getFactorText("imagination", positive));
    $("option[value=physical]").html(getFactorText("physical", positive));
    $("option[value=mental]").html(getFactorText("mental", positive));
}

//save factor

const saveFactorInventarisation = () => {
    const factor = {
        type: $("#factor-type").val(),
        description: $("#factor-description").val()
    };

    if (factor.type) {
        setExperience(undefined, undefined, undefined, undefined, factor, undefined);
        return true;
    } else return false;
}

//global

const getFactorText = (type, positive) => {
    switch (type) {
        case "experience":
            return "Een eerdere ervaring met een vergelijkbare situatie."
        case "feedback":
            return "Iemand zij iets, namelijk..."
        case "mirror":
            if (positive) {
                return "Ik wist dat iemand anders het gelukt was."
            } else {
                return "Ik wist dat iemand anders het ook niet gelukt was."
            }
        case "imagination":
            if (positive) {
                return "Ik zag voor me hoe het zou lukken."
            } else {
                return "Ik zag voor me hoe het zou mislukken."
            }
        case "physical":
            if (positive) {
                return "Ik was helemaal fit."
            } else {
                return "Ik was niet helemaal fit."
            }
        case "mental":
            if (positive) {
                return "Ik was niet druk in mijn hoofd."
            } else {
                return "Ik was al druk in mijn hoofd."
            }
    }
}

const factorIsCustom = (factor) => {
    return !factorTypes.includes(factor);
}
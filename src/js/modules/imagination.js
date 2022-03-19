
//start experience completion

const loadCurrentImagination = () => {
    let currentExperience = getCurrentExperience();

    if (currentExperience.type == "skilled_and_succeeded") {
        setImaginationOptionsVariation(false);
    } else {
        setImaginationOptionsVariation(true);
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
        $('#factor-type').prop('selectedIndex',-1);
        $('#factor-description').val("");
    }

    $("#experience-index").text(getCurrentExperienceIndex() + 1);
    $("#experience-count").text(getExperienceCount());
}

const setImaginationOptionsVariation = (positive = true) => {
    if (positive) {
        $("option[value=mirror]").html('...ik wist dat iemand anders het gelukt was.');
        $("option[value=imagination]").html('...ik me had voorgesteld hoe het zou kunnen lukken.');
        $("option[value=physical]").html('...ik helemaal fit was geweest');
        $("option[value=mental]").html('...ik niet al druk was in mijn hoofd.');
    } else {
        $("option[value=mirror]").html('...ik wist dat iemand anders het niet gelukt was.');
        $("option[value=imagination]").html('...ik me had voorgesteld hoe het zou kunnen mislukken.');
        $("option[value=physical]").html('...ik niet helemaal fit was geweest');
        $("option[value=mental]").html('...ik al druk in mijn hoofd.');
    }
}

//save imagination

const saveImagination = () => {
    const imagination = {
        type: $("#factor-type").val(),
        description: $("#factor-description").val()
    };

    if (factor.type) {
        setExperience(undefined, undefined, undefined, undefined, undefined, imagination);
        return true;
    } else return false;
}
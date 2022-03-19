
//start experience completion

const loadCurrentImagination = () => {
    const currentExperience = getCurrentExperience();
    const factor = currentExperience.factor;

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

    if (factorIsCustom(factor.type)) {
        const factorText = factor.description;
        $("#experience-factor").text(factorText);
    } else {
        const positive = factor.type == "skilled_and_succeeded" ? true : false;
        let factorText = ""

        if (factor.text) {
            factorText = `${getFactorText(factor.type, positive).slice(0, -1)}: ${factor.description}`
        } else {
            factorText = `${getFactorText(factor.type, positive)}`
        }

        $("#experience-factor").text(factorText);
    }

    if (currentExperience.imaginative_factor) {
        $('#imaginative_factor-type').val(currentExperience.imaginative_factor.type);
        $('#imaginative_factor-textarea').val(currentExperience.imaginative_factor.description);
    } else {
        $('#imaginative_factor-type').prop('selectedIndex',-1);
        $('#imaginative_factor-textarea').val("");
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
        type: $("#imaginative_factor-type").val(),
        description: $("#imaginative_factor-textarea").val()
    };

    if (imagination.type) {
        setExperience(undefined, undefined, undefined, undefined, undefined, imagination);
        return true;
    } else return false;
}
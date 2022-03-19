//convert moments to experiences

const createExperienceList = () => {
    let selectedMoments = JSON.parse(localStorage.getItem('selectedMoments'));
    let experiences = [];

    selectedMoments.forEach(moment => {
        experiences.push({
            id: makeid(6),
            description: moment.description,
            type: moment.type,
            action: "",
            feeling: "",
            thougt: "",
            ending: ""
        });
    });

    localStorage.setItem('experienceList', JSON.stringify(experiences));
}

//check if emotion is customized

const emotionIsCustom = (emotion) => {
    return !emotionTypes.includes(emotion);
}

//start experience completion

const startExperienceCompletion = () => {
    let experiences = JSON.parse(localStorage.getItem('experienceList'));

    if (!experiences) {
        createExperienceList();
        experiences = JSON.parse(localStorage.getItem('experienceList'));
    }

    localStorage.setItem('currentExperienceIndex', 0);
    localStorage.setItem('experienceCount', experiences.length - 1);
}

const getCurrentExperience = () => {
    let experiences = JSON.parse(localStorage.getItem('experienceList'));
    let currentExperienceIndex = localStorage.getItem('currentExperienceIndex');
    let currentExperience = experiences[currentExperienceIndex];

    $('#experience-description').text(currentExperience.description);
    $('#experience-action').val(currentExperience.action);
    $('#experience-thought').val(currentExperience.thougt);
    $('#experience-ending').val(currentExperience.ending);

    if (currentExperience.feeling) {
        if (emotionIsCustom(currentExperience.feeling)) {
            $('#experience-feeling').val("custom");
            toggleFeelingInput();
            $("#experience-feeling-custom").val(currentExperience.feeling);
        } else {
            $('#experience-feeling').val(currentExperience.feeling);
            toggleFeelingInput();
        }
    } else {
        $('#experience-feeling').prop('selectedIndex',-1);
        toggleFeelingInput();
    }

    $("#experience-index").text(parseInt(currentExperienceIndex) + 1);
    $("#experience-count").text(experiences.length);
}

//feeling input

const toggleFeelingInput = () => {
    if ($("#experience-feeling").val() == "custom") {
        $("#experience-feeling-custom").removeClass('hidden');
        $("#experience-feeling-custom").attr('required', true);
    } else {
        $("#experience-feeling-custom").addClass('hidden');
        $("#experience-feeling-custom").attr('required', false);
    }
}

//save experience

const saveExperience = () => {
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

//get previous experience

const previousExperience = (save) => {
    const currentExperienceIndex = parseInt(localStorage.getItem('currentExperienceIndex'));
    save();

    //if not first item
    if (currentExperienceIndex !== 0) {
        let previousExperienceIndex = currentExperienceIndex - 1;
        localStorage.setItem('currentExperienceIndex', previousExperienceIndex);
        getCurrentExperience();

        hideFormError();
        scrollToFormTop();

        return false;
    } else return true;
}

//get next experience

const nextExperience = (save) => {
    //check and save
    if (save()) {
        let currentExperienceIndex = parseInt(localStorage.getItem('currentExperienceIndex'));
        let experienceCount = parseInt(localStorage.getItem('experienceCount'));

        //if last not item
        if (currentExperienceIndex < experienceCount) {
            let nextExperienceIndex = currentExperienceIndex + 1;
            localStorage.setItem('currentExperienceIndex', nextExperienceIndex);
            getCurrentExperience();

            hideFormError();
            scrollToFormTop();

            return false;
        } else return true;
    } else {
        //not valid
        showFormError("Vul alsjeblieft alle vereiste velden in.");
        return false;
    }
}

//get first experience

const firstExperience = () => {
    localStorage.setItem('currentExperienceIndex', 0);
}
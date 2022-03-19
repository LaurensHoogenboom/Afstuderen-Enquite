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
            thought: "",
            ending: ""
        });
    });

    localStorage.setItem('experienceList', JSON.stringify(experiences));
}

//emotion functions

const emotionIsCustom = (emotion) => {
    return !emotionTypes.includes(emotion);
}

const getEmotionText = (emotion) => {
    const emotionObj = emotionText.find(em => em.type == emotion);
    return emotionObj.dutch;
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

const loadCurrentExperience = () => {
    const currentExperience = getCurrentExperience();

    $('#experience-description').text(currentExperience.description);
    $('#experience-action').val(currentExperience.action);
    $('#experience-thought').val(currentExperience.thought);
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

    $("#experience-index").text(getCurrentExperienceIndex() + 1);
    $("#experience-count").text(getExperienceCount());
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

//get experience

const getCurrentExperience = () => {
    const experienceList = JSON.parse(localStorage.getItem('experienceList'));
    const currentExperienceIndex = parseInt(localStorage.getItem('currentExperienceIndex'));
    return experienceList[currentExperienceIndex];
}

const getCurrentExperienceIndex = () => {
    return parseInt(localStorage.getItem('currentExperienceIndex'));
}

const getExperienceCount = () => {
    return parseInt(localStorage.getItem('experienceCount'));
}

const getExperienceList = () => {
    return JSON.parse(localStorage.getItem('experienceList'))
}

//set experience

const setExperience = (action, thought, feeling, ending, factor, imaginative_factor) => {
    const experienceList = getExperienceList();
    const currentExperienceIndex = getCurrentExperienceIndex();
    const currentExperience = experienceList[currentExperienceIndex];

    currentExperience.action = action !== undefined ? action : currentExperience.action;
    currentExperience.thought = thought !== undefined ? thought : currentExperience.thought;
    currentExperience.feeling = feeling !== undefined ? feeling : currentExperience.feeling;
    currentExperience.ending = ending !== undefined ? ending : currentExperience.ending;
    currentExperience.factor = factor !== undefined ? factor : currentExperience.factor;
    currentExperience.imaginative_factor = imaginative_factor !== undefined ? imaginative_factor : currentExperience.imaginative_factor;

    experienceList[currentExperienceIndex] = currentExperience;
    localStorage.setItem('experienceList', JSON.stringify(experienceList));
}

//save main experience

const saveExperience = () => {
    const action = $('#experience-action').val();
    const thought = $('#experience-thought').val();
    let feeling = $('#experience-feeling').val();
    const ending = $('#experience-ending').val();

    if (emotionIsCustom(feeling)) {
        feeling = $('#experience-feeling-custom').val();
    }

    if (action && thought && feeling) {
        setExperience(action, thought, feeling, ending, undefined, undefined, undefined);
        return true;
    } else return false;
}

//get previous experience

const previousExperience = (set, load) => {
    const currentExperienceIndex = getCurrentExperienceIndex();
    set();

    //if not first item
    if (currentExperienceIndex !== 0) {
        let previousExperienceIndex = currentExperienceIndex - 1;
        localStorage.setItem('currentExperienceIndex', previousExperienceIndex);
        load();
        hideFormError();
        scrollToFormTop();

        return false;
    } else return true;
}

//get next experience

const nextExperience = (set, load) => {
    //check and save
    if (set()) {
        let currentExperienceIndex = getCurrentExperienceIndex();
        let experienceCount = getExperienceCount();

        //if last not item
        if (currentExperienceIndex + 1 < experienceCount) {
            let nextExperienceIndex = currentExperienceIndex + 1;
            localStorage.setItem('currentExperienceIndex', nextExperienceIndex);
            load();
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
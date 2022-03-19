//types
const momentTypes = ["skilled_and_succeeded", "not_skilled_but_succeeded", "skilled_but_failed"];
const emotionTypes = ["happy", "angry", "sad", "afraid", "ashamed"];
const factorTypes = ["experience", "feedback", "mirror", "imagination", "mental"];

const emotionText = [
    {
        type: "happy",
        dutch: "Blij"
    },
    {
        type: "angry",
        dutch: "Boos"
    },
    {
        type: "sad",
        dutch: "Verdrietig"
    },
    {
        type: "afraid",
        dutch: "Bang"
    },
    {
        type: "ashamed",
        dutch: "Beschaamd"
    }
]

const momentTypeText = [
    {
        type: "skilled_and_succeeded",
        dutch: "Je was zeker van jezelf, en het lukte."
    },
    {
        type: "not_skilled_but_succeeded",
        dutch: "Je was niet zeker van jezelf, maar het lukte toch."
    },
    {
        type: "skilled_but_failed",
        dutch: "Je was niet zeker van jezelf, en het lukte niet."
    }
]

//initialize

const initialize = () => {
    cleanData();

    momentTypes.forEach(type => {
        list = [];
        listName = `${type}_moments`;
        localStorage.setItem(listName, JSON.stringify(list));
    });
}

//form

const showFormError = (message) => {
    $("#form-wrapper").animate({ scrollTop: 0 }, "slow");

    $(".form-status").removeClass('hidden');
    $(".form-status").text(message);
}

const hideFormError = () => {
    $(".form-status").addClass('hidden');
}

const scrollToFormTop = () => {
    $("#form-wrapper").animate({ scrollTop: 0 }, "slow");
}

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

const getBool = (string) => {
    return string == 'true' ? true : false;
}

const cleanData = () => {
    localStorage.clear();
}

//save result

const saveResult = () => {
    const experienceList = getExperienceList();

    const result = {
        experienceList: experienceList,
        feedback: $("#feedback").val()
    }

    console.log(experienceList);

    $.ajax({
        url: '/src/php/save.php',
        method: 'POST',
        data: { data: JSON.stringify(result) }
    }).done(function (response) {
        console.log(response);
    });

    cleanData();
}

//set dynamic viewheight

$(document).ready(function () {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});

window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});












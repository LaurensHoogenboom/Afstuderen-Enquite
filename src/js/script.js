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









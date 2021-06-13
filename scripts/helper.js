
export function getEl(time){
    return document.querySelector(`.${time} .value`);
}

export function getDays(sec){
    return Math.floor(sec / (24 * 60 * 60));
}

export function getHours(sec){
    const remainingSec = sec - getDays(sec) * 24 * 60 * 60;
    return Math.floor(remainingSec / (60 * 60));
}

export function getMinutes(sec){
    const remainingSec = sec - getDays(sec) * 24 * 60 * 60 - getHours(sec) * 60 * 60;
    return Math.floor(remainingSec / 60);
}

export function getSeconds(sec){
    return sec - getDays(sec) * 24 * 60 * 60 - getHours(sec) * 60 * 60 - getMinutes(sec) * 60;
}


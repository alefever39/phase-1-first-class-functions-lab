const returnFirstTwoDrivers = function(ARRAY) {
    return [ARRAY[0], ARRAY[1]];
}

const returnLastTwoDrivers = function(ARRAY) {
    return [ARRAY[ARRAY.length - 2], ARRAY[ARRAY.length - 1]];
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(int) {
    return function(fare) {return int*fare};
}

const fareDoubler = function(fare) {
    return createFareMultiplier(2)(fare);
}

const fareTripler = function(fare) {
    return createFareMultiplier(3)(fare);
}

function selectDifferentDrivers(Drivers, returnFunction) {
    if (returnFunction === returnFirstTwoDrivers) {
        return returnFirstTwoDrivers(Drivers);
    }
    else if (returnFunction === returnLastTwoDrivers) {
        return returnLastTwoDrivers(Drivers);
    }
}
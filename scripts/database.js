const database = {
    governors: [
        { id: 1, name: "Jerry", colonyId: 1, isActive: true },
        { id: 2, name: "Karen", colonyId: 2, isActive: false },
        { id: 3, name: "Bill", colonyId: 1, isActive: false },
        { id: 4, name: "Joe", colonyId: 3, isActive: true },
        { id: 5, name: "Brenda", colonyId: 4, isActive: true }
    ],
    colonies: [
        { id: 1, name: "Earth" },
        { id: 2, name: "Venus" },
        { id: 3, name: "Mars" },
        { id: 4, name: "Saturn" },
        { id: 5, name: "Pluto" }
    ],
    facilities: [
        { id: 1, name: "facilityName", isActive: true },
        { id: 2, name: "", isActive: false }
    ],
    minerals: [
        { id: 1, name: "Iron" },
        { id: 2, name: "Copper" }
    ],
    mineralsInFacility: [
        { id: 1, facilityId: 1, mineralId: 1, amountOwned: 100 },
        { id: 2, facilityId: 1, mineralId: 2, amountOwned: 100 }
    ],
    colonyResources: [
        { id: 1, colonyId: 1, mineralId: 1, amountOwned: 100 }
    ]
}

let cart = {};

//#region Getter Functions
export const getGovernors = () => {
    return database.governors.map((governor) => ({...governor }));
};

export const getColonies = () => {
    return database.colonies.map((colony) => ({...colony }));
};

export const getFacilities = () => {
    return database.facilities.map((facility) => ({...facility }));
};

export const getMinerals = () => {
    return database.minerals.map((mineral) => ({...mineral }));
};

export const getMineralsInFacilities = () => {
    return database.mineralsInFacility.map((mineral) => ({...mineral }));
};

export const getColonyResources = () => {
    return database.colonyResources.map((colonyResource) => ({
        ...colonyResource
    }));
};

export const getCartFacility = () => {
    return cart.facilityId ? cart.facilityId : -1;
}

export const getCartColony = () => {
    return cart.colonyId ? cart.colonyId : -1;
}

export const getCartMineral = () => {
        return cart.mineralId ? cart.mineralId : -1;
    }
    //#endregion

//#region Setter Functions
export const setFacility = (id) => {
    cart.facilityId = id;
};
export const setColony = (id) => {
    cart.colonyId = cart.colonyId = id;
};
export const setMineral = (id) => {
    cart.mineralId = id;
};
//#endregion

export const executePurchase = () => {
    database.mineralsInFacility.find(x => x.facilityId == cart.facilityId && x.mineralId == cart.mineralId).amountOwned -= 1;
    const hasResource = database.colonyResources.find(x => x.mineralId == cart.mineralId && x.colonyId == cart.colonyId) ? true : false
    if (hasResource) {
        database.colonyResources.find(x => x.mineralId == cart.mineralId && x.colonyId == cart.colonyId).amountOwned += 1;
    } else {
        const newid = database.colonyResources.length + 1;
        database.colonyResources.push({ id: newid, colonyId: cart.colonyId, mineralId: cart.mineralId, amountOwned: 1 })
    }
    cart.mineralId = -1
   // cart = {};
}
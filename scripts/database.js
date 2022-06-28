const database = {
  governors: [
    { id: 1, name: "Jerry", colonyId: 1, isActive: true },
    { id: 2, name: "Karen", colonyId: 2, isActive: true },
    { id: 3, name: "Bill", colonyId: 3, isActive: true },
    { id: 4, name: "Joe", colonyId: 4, isActive: true },
    { id: 5, name: "Brenda", colonyId: 5, isActive: true }
  ],
  colonies: [
    { id: 1, name: "Earth" },
    { id: 2, name: "Venus" },
    { id: 3, name: "Mars" },
    { id: 4, name: "Saturn" },
    { id: 5, name: "Pluto" }
  ],
  facilities: [
    { id: 1, name: "Io", isActive: true },
    { id: 2, name: "Europa", isActive: true },
    { id: 3, name: "Ganymede", isActive: true },
    { id: 4, name: "Callisto", isActive: true },
    { id: 5, name: "Titan", isActive: true }
  ],
  minerals: [
    { id: 1, name: "Iron" },
    { id: 2, name: "Copper" },
    { id: 3, name: "Platinum" },
    { id: 4, name: "Lithium" },
    { id: 5, name: "Lanthanum" },
    { id: 6, name: "Europium" },
    { id: 7, name: "Palladium" },
    { id: 8, name: "Nickel" }
  ],
  mineralsInFacility: [
    { id: 1, facilityId: 1, mineralId: 1, amountOwned: 100 },
    { id: 2, facilityId: 1, mineralId: 2, amountOwned: 15 },
    { id: 3, facilityId: 2, mineralId: 3, amountOwned: 17 },
    { id: 4, facilityId: 2, mineralId: 4, amountOwned: 53 },
    { id: 5, facilityId: 3, mineralId: 5, amountOwned: 4 },
    { id: 6, facilityId: 3, mineralId: 1, amountOwned: 34 },
    { id: 7, facilityId: 4, mineralId: 2, amountOwned: 67 },
    { id: 8, facilityId: 4, mineralId: 3, amountOwned: 92 },
    { id: 9, facilityId: 5, mineralId: 4, amountOwned: 82 },
    { id: 10, facilityId: 5, mineralId: 3, amountOwned: 1 },
    { id: 11, facilityId: 5, mineralId: 3, amountOwned: 0 }
  ],
  colonyResources: [
    { id: 1, colonyId: 1, mineralId: 2, amountOwned: 56 },
    { id: 2, colonyId: 1, mineralId: 3, amountOwned: 98 },
    { id: 3, colonyId: 2, mineralId: 1, amountOwned: 12 },
    { id: 4, colonyId: 2, mineralId: 2, amountOwned: 32 },
    { id: 5, colonyId: 3, mineralId: 3, amountOwned: 0 },
    { id: 6, colonyId: 3, mineralId: 4, amountOwned: 32 },
    { id: 7, colonyId: 4, mineralId: 4, amountOwned: 94 },
    { id: 8, colonyId: 4, mineralId: 5, amountOwned: 73 },
    { id: 9, colonyId: 5, mineralId: 1, amountOwned: 50 },
    { id: 10, colonyId: 5, mineralId: 5, amountOwned: 77 }
  ]
};

let cart = {};

//#region Getter Functions
export const getGovernors = () => {
  return database.governors.map((governor) => ({ ...governor }));
};

export const getColonies = () => {
  return database.colonies.map((colony) => ({ ...colony }));
};

export const getFacilities = () => {
  return database.facilities.map((facility) => ({ ...facility }));
};

export const getMinerals = () => {
  return database.minerals.map((mineral) => ({ ...mineral }));
};

export const getMineralsInFacilities = () => {
  return database.mineralsInFacility.map((mineral) => ({ ...mineral }));
};

export const getColonyResources = () => {
  return database.colonyResources.map((colonyResource) => ({
    ...colonyResource
  }));
};

export const getCartFacility = () => {
  return cart.facilityId ? cart.facilityId : -1;
};

export const getCartColony = () => {
  return cart.colonyId ? cart.colonyId : -1;
};

export const getCartMineral = () => {
  return cart.mineralId ? cart.mineralId : -1;
};
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
  database.mineralsInFacility.find(
    (x) => x.facilityId == cart.facilityId && x.mineralId == cart.mineralId
  ).amountOwned -= 1;
  const hasResource = database.colonyResources.find(
    (x) => x.mineralId == cart.mineralId && x.colonyId == cart.colonyId
  )
    ? true
    : false;
  if (hasResource) {
    database.colonyResources.find(
      (x) => x.mineralId == cart.mineralId && x.colonyId == cart.colonyId
    ).amountOwned += 1;
  } else {
    const newid = database.colonyResources.length + 1;
    database.colonyResources.push({
      id: newid,
      colonyId: cart.colonyId,
      mineralId: cart.mineralId,
      amountOwned: 1
    });
  }
  cart.mineralId = -1;
};

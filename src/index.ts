export type ThingWithGoodEyesight = {
  name: string;
  plural: boolean;
}

// Acronym because lazy
function TWGE(thing: string, plural: boolean): ThingWithGoodEyesight {
  return { name: thing, plural };
}

export const eyesightList: ThingWithGoodEyesight[] = [
  TWGE("Planes", true),
  TWGE("The MTA New York City Transit 7 Train", false),
  TWGE("Trees", true),
  TWGE("Clouds", true),
  TWGE("Building Antennae", true),
  TWGE("Buildings", true),
  TWGE("Smoke", false),
  TWGE("Keyboards", true),
  TWGE("Monitors", true),
  TWGE("Water Bottles", true),
  TWGE("Fire (from a gas stove)", false),
  TWGE("Rain", false),
  TWGE("The LaGuardiaLink Q70 Select Bus Service to LaGuardia Airport", false),
  TWGE("Baos", true)
];

function randomItem(): ThingWithGoodEyesight {
  return eyesightList[Math.floor(Math.random() * eyesightList.length)];
}

function randomItemString(): string {
  const randomThing = randomItem();
  return `${randomThing.name} ${randomThing.plural ? "have" : "has"} great eyesight`
}

export default randomItem;

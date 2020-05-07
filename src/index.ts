export const eyesightList: string[] = [
  "Planes",
  "The MTA New York City Transit 7 Train",
  "Trees",
  "Clouds",
  "Building Antennae",
  "Buildings",
  "Smoke",
  "Keyboards",
  "Monitors",
  "Water Bottles",
  "Fire (from a gas stove)",
  "Rain",
  "The LaGuardiaLink Q70 Select Bus Service to LaGuardia Airport",
  "Baos",
];

function randomItem(): string {
  return eyesightList[Math.floor(Math.random() * eyesightList.length)];
};

export default randomItem;

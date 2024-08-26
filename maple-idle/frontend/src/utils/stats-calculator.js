// WEAPON STATS
const WeaponSTRCalculator = (weapon) => {
  return weapon.stats.str;
};
const WeaponDEXCalculator = (weapon) => {
  return weapon.stats.dex;
};

const WeaponINTCalculator = (weapon) => {
  return weapon.stats.int;
};

const WeaponLUKCalculator = (weapon) => {
  return weapon.stats.luk;
};

// HAT STATS
const HatSTRCalculator = (hat) => {
  return hat.stats.str;
};
const HatDEXCalculator = (hat) => {
  return hat.stats.dex;
};

const HatINTCalculator = (hat) => {
  return hat.stats.int;
};

const HatLUKCalculator = (hat) => {
  return hat.stats.luk;
};

// TOP STATS
const TopSTRCalculator = (top) => {
  return top.stats.str;
};
const TopDEXCalculator = (top) => {
  return top.stats.dex;
};

const TopINTCalculator = (top) => {
  return top.stats.int;
};

const TopLUKCalculator = (top) => {
  return top.stats.luk;
};

// BOTTOM STATS
const BottomSTRCalculator = (bottom) => {
  return bottom.stats.str;
};
const BottomDEXCalculator = (bottom) => {
  return bottom.stats.dex;
};

const BottomINTCalculator = (bottom) => {
  return bottom.stats.int;
};

const BottomLUKCalculator = (bottom) => {
  return bottom.stats.luk;
};

export const calculateSTR = (weapon, hat, top, bottom) => {
  return (
    WeaponSTRCalculator(weapon) +
    HatSTRCalculator(hat) +
    TopSTRCalculator(top) +
    BottomSTRCalculator(bottom)
  );
};

export const calculateDEX = (weapon, hat, top, bottom) => {
  return (
    WeaponDEXCalculator(weapon) +
    HatDEXCalculator(hat) +
    TopDEXCalculator(top) +
    BottomDEXCalculator(bottom)
  );
};

export const calculateINT = (weapon, hat, top, bottom) => {
  return (
    WeaponINTCalculator(weapon) +
    HatINTCalculator(hat) +
    TopINTCalculator(top) +
    BottomINTCalculator(bottom)
  );
};

export const calculateLUK = (weapon, hat, top, bottom) => {
  return (
    WeaponLUKCalculator(weapon) +
    HatLUKCalculator(hat) +
    TopLUKCalculator(top) +
    BottomLUKCalculator(bottom)
  );
};

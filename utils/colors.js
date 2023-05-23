import coloringPalette from "coloring-palette";

export function generateColors(primary, secondary) {
  let base = colorMixer(hexToRgb(secondary), hexToRgb(primary), 0.25);

  return coloringPalette(base, "hex");
}

function colorChannelMixer(colorChannelA, colorChannelB, amountToMix) {
  var channelA = colorChannelA * amountToMix;
  var channelB = colorChannelB * (1 - amountToMix);
  return parseInt(channelA + channelB);
}

function colorMixer(rgbA, rgbB, amountToMix) {
  var r = colorChannelMixer(rgbA[0], rgbB[0], amountToMix);
  var g = colorChannelMixer(rgbA[1], rgbB[1], amountToMix);
  var b = colorChannelMixer(rgbA[2], rgbB[2], amountToMix);

  return rgbToHex(r, g, b);
}

function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

export function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  //   return result
  //     ? {
  //         r: parseInt(result[1], 16),
  //         g: parseInt(result[2], 16),
  //         b: parseInt(result[3], 16),
  //       }
  //     : null;

  return result
    ? [
        parseInt(result[1], 16),
        parseInt(result[2], 16),
        parseInt(result[3], 16),
      ]
    : null;
}

export const possibleColors = [
  { hex: "#FEDFE4" },
  { hex: "#FECBD3" },
  { hex: "#FD94A4" },
  { hex: "#FC5D76" },
  { hex: "#FB2647" },
  { hex: "#E40427" },
  { hex: "#AD031E" },
  { hex: "#760214" },
  { hex: "#3F010B" },
  { hex: "#080001" },
  { hex: "#FFDED1" },
  { hex: "#FFCFBC" },
  { hex: "#FFB294" },
  { hex: "#FF956B" },
  { hex: "#FF7842" },
  { hex: "#FF500A" },
  { hex: "#D13C00" },
  { hex: "#992C00" },
  { hex: "#611C00" },
  { hex: "#280C00" },
  { hex: "#0C0400" },
  { hex: "#FFECD1" },
  { hex: "#FFE3BC" },
  { hex: "#FFD294" },
  { hex: "#FFC16B" },
  { hex: "#FFB042" },
  { hex: "#FF990A" },
  { hex: "#D17A00" },
  { hex: "#995900" },
  { hex: "#613800" },
  { hex: "#281800" },
  { hex: "#D6F9E5" },
  { hex: "#C4F7D9" },
  { hex: "#A0F2C2" },
  { hex: "#7DEDAA" },
  { hex: "#59E893" },
  { hex: "#35E37C" },
  { hex: "#1BC560" },
  { hex: "#149348" },
  { hex: "#0E6230" },
  { hex: "#03180C" },
  { hex: "#B3CEF5" },
  { hex: "#A1C3F2" },
  { hex: "#7DACED" },
  { hex: "#5995E8" },
  { hex: "#357EE3" },
  { hex: "#1D69D3" },
  { hex: "#1857AF" },
  { hex: "#113E7E" },
  { hex: "#0A264C" },
  { hex: "#040D1B" },
  { hex: "#CEC2E9" },
  { hex: "#C2B3E3" },
  { hex: "#AA95D8" },
  { hex: "#9377CD" },
  { hex: "#7859C2" },
  { hex: "#6541B2" },
  { hex: "#543694" },
  { hex: "#3D276B" },
  { hex: "#251842" },
  { hex: "#0E0919" },
];

export const getUTCOffset = (unFormattedUTCOffset: string) =>
  `UTC ${
    unFormattedUTCOffset.slice(0, 3) + ":" + unFormattedUTCOffset.slice(3)
  }`;

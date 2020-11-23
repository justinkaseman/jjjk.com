export function convertLatLng(lat, lng) {
  return {
    top: Math.abs(90 - lat) * 3.7 - 145,
    left:
      180 +
      32 + // lng offset
      lng * 1.69,
  };
}

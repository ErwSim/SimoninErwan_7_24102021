export function buffer2hexHelper(buffer) {
  return (
    "#" +
    [...new Uint8Array(buffer.data)]
      .map((x) => x.toString(16).padStart(2, "0"))
      .join("")
  );
}

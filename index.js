function isMaleName(name) {
  if (name.toLowerCase().endsWith("a") && name.toLowerCase() !== "bonawentura") {
    return false;
  } else {
    return true;
  }
}

console.log(isMaleName("bonawentura"));
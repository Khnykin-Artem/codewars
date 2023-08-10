function isValidIP(str) {
  const octets = str.split(".");
  if (octets.length === 4) {
    const filteredOctets = octets.filter((octet) => {
      if (octet.length > 1 && octet[0] === "0") return false;
      console.log(octet);
      if (octet === "" || octet.includes(" ") || octet.includes('\n')) return false;
      if (octet.includes("e")) return false;
      return octet >= 0 && octet <= 255;
    });
    return filteredOctets.length === 4;
  }
  return false;
}


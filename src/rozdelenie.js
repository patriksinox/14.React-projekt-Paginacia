const rozdelenie = (ludia) => {
  const elementovNaStranu = 10;
  const stran = ludia.length / elementovNaStranu;

  const rozdelene = Array.from({ length: stran }, (_, index) => {
    const start = index * elementovNaStranu;
    return ludia.slice(start, start + elementovNaStranu);
  });
  return rozdelene;
};

export default rozdelenie;

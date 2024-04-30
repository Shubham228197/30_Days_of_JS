async function getdata() {
  const promisedata = await fetch("./Final-API-Data.json");
  const finaldata = await promisedata.json();
  return finaldata.countries.country;
}
async function main() {
  const apiData = await getdata();
  console.log(apiData);
}
main();

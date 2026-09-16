const honapok  =[
    {szam:"1", nev: "Január", evszak:"tel",napok:"31"},
    {szam:"2", nev: "február", evszak: "tel", napok:"28"},
    {szam:"3", nev: "március", evszak: "tavasz", napok:"31"},
    {szam:"4", nev: "április", évszak:"tavast", napok:"30"},
    {szam:"5", nev: "Május", evszak:"tavasz", napok:"31"},
    {szam:"6", nev: "junius", evszak:"nyár", napok:"30"},
    {szam:"7", nev: "július", evszak:"nyár", napok:"31"},
    {szam:"8",nev: "augusztus", evszak:"nyár", napok:"31"},
    {szam:"9",nev: "szeptember", evszak:"ősz", napok:"30"},
    {szam:"10",nev: "október", evszak:"ősz", napok:"31"},
    {szam:"11",nev: "november", evszak:"ősz", napok:"30"},
    {szam:"12", nev: "december", evszak:"tel", napok:"31"},

]
function honapadat(honapszam){
    if (isNaN(honapszam)){
        throw new Error("Nem számot adtál meg")
    }
    if(honapszam < 1 || honapszam > 12)
        throw new Error("1- és 12 közötti számot adj meg")
    return honapok.find(h =>Number(h.szam) ===honapszam)
}
try{
    const input=prompt("Adj meg egy honapszamot");
    const honapszam=Number(input);

    const adat=honapadat(honapszam)

    console.log(`Honap:${adat.nev}`)
    console.log(`evszak:${adat.evszak}`)
    console.log(`napok:${adat.napok}`)
}
catch(hiba){
    console.log(`HIBA:${hiba.message}`)
}

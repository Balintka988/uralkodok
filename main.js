const headerObj = {//itt hozom létre a header objektumot 
    uralkodo : "Uralkodo",//ertekadas a headerObj uralkodo tulajdonsaganak
    esemeny: "Esemény",//ertekadas a headerObj esemeny tulajdonsaganak
    evszam: "Évszám"//ertekadas a headerObj evszam tulajdonsaganak
};
const firstRowElement = {//itt hozom létre a firstRowElement objektumot 
    uralkodo: "I.István",//ertekadas a firstRowElement uralkodo tulajdonsaganak
    esemeny: "Koronázás",//ertekadas a firstRowElement esemeny tulajdonsaganak
    evszam: "1000"//ertekadas a firstRowElement evszam tulajdonsaganak
}
const secondRowElement = {//itt hozom létre a secondRowElement objektumot 
    esemeny: "Pannonhalmi apátság megalapítása	",//ertekadas a secondRowElement esemeny tulajdonsaganak
    evszam: "1001"//ertekadas a secondRowElement evszam tulajdonsaganak
}
const thirdRowElement = {//itt hozom létre a thirdRowElement objektumot 
    uralkodo: "IV. Béla",//ertekadas a thirdRowElement uralkodo tulajdonsaganak
    esemeny: "tatárjárás",//ertekadas a thirdRowElement esemeny tulajdonsaganak
    evszam: "1241-1242"//ertekadas a thirdRowElement evszam tulajdonsaganak
}
const fourthRowElement = {//itt hozom létre a fourthRowElement objektumot 
    uralkodo: "Mátyás király",//ertekadas a fourthRowElement uralkodo tulajdonsaganak
    esemeny: "Bécs elfoglalása",//ertekadas a fourthRowElement esemeny tulajdonsaganak
    evszam: "1485"//ertekadas a fourthRowElement evszam tulajdonsaganak
}
const fifthRowElement = {//itt hozom létre a fifthRowElement objektumot 
    esemeny: "Kenyérmezei csata	",//ertekadas a fifthRowElement esemeny tulajdonsaganak
    evszam: "1479"//ertekadas a fifthRowElement evszam tulajdonsaganak
}
const sixthRowElement = {//itt hozom létre a sixthRowElement objektumot 
    uralkodo: "II. Rákóczi Ferenc",//ertekadas a sixthRowElement uralkodo tulajdonsaganak
    esemeny: "A szabadságharc kezdete",//ertekadas a sixthRowElement esemeny tulajdonsaganak
    evszam: "1703"//ertekadas a sixthRowElement evszam tulajdonsaganak
}
const seventhRowElement = {//itt hozom létre a seventhRowElement objektumot 
    esemeny: "A szabadságharc vége",//ertekadas a seventhRowElement esemeny tulajdonsaganak
    evszam: "1711"//ertekadas a seventhRowElement evszam tulajdonsaganak
}

//Itt hozzuk létre a táblázatot
const table = document.createElement('table');//létrehozok egy table elemet, ami majd a tablazatomat fogja tartalmazni
document.body.appendChild(table);//Hozzáadom a bodyhoz

//A colgroup elemek szabályozzák a táblázatunk oszlopainak stílusát
//A colgroup elemet hozzuk it létre
const colgroup = document.createElement('colgroup');//itt hozom létre a colgroup elemet
table.appendChild(colgroup);//hozzáadjuk a tablehoz

//itt definiálom az első oszlopot 
const col1 = document.createElement('col');//itt hozom letre a col elemet
col1.className = "column";//itt adok neki egy className-t ez alapjan talalja meg a css
colgroup.appendChild(col1);//a colgrouphoz adom hozzá

//itt definiálom a második oszlopot, nem adok neki semmit mert nem kell semmit megjelenítenie
const col2 = document.createElement('col');//itt hozom letre a col elemet
colgroup.appendChild(col2);//a colgrouphoz adom hozzá

//itt definiálom a harmadik oszlopot 
const col3 = document.createElement('col');//itt hozom letre a col elemet
col3.className = "column";//itt adok neki egy className-t 
colgroup.appendChild(col3);//a colgrouphoz adom hozzá

//A táblázat fejlécének létrehozása
const thead = document.createElement('thead');//thead elem letrehozasa itt tortenik ez lesz a fejlec
table.appendChild(thead);//hozzáadom a tablehez

//Létrehozunk egy sort a fejlécnek
const headerRow = document.createElement('tr');//itt hozok létre egy tr elemet 
thead.appendChild(headerRow);//hozzadaom a theadre

//Az első cella létrehozása a fejléc sorában
const headerCell = document.createElement('th');//itt egy th elemet hozok letre
headerCell.innerHTML = headerObj.uralkodo;//a cellaban a headerObj uralkodo tulajdonsaganak lesz megjelenitve az erteke
headerRow.appendChild(headerCell);//a headerRow-hoz (fejléc sorához) adom hozzá

//A második cella létrehozása a fejléc sorában
const headerCell2 = document.createElement('th');//itt egy th elemet hozok letre
headerCell2.innerHTML = headerObj.esemeny;//a cellaban a headerObj esemeny tulajdonsaganak lesz megjelenitve az erteke
headerRow.appendChild(headerCell2);//a headerRow-hoz (fejléc sorához) adom hozzá

//A harmadik cella létrehozása a fejléc sorában
const headerCell3 = document.createElement('th');//itt egy th elemet hozok letre
headerCell3.innerHTML = headerObj.evszam;//a cellaban a headerObj evszam tulajdonsaganak lesz megjelenitve az erteke
headerRow.appendChild(headerCell3);//a headerRow-hoz (fejléc sorához) adom hozzá

//Itt hozzuk létre a táblázat törzsét
const tbody = document.createElement('tbody');//létrehozok egy tbody elemet
table.appendChild(tbody);//hozzáadjuk a tbody-t a table-hez

//Első sor létrehozása
const tbodyRow1 = document.createElement('tr');//létrehozok egy tr elemet ami az első sor lesz a tablazatban
tbody.appendChild(tbodyRow1);//hozzaadom a tbody-hoz  

//A sor első cellájának létrehozása
const tbodyRow1Cell1 = document.createElement('td');//letrehozok egy td elemet
tbodyRow1Cell1.innerHTML = firstRowElement.uralkodo;//a cellaban a firstRowElement uralkodo tulajdonsaganak lesz megjelenitve az erteke
tbodyRow1.appendChild(tbodyRow1Cell1);//hozzáadja az első sorhoz
tbodyRow1Cell1.rowSpan = "2"//Itt adjuk meg hogy hány sort egyesítsen 

//A sor második cellájának létrehozása
const tbodyRow1Cell2 = document.createElement('td');//letrehozok egy td elemet
tbodyRow1Cell2.innerHTML = firstRowElement.esemeny;//a cellaban a firstRowElement esemeny tulajdonsaganak lesz megjelenitve az erteke
tbodyRow1.appendChild(tbodyRow1Cell2);//hozzáadjuk a cellát a sorhoz 

//A sor harmadik cellájának létrehozása
const tbodyRow1Cell3 = document.createElement('td');//letrehozok egy td elemet
tbodyRow1Cell3.innerHTML = firstRowElement.evszam;//a cellaban a firstRowElement evszam tulajdonsaganak lesz megjelenitve az erteke
tbodyRow1.appendChild(tbodyRow1Cell3);//hozzáadjuk a cellát a sorhoz 

//Új sor létrehozása
const tbodyRow2 = document.createElement('tr');//itt egy uj sort adok hozza egy tr elemet
tbody.appendChild(tbodyRow2);//hozzáadjuk a sort a tbodyhoz (törzsünkhöz)
//A sor első cellájának létrehozása
const tbodyRow2Cell1 = document.createElement('td');//letrehozok egy td elemet
tbodyRow2Cell1.innerHTML = secondRowElement.esemeny;//a cellaban a secondRowElement esemeny tulajdonsaganak lesz megjelenitve az erteke
tbodyRow2.appendChild(tbodyRow2Cell1);//hozzáadjuk a cellát a sorhoz 

//A sor második cellájának létrehozása
const tbodyRow2Cell2 = document.createElement('td');//letrehozok egy td elemet
tbodyRow2Cell2.innerHTML = secondRowElement.evszam;//a cellaban a secondRowElement evszam tulajdonsaganak lesz megjelenitve az erteke
tbodyRow2.appendChild(tbodyRow2Cell2);//hozzáadjuk a cellát a sorhoz 

//új sort hozunk létre
const tbodyRow3 = document.createElement('tr');//itt egy uj sort adok hozza egy tr elemet
tbody.appendChild(tbodyRow3);//hozzáadjuk a sort a törzsönkhüz

//A sor első cellájának létrehozása
const tbodyRow3Cell1 = document.createElement('td');//letrehozok egy td elemet
tbodyRow3Cell1.innerHTML = thirdRowElement.uralkodo;//a cellaban a thirdRowElement uralkodo tulajdonsaganak lesz megjelenitve az erteke
tbodyRow3.appendChild(tbodyRow3Cell1);//hozzáadjuk a cellát a sorhoz 

//A sor második cellájának létrehozása
const tbodyRow3Cell2 = document.createElement('td');//letrehozok egy td elemet
tbodyRow3Cell2.innerHTML = thirdRowElement.esemeny;//a cellaban a thirdRowElement esemeny tulajdonsaganak lesz megjelenitve az erteke
tbodyRow3.appendChild(tbodyRow3Cell2);//hozzáadjuk a cellát a sorhoz 

//A sor harmadik cellájának létrehozása
const tbodyRow3Cell3 = document.createElement('td');//letrehozok egy td elemet
tbodyRow3Cell3.innerHTML = thirdRowElement.evszam;//a cellaban a thirdRowElement evszam tulajdonsaganak lesz megjelenitve az erteke
tbodyRow3.appendChild(tbodyRow3Cell3);//hozzáadjuk a cellát a sorhoz 

//új sor létrehozása
const tbodyRow4 = document.createElement('tr');//itt egy uj sort adok hozza egy tr elemet
tbody.appendChild(tbodyRow4);//hozzáadjuk a sort a törzsönkhüz

//A sor első cellájának létrehozása rowspannal
const tbodyRow4Cell1 = document.createElement('td');//letrehozok egy td elemet
tbodyRow4Cell1.innerHTML = fourthRowElement.uralkodo;//a cellaban a fourthRowElement uralkodo tulajdonsaganak lesz megjelenitve az erteke
tbodyRow4.appendChild(tbodyRow4Cell1);//hozzáadjuk a cellát a sorhoz 
tbodyRow4Cell1.rowSpan = "2";//Itt adjuk meg hogy hány sort egyesítsen

//A sor második cellájának létrehozása
const tbodyRow4Cell2 = document.createElement('td');//letrehozok egy td elemet
tbodyRow4Cell2.innerHTML = fourthRowElement.esemeny;//a cellaban a fourthRowElement esemeny tulajdonsaganak lesz megjelenitve az erteke
tbodyRow4.appendChild(tbodyRow4Cell2);//hozzáadjuk a cellát a sorhoz 

//A sor harmadik cellájának létrehozása
const tbodyRow4Cell3 = document.createElement('td');//letrehozok egy td elemet
tbodyRow4Cell3.innerHTML = fourthRowElement.evszam;//a cellaban a fourthRowElement evszam tulajdonsaganak lesz megjelenitve az erteke
tbodyRow4.appendChild(tbodyRow4Cell3);//hozzáadjuk a cellát a sorhoz 

//új sor létrehozása
const tbodyRow5 = document.createElement('tr');//itt egy uj sort adok hozza egy tr elemet
tbody.appendChild(tbodyRow5);//hozzáadjuk a sort a törzsönkhüz

//A sor első cellájának létrehozása
const tbodyRow5Cell1 = document.createElement('td');//letrehozok egy td elemet
tbodyRow5Cell1.innerHTML = fifthRowElement.esemeny;//a cellaban a fifthRowElement esemeny tulajdonsaganak lesz megjelenitve az erteke
tbodyRow5.appendChild(tbodyRow5Cell1);//hozzáadjuk a cellát a sorhoz 

//A sor második cellájának létrehozása
const tbodyRow5Cell2 = document.createElement('td');//letrehozok egy td elemet
tbodyRow5Cell2.innerHTML = fifthRowElement.evszam;//a cellaban a fifthRowElement evszam tulajdonsaganak lesz megjelenitve az erteke
tbodyRow5.appendChild(tbodyRow5Cell2);//hozzáadjuk a cellát a sorhoz 

//új sor létrehozása
const tbodyRow6 = document.createElement('tr');//itt egy uj sort adok hozza egy tr elemet
tbody.appendChild(tbodyRow6);//hozzáadjuk a sort a törzsönkhüz

//A sor első cellájának létrehozása rowspannal
const tbodyRow6Cell1 = document.createElement('td');//letrehozok egy td elemet
tbodyRow6Cell1.innerHTML = sixthRowElement.uralkodo;//a cellaban a sixthRowElement uralkodo tulajdonsaganak lesz megjelenitve az erteke
tbodyRow6.appendChild(tbodyRow6Cell1);//hozzáadjuk a cellát a sorhoz 
tbodyRow6Cell1.rowSpan = "2";//Itt adjuk meg hogy hány sort egyesítsen

//A sor második cellájának létrehozása
const tbodyRow6Cell2 = document.createElement('td');//letrehozok egy td elemet
tbodyRow6Cell2.innerHTML = sixthRowElement.esemeny;//a cellaban a sixthRowElement esemeny tulajdonsaganak lesz megjelenitve az erteke
tbodyRow6.appendChild(tbodyRow6Cell2);//hozzáadjuk a cellát a sorhoz 

////A sor harmadik cellájának létrehozása
const tbodyRow6Cell3 = document.createElement('td');//letrehozok egy td elemet
tbodyRow6Cell3.innerHTML = sixthRowElement.evszam;//a cellaban a sixthRowElement evszam tulajdonsaganak lesz megjelenitve az erteke
tbodyRow6.appendChild(tbodyRow6Cell3);//hozzáadjuk a cellát a sorhoz 

//ús sor létrehozása
const tbodyRow7 = document.createElement('tr');//itt egy uj sort adok hozza egy tr elemet
tbody.appendChild(tbodyRow7);//hozzáadjuk a sort a törzsönkhüz

//A sor első cellájának létrehozása
const tbodyRow7Cell1 = document.createElement('td');//letrehozok egy td elemet
tbodyRow7Cell1.innerHTML = seventhRowElement.esemeny;//a cellaban a seventhRowElement esemeny tulajdonsaganak lesz megjelenitve az erteke
tbodyRow7.appendChild(tbodyRow7Cell1);//hozzáadjuk a cellát a sorhoz 

//A sor második cellájának létrehozása
const tbodyRow7Cell2 = document.createElement('td');//letrehozok egy td elemet
tbodyRow7Cell2.innerHTML = seventhRowElement.evszam;//a cellaban a seventhRowElement evszam tulajdonsaganak lesz megjelenitve az erteke
tbodyRow7.appendChild(tbodyRow7Cell2);//hozzáadjuk a cellát a sorhoz 
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
headerCell.innerHTML = "Uralkodo";//itt adok manualisan erteket neki
headerRow.appendChild(headerCell);//a headerRow-hoz (fejléc sorához) adom hozzá

//A második cella létrehozása a fejléc sorában
const headerCell2 = document.createElement('th');//itt egy th elemet hozok letre
headerCell2.innerHTML = "Esemény";//itt adok manualisan erteket neki
headerRow.appendChild(headerCell2);//a headerRow-hoz (fejléc sorához) adom hozzá

//A harmadik cella létrehozása a fejléc sorában
const headerCell3 = document.createElement('th');//itt egy th elemet hozok letre
headerCell3.innerHTML = "Évszám";//itt adok manualisan erteket neki
headerRow.appendChild(headerCell3);//a headerRow-hoz (fejléc sorához) adom hozzá

//Itt hozzuk létre a táblázat törzsét
const tbody = document.createElement('tbody');//létrehozok egy tbody elemet
table.appendChild(tbody);//hozzáadjuk a tbody-t a table-hez

//Első sor létrehozása
const tbodyRow1 = document.createElement('tr');//létrehozok egy tr elemet ami az első sor lesz a tablazatban
tbody.appendChild(tbodyRow1);//hozzaadom a tbody-hoz  

//A sor első cellájának létrehozása
const tbodyRow1Cell1 = document.createElement('td');//letrehozok egy td elemet
tbodyRow1Cell1.innerHTML = "I.István"//Uralkodo nevét itt adjuk meg
tbodyRow1.appendChild(tbodyRow1Cell1);//hozzáadja az első sorhoz
tbodyRow1Cell1.rowSpan = "2"//Itt adjuk meg hogy hány sort egyesítsen 

//A sor második cellájának létrehozása
const tbodyRow1Cell2 = document.createElement('td');//letrehozok egy td elemet
tbodyRow1Cell2.innerHTML = "Koronázás"//itt adok manualisan esemenyt neki
tbodyRow1.appendChild(tbodyRow1Cell2);//hozzáadjuk a cellát a sorhoz 

//A sor harmadik cellájának létrehozása
const tbodyRow1Cell3 = document.createElement('td');//letrehozok egy td elemet
tbodyRow1Cell3.innerHTML = "1000"//itt adok manualisan evszamot neki
tbodyRow1.appendChild(tbodyRow1Cell3);//hozzáadjuk a cellát a sorhoz 

//Új sor létrehozása
const tbodyRow2 = document.createElement('tr');//itt egy uj sort adok hozza egy tr elemet
tbody.appendChild(tbodyRow2);//hozzáadjuk a sort a tbodyhoz (törzsünkhöz)
//A sor első cellájának létrehozása
const tbodyRow2Cell1 = document.createElement('td');//letrehozok egy td elemet
tbodyRow2Cell1.innerHTML = "Pannonhalmi apátság megalapítása"//itt adok manualisan erteket neki
tbodyRow2.appendChild(tbodyRow2Cell1);//hozzáadjuk a cellát a sorhoz 

//A sor második cellájának létrehozása
const tbodyRow2Cell2 = document.createElement('td');//letrehozok egy td elemet
tbodyRow2Cell2.innerHTML = "1001"//itt adok manualisan erteket neki
tbodyRow2.appendChild(tbodyRow2Cell2);//hozzáadjuk a cellát a sorhoz 

//új sort hozunk létre
const tbodyRow3 = document.createElement('tr');//itt egy uj sort adok hozza egy tr elemet
tbody.appendChild(tbodyRow3);//hozzáadjuk a sort a törzsönkhüz

//A sor első cellájának létrehozása
const tbodyRow3Cell1 = document.createElement('td');//letrehozok egy td elemet
tbodyRow3Cell1.innerHTML = "IV. Béla";//itt adok manualisan erteket neki
tbodyRow3.appendChild(tbodyRow3Cell1);//hozzáadjuk a cellát a sorhoz 

//A sor második cellájának létrehozása
const tbodyRow3Cell2 = document.createElement('td');//letrehozok egy td elemet
tbodyRow3Cell2.innerHTML = "tatárjárás"//itt adok manualisan erteket neki
tbodyRow3.appendChild(tbodyRow3Cell2);//hozzáadjuk a cellát a sorhoz 

//A sor harmadik cellájának létrehozása
const tbodyRow3Cell3 = document.createElement('td');//letrehozok egy td elemet
tbodyRow3Cell3.innerHTML = "1241-1242"//itt adok manualisan erteket neki
tbodyRow3.appendChild(tbodyRow3Cell3);//hozzáadjuk a cellát a sorhoz 

//új sor létrehozása
const tbodyRow4 = document.createElement('tr');//itt egy uj sort adok hozza egy tr elemet
tbody.appendChild(tbodyRow4);//hozzáadjuk a sort a törzsönkhüz

//A sor első cellájának létrehozása rowspannal
const tbodyRow4Cell1 = document.createElement('td');//letrehozok egy td elemet
tbodyRow4Cell1.innerHTML = "Mátyás Király"//itt adok manualisan erteket neki
tbodyRow4.appendChild(tbodyRow4Cell1);//hozzáadjuk a cellát a sorhoz 
tbodyRow4Cell1.rowSpan = "2";//Itt adjuk meg hogy hány sort egyesítsen

//A sor második cellájának létrehozása
const tbodyRow4Cell2 = document.createElement('td');//letrehozok egy td elemet
tbodyRow4Cell2.innerHTML = "Bécs elfoglalása"//itt adok manualisan erteket neki
tbodyRow4.appendChild(tbodyRow4Cell2);//hozzáadjuk a cellát a sorhoz 

//A sor harmadik cellájának létrehozása
const tbodyRow4Cell3 = document.createElement('td');//letrehozok egy td elemet
tbodyRow4Cell3.innerHTML = "1485"//itt adok manualisan erteket neki
tbodyRow4.appendChild(tbodyRow4Cell3);//hozzáadjuk a cellát a sorhoz 

//új sor létrehozása
const tbodyRow5 = document.createElement('tr');//itt egy uj sort adok hozza egy tr elemet
tbody.appendChild(tbodyRow5);//hozzáadjuk a sort a törzsönkhüz

//A sor első cellájának létrehozása
const tbodyRow5Cell1 = document.createElement('td');//letrehozok egy td elemet
tbodyRow5Cell1.innerHTML = "Kenyérmezei csata"//itt adok manualisan erteket neki
tbodyRow5.appendChild(tbodyRow5Cell1);//hozzáadjuk a cellát a sorhoz 

//A sor második cellájának létrehozása
const tbodyRow5Cell2 = document.createElement('td');//letrehozok egy td elemet
tbodyRow5Cell2.innerHTML = "1479"//itt adok manualisan erteket neki
tbodyRow5.appendChild(tbodyRow5Cell2);//hozzáadjuk a cellát a sorhoz 

//új sor létrehozása
const tbodyRow6 = document.createElement('tr');//itt egy uj sort adok hozza egy tr elemet
tbody.appendChild(tbodyRow6);//hozzáadjuk a sort a törzsönkhüz

//A sor első cellájának létrehozása rowspannal
const tbodyRow6Cell1 = document.createElement('td');//letrehozok egy td elemet
tbodyRow6Cell1.innerHTML = "II. Rákóczi Ferenc"//itt adok manualisan erteket neki
tbodyRow6.appendChild(tbodyRow6Cell1);//hozzáadjuk a cellát a sorhoz 
tbodyRow6Cell1.rowSpan = "2";//Itt adjuk meg hogy hány sort egyesítsen

//A sor második cellájának létrehozása
const tbodyRow6Cell2 = document.createElement('td');//letrehozok egy td elemet
tbodyRow6Cell2.innerHTML = "A szabadságharc kezdete"//itt adok manualisan erteket neki
tbodyRow6.appendChild(tbodyRow6Cell2);//hozzáadjuk a cellát a sorhoz 

////A sor harmadik cellájának létrehozása
const tbodyRow6Cell3 = document.createElement('td');//letrehozok egy td elemet
tbodyRow6Cell3.innerHTML = "1703"//itt adok manualisan erteket neki
tbodyRow6.appendChild(tbodyRow6Cell3);//hozzáadjuk a cellát a sorhoz 

//ús sor létrehozása
const tbodyRow7 = document.createElement('tr');//itt egy uj sort adok hozza egy tr elemet
tbody.appendChild(tbodyRow7);//hozzáadjuk a sort a törzsönkhüz

//A sor első cellájának létrehozása
const tbodyRow7Cell1 = document.createElement('td');//letrehozok egy td elemet
tbodyRow7Cell1.innerHTML = "A szabadságharc vége"//itt adok manualisan erteket neki
tbodyRow7.appendChild(tbodyRow7Cell1);//hozzáadjuk a cellát a sorhoz 

//A sor második cellájának létrehozása
const tbodyRow7Cell2 = document.createElement('td');//letrehozok egy td elemet
tbodyRow7Cell2.innerHTML = "1711"//itt adok manualisan erteket neki
tbodyRow7.appendChild(tbodyRow7Cell2);//hozzáadjuk a cellát a sorhoz 
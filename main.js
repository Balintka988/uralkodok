//Az oszlopok fejléceinek definiálása
const headercellName1 = "Uralkodo"; // Az első oszlop fejléce
const headercellName2 = "Esemény"; // A második oszlop fejléce
const headercellName3 = "Évszám"; // A harmadik oszlop fejléce

//Az uralkodók neveinek definiálása
const uralkodo1 = "I. István"; // Az első uralkodó neve
const uralkodo2 = "IV. Béla"; // A második uralkodó neve
const uralkodo3 = "Mátyás Király"; // A harmadik uralkodó neve
const uralkodo4 = "II. Rákóczi Ferenc"; // A negyedik uralkodó neve

//Az események definiálása
const esemeny1 = "Koronázás"; // Az első esemény neve
const esemeny2 = "Pannonhalmi apátság megalapítása"; // A második esemény neve
const esemeny3 = "tatárjárás"; // A harmadik esemény neve
const esemeny4 = "Bécs elfoglalása"; // A negyedik esemény neve
const esemeny5 = "Kenyérmezei csata"; // Az ötödik esemény neve
const esemeny6 = "A szabadságharc kezdete"; // A hatodik esemény neve
const esemeny7 = "A szabadságharc vége"; // A hetedik esemény neve

//Az évszámok definiálása
const evszam1 = "1000"; // Az első évszám
const evszam2 = "1001"; // A második évszám
const evszam3 = "1241-1242"; // A harmadik évszám
const evszam4 = "1485"; // A negyedik évszám
const evszam5 = "1479"; // Az ötödik évszám
const evszam6 = "1703"; // A hatodik évszám
const evszam7 = "1711"; // A hetedik évszám

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
headerCell.innerHTML = headercellName1;//A fejlec elso cellajanak feltoltese kulso valtozobol
headerRow.appendChild(headerCell);//a headerRow-hoz (fejléc sorához) adom hozzá

//A második cella létrehozása a fejléc sorában
const headerCell2 = document.createElement('th');//itt egy th elemet hozok letre
headerCell2.innerHTML = headercellName2;//A fejlec elso cellajanak feltoltese kulso valtozobol
headerRow.appendChild(headerCell2);//a headerRow-hoz (fejléc sorához) adom hozzá

//A harmadik cella létrehozása a fejléc sorában
const headerCell3 = document.createElement('th');//itt egy th elemet hozok letre
headerCell3.innerHTML = headercellName3;//A fejlec elso cellajanak feltoltese kulso valtozobol
headerRow.appendChild(headerCell3);//a headerRow-hoz (fejléc sorához) adom hozzá

//Itt hozzuk létre a táblázat törzsét
const tbody = document.createElement('tbody');//létrehozok egy tbody elemet
table.appendChild(tbody);//hozzáadjuk a tbody-t a table-hez

//Első sor létrehozása
const tbodyRow1 = document.createElement('tr');//létrehozok egy tr elemet ami az első sor lesz a tablazatban
tbody.appendChild(tbodyRow1);//hozzaadom a tbody-hoz  

//A sor első cellájának létrehozása
const tbodyRow1Cell1 = document.createElement('td');//letrehozok egy td elemet
tbodyRow1Cell1.innerHTML = uralkodo1;//Uralkodo nevét itt adjuk meg
tbodyRow1.appendChild(tbodyRow1Cell1);//hozzáadja az első sorhoz
tbodyRow1Cell1.rowSpan = "2"//Itt adjuk meg hogy hány sort egyesítsen 

//A sor második cellájának létrehozása
const tbodyRow1Cell2 = document.createElement('td');//letrehozok egy td elemet
tbodyRow1Cell2.innerHTML = esemeny1;//a cella tartalmát beállítom egy külső változóból ez esetben az esemenyt
tbodyRow1.appendChild(tbodyRow1Cell2);//hozzáadjuk a cellát a sorhoz 

//A sor harmadik cellájának létrehozása
const tbodyRow1Cell3 = document.createElement('td');//letrehozok egy td elemet
tbodyRow1Cell3.innerHTML = evszam1;//a cella tartalmát beállítom egy külső változóból ebben az esetben evszamot
tbodyRow1.appendChild(tbodyRow1Cell3);//hozzáadjuk a cellát a sorhoz 

//Új sor létrehozása
const tbodyRow2 = document.createElement('tr');//itt egy uj sort adok hozza egy tr elemet
tbody.appendChild(tbodyRow2);//hozzáadjuk a sort a tbodyhoz (törzsünkhöz)
//A sor első cellájának létrehozása
const tbodyRow2Cell1 = document.createElement('td');//letrehozok egy td elemet
tbodyRow2Cell1.innerHTML = esemeny2;//a cella tartalmát beállítom egy külső változóból
tbodyRow2.appendChild(tbodyRow2Cell1);//hozzáadjuk a cellát a sorhoz 

//A sor második cellájának létrehozása
const tbodyRow2Cell2 = document.createElement('td');//letrehozok egy td elemet
tbodyRow2Cell2.innerHTML = evszam2;//a cella tartalmát beállítom egy külső változóból
tbodyRow2.appendChild(tbodyRow2Cell2);//hozzáadjuk a cellát a sorhoz 

//új sort hozunk létre
const tbodyRow3 = document.createElement('tr');//itt egy uj sort adok hozza egy tr elemet
tbody.appendChild(tbodyRow3);//hozzáadjuk a sort a törzsönkhüz

//A sor első cellájának létrehozása
const tbodyRow3Cell1 = document.createElement('td');//letrehozok egy td elemet
tbodyRow3Cell1.innerHTML = uralkodo2;//a cella tartalmát beállítom egy külső változóból
tbodyRow3.appendChild(tbodyRow3Cell1);//hozzáadjuk a cellát a sorhoz 

//A sor második cellájának létrehozása
const tbodyRow3Cell2 = document.createElement('td');//letrehozok egy td elemet
tbodyRow3Cell2.innerHTML = esemeny3;//a cella tartalmát beállítom egy külső változóból
tbodyRow3.appendChild(tbodyRow3Cell2);//hozzáadjuk a cellát a sorhoz 

//A sor harmadik cellájának létrehozása
const tbodyRow3Cell3 = document.createElement('td');//letrehozok egy td elemet
tbodyRow3Cell3.innerHTML = evszam3;//a cella tartalmát beállítom egy külső változóból
tbodyRow3.appendChild(tbodyRow3Cell3);//hozzáadjuk a cellát a sorhoz 

//új sor létrehozása
const tbodyRow4 = document.createElement('tr');//itt egy uj sort adok hozza egy tr elemet
tbody.appendChild(tbodyRow4);//hozzáadjuk a sort a törzsönkhüz

//A sor első cellájának létrehozása rowspannal
const tbodyRow4Cell1 = document.createElement('td');//letrehozok egy td elemet
tbodyRow4Cell1.innerHTML = uralkodo3;//a cella tartalmát beállítom egy külső változóból
tbodyRow4.appendChild(tbodyRow4Cell1);//hozzáadjuk a cellát a sorhoz 
tbodyRow4Cell1.rowSpan = "2";//Itt adjuk meg hogy hány sort egyesítsen

//A sor második cellájának létrehozása
const tbodyRow4Cell2 = document.createElement('td');//letrehozok egy td elemet
tbodyRow4Cell2.innerHTML = esemeny4;//a cella tartalmát beállítom egy külső változóból
tbodyRow4.appendChild(tbodyRow4Cell2);//hozzáadjuk a cellát a sorhoz 

//A sor harmadik cellájának létrehozása
const tbodyRow4Cell3 = document.createElement('td');//letrehozok egy td elemet
tbodyRow4Cell3.innerHTML = evszam4;//a cella tartalmát beállítom egy külső változóból
tbodyRow4.appendChild(tbodyRow4Cell3);//hozzáadjuk a cellát a sorhoz 

//új sor létrehozása
const tbodyRow5 = document.createElement('tr');//itt egy uj sort adok hozza egy tr elemet
tbody.appendChild(tbodyRow5);//hozzáadjuk a sort a törzsönkhüz

//A sor első cellájának létrehozása
const tbodyRow5Cell1 = document.createElement('td');//letrehozok egy td elemet
tbodyRow5Cell1.innerHTML = esemeny5;//a cella tartalmát beállítom egy külső változóból
tbodyRow5.appendChild(tbodyRow5Cell1);//hozzáadjuk a cellát a sorhoz 

//A sor második cellájának létrehozása
const tbodyRow5Cell2 = document.createElement('td');//letrehozok egy td elemet
tbodyRow5Cell2.innerHTML = evszam5;//a cella tartalmát beállítom egy külső változóból
tbodyRow5.appendChild(tbodyRow5Cell2);//hozzáadjuk a cellát a sorhoz 

//új sor létrehozása
const tbodyRow6 = document.createElement('tr');//itt egy uj sort adok hozza egy tr elemet
tbody.appendChild(tbodyRow6);//hozzáadjuk a sort a törzsönkhüz

//A sor első cellájának létrehozása rowspannal
const tbodyRow6Cell1 = document.createElement('td');//letrehozok egy td elemet
tbodyRow6Cell1.innerHTML = uralkodo4;//a cella tartalmát beállítom egy külső változóból
tbodyRow6.appendChild(tbodyRow6Cell1);//hozzáadjuk a cellát a sorhoz 
tbodyRow6Cell1.rowSpan = "2";//Itt adjuk meg hogy hány sort egyesítsen

//A sor második cellájának létrehozása
const tbodyRow6Cell2 = document.createElement('td');//letrehozok egy td elemet
tbodyRow6Cell2.innerHTML = esemeny6;//a cella tartalmát beállítom egy külső változóból
tbodyRow6.appendChild(tbodyRow6Cell2);//hozzáadjuk a cellát a sorhoz 

////A sor harmadik cellájának létrehozása
const tbodyRow6Cell3 = document.createElement('td');//letrehozok egy td elemet
tbodyRow6Cell3.innerHTML = evszam6;//a cella tartalmát beállítom egy külső változóból
tbodyRow6.appendChild(tbodyRow6Cell3);//hozzáadjuk a cellát a sorhoz 

//ús sor létrehozása
const tbodyRow7 = document.createElement('tr');//itt egy uj sort adok hozza egy tr elemet
tbody.appendChild(tbodyRow7);//hozzáadjuk a sort a törzsönkhüz

//A sor első cellájának létrehozása
const tbodyRow7Cell1 = document.createElement('td');//letrehozok egy td elemet
tbodyRow7Cell1.innerHTML = esemeny7;//a cella tartalmát beállítom egy külső változóból
tbodyRow7.appendChild(tbodyRow7Cell1);//hozzáadjuk a cellát a sorhoz 

//A sor második cellájának létrehozása
const tbodyRow7Cell2 = document.createElement('td');//letrehozok egy td elemet
tbodyRow7Cell2.innerHTML = evszam7;//a cella tartalmát beállítom egy külső változóból
tbodyRow7.appendChild(tbodyRow7Cell2);//hozzáadjuk a cellát a sorhoz 
let array = [
    {//itt hozom létre az array tömbömnek a elso elemét (Az indexelés 0ról kezdődik)
        uralkodo: "Uralkodó",//ertekadas az array elso elemen belul az uralkodo tulajdonsagnak
        esemeny: "Esemény",//ertekadas az array elso elemen belul az esemeny tulajdonsagnak
        evszam: "Évszám"//ertekadas az array elso elemen belul az evszam tulajdonsagnak
    },
    {//itt hozom létre az array tömbömnek második elemét 
        uralkodo: "I.István",//ertekadas az array második elemen belul az uralkodo tulajdonsagnak
        esemeny: "Koronázás",//ertekadas az array második elemen belul az esemeny tulajdonsagnak
        evszam: "1000"//ertekadas az array második elemen belul az evszam tulajdonsagnak
    },
    {//itt hozom létre az array tömbömnek harmadik elemét 
        esemeny: "Pannonhalmi apátság megalapítása	",//ertekadas az array harmadik elemen belul az esemeny tulajdonsagnak
        evszam: "1001"//ertekadas az array harmadik elemen belul az evszam tulajdonsagnak
    },
    {//itt hozom létre az array tömbömnek negyedik elemét 
        uralkodo: "IV. Béla",//ertekadas az array negyedik elemen belul az uralkodo tulajdonsagnak
        esemeny: "tatárjárás",//ertekadas az array negyedik elemen belul az esemeny tulajdonsagnak
        evszam: "1241-1242"//ertekadas az array negyedik elemen belul az evszam tulajdonsagnak
    },
    {//itt hozom létre az array tömbömnek ötödik elemét 
        uralkodo: "Mátyás király",//ertekadas az array ötödik elemen belul az uralkodo tulajdonsagnak
        esemeny: "Bécs elfoglalása",//ertekadas az array ötödik elemen belul az esemeny tulajdonsagnak
        evszam: "1485"//ertekadas az array ötödik elemen belul az evszam tulajdonsagnak
    },
    {//itt hozom létre az array tömbömnek hatodik elemét
        esemeny: "Kenyérmezei csata	",//ertekadas az array hatodik elemen belul az esemeny tulajdonsagnak
        evszam: "1479"//ertekadas az array hatodik elemen belul az evszam tulajdonsagnak
    },
    {//itt hozom létre az array tömbömnek hetedik elemét 
        uralkodo: "II. Rákóczi Ferenc",//ertekadas az array hetedik elemen belul az uralkodo tulajdonsagnak
        esemeny: "A szabadságharc kezdete",//ertekadas az array hetedik elemen belul az esemeny tulajdonsagnak
        evszam: "1703"//ertekadas az array hetedik elemen belul az evszam tulajdonsagnak
    },
    {//itt hozom létre az array tömbömnek nyolcadik elemét 
        esemeny: "A szabadságharc vége",//ertekadas az array nyolcadik elemen belul az esemeny tulajdonsagnak
        evszam: "1711"//ertekadas az array nyolcadik elemen belul az evszam tulajdonsagnak
    }
]

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
headerCell.innerHTML = array[0].uralkodo;//a cellaban az array 0.tagjanak az uralkodo tulajdonsag erteke lesz megjelenitve 
headerRow.appendChild(headerCell);//a headerRow-hoz (fejléc sorához) adom hozzá

//A második cella létrehozása a fejléc sorában
const headerCell2 = document.createElement('th');//itt egy th elemet hozok letre
headerCell2.innerHTML = array[0].esemeny;//a cellaban az array 0.tagjanak az esemeny tulajdonsag erteke lesz megjelenitve 
headerRow.appendChild(headerCell2);//a headerRow-hoz (fejléc sorához) adom hozzá

//A harmadik cella létrehozása a fejléc sorában
const headerCell3 = document.createElement('th');//itt egy th elemet hozok letre
headerCell3.innerHTML = array[0].evszam;//a cellaban az array 0.tagjanak az evszam tulajdonsag erteke lesz megjelenitve 
headerRow.appendChild(headerCell3);//a headerRow-hoz (fejléc sorához) adom hozzá

//Itt hozzuk létre a táblázat törzsét
const tbody = document.createElement('tbody');//létrehozok egy tbody elemet
table.appendChild(tbody);//hozzáadjuk a tbody-t a table-hez

//Első sor létrehozása
const tbodyRow1 = document.createElement('tr');//létrehozok egy tr elemet ami az első sor lesz a tablazatban
tbody.appendChild(tbodyRow1);//hozzaadom a tbody-hoz  

//A sor első cellájának létrehozása
const tbodyRow1Cell1 = document.createElement('td');//letrehozok egy td elemet
tbodyRow1Cell1.innerHTML = array[1].uralkodo;//a cellaban az array 1.tagjanak az uralkodo tulajdonsag erteke lesz megjelenitve 
tbodyRow1.appendChild(tbodyRow1Cell1);//hozzáadja az első sorhoz
tbodyRow1Cell1.rowSpan = "2"//Itt adjuk meg hogy hány sort egyesítsen 

//A sor második cellájának létrehozása
const tbodyRow1Cell2 = document.createElement('td');//letrehozok egy td elemet
tbodyRow1Cell2.innerHTML = array[1].esemeny;//a cellaban az array 1.tagjanak az esemeny tulajdonsag erteke lesz megjelenitve 
tbodyRow1.appendChild(tbodyRow1Cell2);//hozzáadjuk a cellát a sorhoz 

//A sor harmadik cellájának létrehozása
const tbodyRow1Cell3 = document.createElement('td');//letrehozok egy td elemet
tbodyRow1Cell3.innerHTML = array[1].evszam;//a cellaban az array 1.tagjanak az evszam tulajdonsag erteke lesz megjelenitve 
tbodyRow1.appendChild(tbodyRow1Cell3);//hozzáadjuk a cellát a sorhoz 

//Új sor létrehozása
const tbodyRow2 = document.createElement('tr');//itt egy uj sort adok hozza egy tr elemet
tbody.appendChild(tbodyRow2);//hozzáadjuk a sort a tbodyhoz (törzsünkhöz)

//A sor első cellájának létrehozása
const tbodyRow2Cell1 = document.createElement('td');//letrehozok egy td elemet
tbodyRow2Cell1.innerHTML = array[2].esemeny;//a cellaban az array 2.tagjanak az esemeny tulajdonsag erteke lesz megjelenitve 
tbodyRow2.appendChild(tbodyRow2Cell1);//hozzáadjuk a cellát a sorhoz 

//A sor második cellájának létrehozása
const tbodyRow2Cell2 = document.createElement('td');//letrehozok egy td elemet
tbodyRow2Cell2.innerHTML = array[2].evszam;//a cellaban az array 2.tagjanak az evszam tulajdonsag erteke lesz megjelenitve 
tbodyRow2.appendChild(tbodyRow2Cell2);//hozzáadjuk a cellát a sorhoz 

//új sort hozunk létre
const tbodyRow3 = document.createElement('tr');//itt egy uj sort adok hozza egy tr elemet
tbody.appendChild(tbodyRow3);//hozzáadjuk a sort a törzsönkhüz

//A sor első cellájának létrehozása
const tbodyRow3Cell1 = document.createElement('td');//letrehozok egy td elemet
tbodyRow3Cell1.innerHTML = array[3].uralkodo;//a cellaban az array 3.tagjanak az uralkodo tulajdonsag erteke lesz megjelenitve 
tbodyRow3.appendChild(tbodyRow3Cell1);//hozzáadjuk a cellát a sorhoz 

//A sor második cellájának létrehozása
const tbodyRow3Cell2 = document.createElement('td');//letrehozok egy td elemet
tbodyRow3Cell2.innerHTML = array[3].esemeny;//a cellaban az array 3.tagjanak az esemeny tulajdonsag erteke lesz megjelenitve 
tbodyRow3.appendChild(tbodyRow3Cell2);//hozzáadjuk a cellát a sorhoz 

//A sor harmadik cellájának létrehozása
const tbodyRow3Cell3 = document.createElement('td');//letrehozok egy td elemet
tbodyRow3Cell3.innerHTML = array[3].evszam;//a cellaban az array 3.tagjanak az evszam tulajdonsag erteke lesz megjelenitve 
tbodyRow3.appendChild(tbodyRow3Cell3);//hozzáadjuk a cellát a sorhoz 

//új sor létrehozása
const tbodyRow4 = document.createElement('tr');//itt egy uj sort adok hozza egy tr elemet
tbody.appendChild(tbodyRow4);//hozzáadjuk a sort a törzsönkhüz

//A sor első cellájának létrehozása rowspannal
const tbodyRow4Cell1 = document.createElement('td');//letrehozok egy td elemet
tbodyRow4Cell1.innerHTML = array[4].uralkodo;//a cellaban az array 4.tagjanak az uralkodo tulajdonsag erteke lesz megjelenitve 
tbodyRow4.appendChild(tbodyRow4Cell1);//hozzáadjuk a cellát a sorhoz 
tbodyRow4Cell1.rowSpan = "2";//Itt adjuk meg hogy hány sort egyesítsen

//A sor második cellájának létrehozása
const tbodyRow4Cell2 = document.createElement('td');//letrehozok egy td elemet
tbodyRow4Cell2.innerHTML = array[4].esemeny;//a cellaban az array 4.tagjanak az esemeny tulajdonsag erteke lesz megjelenitve 
tbodyRow4.appendChild(tbodyRow4Cell2);//hozzáadjuk a cellát a sorhoz 

//A sor harmadik cellájának létrehozása
const tbodyRow4Cell3 = document.createElement('td');//letrehozok egy td elemet
tbodyRow4Cell3.innerHTML = array[4].evszam;//a cellaban az array 4.tagjanak az evszam tulajdonsag erteke lesz megjelenitve 
tbodyRow4.appendChild(tbodyRow4Cell3);//hozzáadjuk a cellát a sorhoz 

//új sor létrehozása
const tbodyRow5 = document.createElement('tr');//itt egy uj sort adok hozza egy tr elemet
tbody.appendChild(tbodyRow5);//hozzáadjuk a sort a törzsönkhüz

//A sor első cellájának létrehozása
const tbodyRow5Cell1 = document.createElement('td');//letrehozok egy td elemet
tbodyRow5Cell1.innerHTML = array[5].esemeny;//a cellaban az array 5.tagjanak az esemeny tulajdonsag erteke lesz megjelenitve 
tbodyRow5.appendChild(tbodyRow5Cell1);//hozzáadjuk a cellát a sorhoz 

//A sor második cellájának létrehozása
const tbodyRow5Cell2 = document.createElement('td');//letrehozok egy td elemet
tbodyRow5Cell2.innerHTML = array[5].evszam;//a cellaban az array 5.tagjanak az evszam tulajdonsag erteke lesz megjelenitve
tbodyRow5.appendChild(tbodyRow5Cell2);//hozzáadjuk a cellát a sorhoz 

//új sor létrehozása
const tbodyRow6 = document.createElement('tr');//itt egy uj sort adok hozza egy tr elemet
tbody.appendChild(tbodyRow6);//hozzáadjuk a sort a törzsönkhüz

//A sor első cellájának létrehozása rowspannal
const tbodyRow6Cell1 = document.createElement('td');//letrehozok egy td elemet
tbodyRow6Cell1.innerHTML = array[6].uralkodo;//a cellaban az array 6.tagjanak az uralkodo tulajdonsag erteke lesz megjelenitve 
tbodyRow6.appendChild(tbodyRow6Cell1);//hozzáadjuk a cellát a sorhoz 
tbodyRow6Cell1.rowSpan = "2";//Itt adjuk meg hogy hány sort egyesítsen

//A sor második cellájának létrehozása
const tbodyRow6Cell2 = document.createElement('td');//letrehozok egy td elemet
tbodyRow6Cell2.innerHTML = array[6].esemeny;//a cellaban az array 6.tagjanak az esemeny tulajdonsag erteke lesz megjelenitve 
tbodyRow6.appendChild(tbodyRow6Cell2);//hozzáadjuk a cellát a sorhoz 

////A sor harmadik cellájának létrehozása
const tbodyRow6Cell3 = document.createElement('td');//letrehozok egy td elemet
tbodyRow6Cell3.innerHTML = array[6].evszam;//a cellaban az array 6.tagjanak az evszam tulajdonsag erteke lesz megjelenitve 
tbodyRow6.appendChild(tbodyRow6Cell3);//hozzáadjuk a cellát a sorhoz 

//ús sor létrehozása
const tbodyRow7 = document.createElement('tr');//itt egy uj sort adok hozza egy tr elemet
tbody.appendChild(tbodyRow7);//hozzáadjuk a sort a törzsönkhüz

//A sor első cellájának létrehozása
const tbodyRow7Cell1 = document.createElement('td');//letrehozok egy td elemet
tbodyRow7Cell1.innerHTML = array[7].esemeny;//a cellaban az array 7.tagjanak az esemeny tulajdonsag erteke lesz megjelenitve 
tbodyRow7.appendChild(tbodyRow7Cell1);//hozzáadjuk a cellát a sorhoz 

//A sor második cellájának létrehozása
const tbodyRow7Cell2 = document.createElement('td');//letrehozok egy td elemet
tbodyRow7Cell2.innerHTML = array[7].evszam;//a cellaban az array 7.tagjanak az evszam tulajdonsag erteke lesz megjelenitve 
tbodyRow7.appendChild(tbodyRow7Cell2);//hozzáadjuk a cellát a sorhoz 
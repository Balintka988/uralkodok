const array = [//az array tömb létrehozása
    {//itt hozom létre az array tömbömnek az első elemét 
        uralkodo: "I.István",//ertekadas az array első elemen belul az uralkodo tulajdonsagnak
        esemeny: "Koronázás",//ertekadas az array első elemen belul az esemeny tulajdonsagnak
        evszam: "1000",//ertekadas az array első elemen belul az evszam tulajdonsagnak
        esemeny2: "Pannonhalmi apátság megalapítása	",//ertekadas az array első elemen belul az esemeny2 tulajdonsagnak
        evszam2: "1001"//ertekadas az array első elemen belul az evszam2 tulajdonsagnak
    },
    {//itt hozom létre az array tömbömnek masodik elemét 
        uralkodo: "IV. Béla",//ertekadas az array masodik elemen belul az uralkodo tulajdonsagnak
        esemeny: "tatárjárás",//ertekadas az array masodik elemen belul az esemeny tulajdonsagnak
        evszam: "1241-1242"//ertekadas az array masodik elemen belul az evszam tulajdonsagnak
    },
    {//itt hozom létre az array tömbömnek harmadik elemét 
        uralkodo: "Mátyás király",//ertekadas az array harmadik elemen belul az uralkodo tulajdonsagnak
        esemeny: "Bécs elfoglalása",//ertekadas az array harmadik elemen belul az esemeny tulajdonsagnak
        evszam: "1485",//ertekadas az array harmadik elemen belul az evszam tulajdonsagnak
        esemeny2: "Kenyérmezei csata",//ertekadas az array harmadik elemen belul az esemeny2 tulajdonsagnak
        evszam2: "1479"//ertekadas az array harmadik elemen belul az evszam2 tulajdonsagnak
    },
    {//itt hozom létre az array tömbömnek negyedik elemét 
        uralkodo: "II. Rákóczi Ferenc",//ertekadas az array negyedik elemen belul az uralkodo tulajdonsagnak
        esemeny: "A szabadságharc kezdete",//ertekadas az array negyedik elemen belul az esemeny tulajdonsagnak
        evszam: "1703",//ertekadas az array negyedik elemen belul az evszam tulajdonsagnak
        esemeny2: "A szabadságharc vége",//ertekadas az array negyedik elemen belul az esemeny2 tulajdonsagnak
        evszam2: "1711"//ertekadas az array negyedik elemen belul az evszam2 tulajdonsagnak
    }
]

const header = {//itt hozom létre a fejléc objektumomat
    uralkodo: "Uralkodó",//ertekadas az objektum uralkodo tulajdonsagnak
    esemeny: "Esemény",//ertekadas az objektum esemeny tulajdonsagnak
    evszam: "Évszám"//ertekadas az objektum evszam tulajdonsagnak
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
headerCell.innerHTML = header.uralkodo;//a cellaban az array 0.tagjanak az uralkodo tulajdonsag erteke lesz megjelenitve 
headerRow.appendChild(headerCell);//a headerRow-hoz (fejléc sorához) adom hozzá

//A második cella létrehozása a fejléc sorában
const headerCell2 = document.createElement('th');//itt egy th elemet hozok letre
headerCell2.innerHTML = header.esemeny;//a cellaban az array 0.tagjanak az esemeny tulajdonsag erteke lesz megjelenitve 
headerRow.appendChild(headerCell2);//a headerRow-hoz (fejléc sorához) adom hozzá

//A harmadik cella létrehozása a fejléc sorában
const headerCell3 = document.createElement('th');//itt egy th elemet hozok letre
headerCell3.innerHTML = header.evszam;//a cellaban az array 0.tagjanak az evszam tulajdonsag erteke lesz megjelenitve 
headerRow.appendChild(headerCell3);//a headerRow-hoz (fejléc sorához) adom hozzá

//Itt hozzuk létre a táblázat törzsét
const tbody = document.createElement('tbody');//létrehozok egy tbody elemet
table.appendChild(tbody);//hozzáadjuk a tbody-t a table-hez

function renderTable(){//itt definialom a renderTable függvényemet
    for (const currentElement of array){//itt iterálunk végig az array tömb elemein és a currentElement lesz az aktuális elem

        const row1 = document.createElement('tr');//itt hozunk létre egy új sort a táblázatunknak
        tbody.appendChild(row1);//hozzáadjuk a sort (row1-et) a tbodyhoz
    
        const uralkodo = document.createElement('td');//letrehozok egy td elemet
        uralkodo.innerHTML = currentElement.uralkodo;//itt a currentElement uralkodo tulajdonsaganak az erteket iratjuk ki
        row1.appendChild(uralkodo);//hozzáadjuk az első cellát a sorhoz
    
        const esemeny = document.createElement('td');//letrehozok egy td elemet
        esemeny.innerHTML = currentElement.esemeny;//itt a currentElement esemeny tulajdonsaganak az erteket iratjuk ki
        row1.appendChild(esemeny);//hozzáadjuk a cellát az első sorhoz
    
        const evszam = document.createElement('td');//letrehozok egy td elemet
        evszam.innerHTML = currentElement.evszam;//itt a currentElement evszam tulajdonsaganak az erteket iratjuk ki
        row1.appendChild(evszam);//hozzáadjuk a cellát az első sorhoz
    
        if (currentElement.esemeny2 !== undefined && currentElement.evszam2 !== undefined)//ez a feltétel akkor teljesül hogyha az aktuális elem esemeny2 és az evszam2 nem egyenlő undefineddel
        {
            const row2 = document.createElement('tr');//itt hozunk létre egy másik új sort a táblázatunknak
            tbody.appendChild(row2);//hozzáadjuk a sort (row2-t) a tbodyhoz
    
            uralkodo.rowSpan = "2";//itt a rowspant beállítjuk 2-re az uralkodonak mivel ha idáig lefutott akkor szükség lesz a sorok egyesítésére
    
            const esemeny2 = document.createElement('td');//letrehozok egy td elemet
            esemeny2.innerHTML = currentElement.esemeny2;//itt a currentElement esemeny2 tulajdonsaganak az erteket iratjuk ki
            row2.appendChild(esemeny2);//hozzáadjuk a cellát a második sorhoz
    
            const evszam2 = document.createElement('td');//letrehozok egy td elemet
            evszam2.innerHTML = currentElement.evszam2;//itt a currentElement evszam2 tulajdonsaganak az erteket iratjuk ki
            row2.appendChild(evszam2);//hozzáadjuk a cellát a második sorhoz
        }
    }
}

renderTable();//itt hívom meg a renderTable függvényt

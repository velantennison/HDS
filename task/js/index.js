function view(){
    var width = document.getElementById("options").offsetWidth;
    document.getElementById("viewall").style.left=width+"px";
    document.getElementById("viewall").style.top="110px";
    document.getElementById("viewall").style.display = "block";
  }
  function unview(){
    document.getElementById("viewall").style.display = "none";
  }
  function sort(){
    var width = document.getElementById("options").offsetWidth;
    document.getElementById("sot").style.left=width+"px";
    document.getElementById("sot").style.top="80px";
    document.getElementById("sot").style.display = "block";
  }
  function unsort(){
    document.getElementById("sot").style.display = "none";
  }
  function showdown(){
    document.getElementById("downs").style.display = "block";
  }
  function unshowdown(){
    document.getElementById("downs").style.display = "none";
  }
  function show(){
    var width = document.getElementById("options").offsetWidth;
    document.getElementById("opts").style.left=width+"px";
    document.getElementById("opts").style.top="-1px";
    document.getElementById("opts").style.display = "block";
  }
  function unshow(){
    document.getElementById("opts").style.display = "none";
  }

  var obj_1 = [];
  var table = document.createElement("table");
    function Upload() {
      var fileUpload = document.getElementById("fileUpload");
      var type = fileUpload.value.split('.')[1];
      var filame = fileUpload.value.split('.')[0];
      document.body.addEventListener("click",optionHide);
      current_page = 1;
      records_per_page = 5;
      obj_1 = [];
      console.log(filame.lastIndexOf('\\')+1);
      console.log(filame.substring(filame.lastIndexOf('\\')+1));
      
      if(type == "csv"){
                var reader = new FileReader();
                reader.onload = function (e) {
                    table.setAttribute("id","myTable");
                    var rows = e.target.result.split("\n");
                    var row = table.insertRow(-1);
                    var cells = rows[0];
                    var temp = cells.replace(/</g,'&lt;').replace(/>/g,'&gt;').split(/;+(?=(?:(?:[^"]*"){2})*[^"]*$)|\t+(?=(?:(?:[^"]*"){2})*[^"]*$)|,+(?=(?:(?:[^"]*"){2})*[^"]*$)/g);
                    for (var j = 0; j < temp.length; j++) {
                      var headerCell = document.createElement("TH");
                      headerCell.innerHTML = temp[j];
                      headerCell.addEventListener("dblclick",selectColoumn);
                      headerCell.addEventListener("click",cellSelect);
                      var br = document.createElement("br");
                      var search = document.createElement("input");
                      search.type ="text";
                      search.placeholder="Search";
                      search.name = "colsearch";
                      search.addEventListener("keyup", searching);
                      row.appendChild(headerCell);
                      headerCell.appendChild(br);
                      headerCell.appendChild(search);
                    }
                    obj_1.push(row);
                    for (var i = 1; i < rows.length; i++) {
                        var cells = rows[i];
                        var temp1 = cells.replace(/</g,'&lt;').replace(/>/g,'&gt;').split(/;+(?=(?:(?:[^"]*"){2})*[^"]*$)|\t+(?=(?:(?:[^"]*"){2})*[^"]*$)|,+(?=(?:(?:[^"]*"){2})*[^"]*$)/g);
                        if (cells.length > 1) {
                            var row = table.insertRow(-1);
                            for (var j = 0; j < temp1.length; j++) {
                                var cell = row.insertCell(-1);
                                cell.innerHTML = temp1[j];
                                cell.addEventListener("mousedown",showOption);
                                cell.addEventListener("click",cellSelect);
                            }
                            obj_1.push(row);
                        }
                    }
                    var sheetName = document.getElementById("sheet");
                    if(sheetName != null)
                    {
                        sheetName.remove();
                    }
                    changePage(1);
                }
                reader.readAsText(fileUpload.files[0]);
            }
            else if(type == "json"){
              var reader = new FileReader();
                reader.onload = function (e) {
                  table.setAttribute("id","myTable");
                    var object = JSON.parse(e.target.result.replace(/</g,'&lt;').replace(/>/g,'&gt;'));
                var row = table.insertRow(-1);
                try{
                for (key of object[0]) {
                  var headerCell = document.createElement("TH");
                  headerCell.innerHTML =  key;
                  headerCell.addEventListener("dblclick",selectColoumn);
                  headerCell.addEventListener("click",cellSelect);
                  var br = document.createElement("br");
                  var search = document.createElement("input");
                  search.type ="text";
                  search.placeholder="Search";
                  search.addEventListener("keyup", searching);
                  row.appendChild(headerCell);
                  headerCell.appendChild(br);
                  headerCell.appendChild(search);
                }
                obj_1.push(row);
                    for (var i = 1; i < object.length; i++) {
                      var row = table.insertRow(-1);
                            for (key in object[i]) {
                                var cell = row.insertCell(-1);
                                cell.innerHTML =  object[i][key] ;
                                cell.addEventListener("mousedown",showOption);
                                cell.addEventListener("click",cellSelect);
                            }
                            obj_1.push(row);
                    }
                  }
                  catch(err)
                  {
                    for (key in object[0]) {
                      var headerCell = document.createElement("TH");
                      headerCell.innerHTML =  key;
                      headerCell.addEventListener("dblclick",selectColoumn);
                      headerCell.addEventListener("click",cellSelect);
                      var br = document.createElement("br");
                      var search = document.createElement("input");
                      search.type ="text";
                      search.placeholder="Search";
                      search.addEventListener("keyup", searching);
                      row.appendChild(headerCell);
                      headerCell.appendChild(br);
                      headerCell.appendChild(search);
                    }
                    obj_1.push(row);
                    for (var i = 0; i < object.length; i++) {
                      var row = table.insertRow(-1);
                            for (key in object[i]) {
                                var cell = row.insertCell(-1);
                                cell.innerHTML =  object[i][key] ;
                                cell.addEventListener("mousedown",showOption);
                                cell.addEventListener("click",cellSelect);
                            }
                            obj_1.push(row);
                    }
                  }
                  var sheetName = document.getElementById("sheet");
                  if(sheetName != null)
                    {
                        sheetName.remove();
                    }
                    changePage(1);
                }
                reader.readAsText(fileUpload.files[0]);
            }
            else if(type == "xml"){
              var reader = new FileReader();
                reader.onload = function (e) {
              let value =e.target.result.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');;
              table.setAttribute("id","myTable");
              var parse=new DOMParser();
              var xml =parse.parseFromString(value,"text/xml");
              var xmlTag = xml.children[0].children[0].tagName;
              var nodes =xml.querySelectorAll(xmlTag);
                  var row = table.insertRow(-1);
                  for(var j = 0; j < nodes[0].children.length;j++)
                  {
                    var headerCell = document.createElement("TH");
                    headerCell.innerHTML = nodes[0].children[j].tagName;
                    headerCell.addEventListener("dblclick",selectColoumn);
                    headerCell.addEventListener("click",cellSelect);
                    var br = document.createElement("br");
                    var search = document.createElement("input");
                    search.type ="text";
                    search.placeholder="Search";
                    search.addEventListener("keyup", searching);
                    row.appendChild(headerCell);
                    headerCell.appendChild(br);
                    headerCell.appendChild(search);
                  }
                  obj_1.push(row);
              for(var i=0;i<nodes.length;i++){
                  var text=null;
                  var row = table.insertRow(-1);
                  text =nodes[i].textContent;
                  for(var j = 0; j< nodes[i].children.length;j++)
                  {
                    var cell = row.insertCell(-1);
                    cell.innerHTML = nodes[i].children[j].textContent;
                    cell.addEventListener("mousedown",showOption);
                    cell.addEventListener("click",cellSelect);
                  }
                  obj_1.push(row);
              }
              var sheetName = document.getElementById("sheet");
              if(sheetName != null)
                    {
                        sheetName.remove();
                    }
                changePage(1);
            }
            reader.readAsText(fileUpload.files[0]);
          }
            else if( type == "xls" || "xlsx"){
              var reader = new FileReader();
              reader.readAsArrayBuffer(fileUpload.files[0]);
              reader.onload = function(event){
                  var data = new Uint8Array(event.target.result);
                  var work_book = XLSX.read(data, {type:'array'});
                  var sheet_name = work_book.SheetNames;
                  var sheetName = document.getElementById("sheet");
                    if(sheetName != null)
                    {
                        sheetName.remove();
                    }
                    
                  var xlsxSheets = document.createElement("SELECT");
                  xlsxSheets.setAttribute("id", "sheet");
                  xlsxSheets.setAttribute("onchange", "getXlsx(work_book,sheet_name,this)");
              for (var i = 0; i < sheet_name.length; i++) {
                  var option = document.createElement("OPTION");
                  option.innerHTML = sheet_name[i];
                  option.value = i;
                  xlsxSheets.options.add(option);
                  var header = document.getElementById("header");
                  header.appendChild(xlsxSheets);
                  }

              var sheetName = document.getElementById("sheet");
              getXlsx(work_book,sheet_name,sheetName);
          
              }
            }
            else{
                alert("Invalid File");
            }
          }
          const optionsEle =document.getElementById("options");
          var selectedCell;
          function  showOption(event){
            selectedCell = event.target;
            if(event.button==2){ 
                optionsEle.style.left=window.scrollX+event.clientX+"px";
                optionsEle.style.top=window.scrollY+event.clientY+"px";
                optionsEle.style.display="block";
            }
            else{
                optionsEle.style.display = "none";
            }    
        } 
        function optionHide(){
          optionsEle.style.display = "none";
        }
        var work_book;
        var sheet_name;
        function getXlsx(a,b,sheetName) {
          work_book =a;
          sheet_name =b;
          obj_1 = [];
          table.setAttribute("id","myTable");
          var row = table.insertRow(-1);
          var sheet_data = XLSX.utils.sheet_to_json(work_book.Sheets[sheet_name[sheetName.value]], {header:1});
          var json_object = JSON.stringify(sheet_data);
          json_object = json_object.replace(/</g,'&lt;').replace(/>/g,'&gt;');
          var object = JSON.parse(json_object);
          for (key of object[0]) {
            var headerCell = document.createElement("TH");
            headerCell.innerHTML =  key;
            headerCell.addEventListener("dblclick",selectColoumn);
            headerCell.addEventListener("click",cellSelect);
            var br = document.createElement("br");
            var search = document.createElement("input");
            search.type ="text";
            search.placeholder="Search";
            search.addEventListener("keyup", searching);
            row.appendChild(headerCell);
            headerCell.appendChild(br);
            headerCell.appendChild(search);
            }
            obj_1.push(row);
                for (var i = 1; i < object.length; i++) {
                  var row = table.insertRow(-1);
                        for (key in object[i]) {
                            var cell = row.insertCell(-1);
                            cell.innerHTML =  object[i][key] ;
                            cell.addEventListener("mousedown",showOption);
                            cell.addEventListener("click",cellSelect);
                        }
                        obj_1.push(row);
                }
                changePage(1);
          }

        function addRows() {
          var table = document.getElementsByTagName('table')[0];
          let rowIndex = [...table.children].indexOf(selectedCell.parentElement);
          var cells = obj_1[1].cells.length;
          let row = table.insertRow(rowIndex+1);
          
            for(let i=0; i< cells; i++){
              var cell = row.insertCell(0);
              cell.addEventListener("mousedown",showOption);
              cell.addEventListener("click",cellSelect);
            }
            obj_1.splice(((current_page-1)*records_per_page)+rowIndex+1, 0, row);
            optionsEle.style.display = "none";
        }

        function beforeRows()
        {
          var table = document.getElementsByTagName('table')[0];
          let rowIndex = [...table.children].indexOf(selectedCell.parentElement);
          var cells = obj_1[1].cells.length;
          let row = table.insertRow(rowIndex);
            for(let i=0; i< cells; i++){
              var cell = row.insertCell(0);
              cell.addEventListener("mousedown",showOption);
              cell.addEventListener("click",cellSelect);
            }
            obj_1.splice(((current_page-1)*records_per_page)+rowIndex, 0, row);
            optionsEle.style.display = "none";
        }
        function addColumn()
        {
          var columnIndex = selectedCell.cellIndex;
          var cellvalue;
          var colName = prompt("Enter Column Name", "Column");
            if (colName != null) {
          for(var i = 0; i < obj_1.length; i++){
            if(i == 0)
            {
              var headerCell = document.createElement("th");
              headerCell.innerHTML = colName;
              headerCell.addEventListener("dblclick",selectColoumn);
              headerCell.addEventListener("click",cellSelect);
              obj_1[i].children[columnIndex].after(headerCell);
              var br = document.createElement("br");
              var search = document.createElement("input");
              search.type ="text";
              search.placeholder="Search";
              search.addEventListener("keyup", searching);
              headerCell.appendChild(br);
              headerCell.appendChild(search);
              
            }
          else {
            if(i == 1)
            cellvalue = prompt("Enter Cell Value", "Text");
            var cell = obj_1[i].insertCell(columnIndex+1);
            cell.innerHTML = cellvalue;
            cell.addEventListener("mousedown",showOption);
            cell.addEventListener("click",cellSelect);
          }
        }
          optionsEle.style.display = "none";
        }
      }
     
      function beforeColumn(){
          var cellvalue;
          var columnIndex = selectedCell.cellIndex;
          var colName = prompt("Enter Column Name", "Column");
            if (colName != null) {
          for(var i = 0; i < obj_1.length; i++){
            if(i == 0)
            {
              var headerCell = document.createElement("th");
              headerCell.innerHTML = colName;
              headerCell.addEventListener("dblclick",selectColoumn);
              headerCell.addEventListener("click",cellSelect);
              obj_1[i].children[columnIndex].before(headerCell);
              var br = document.createElement("br");
              var search = document.createElement("input");
              search.type ="text";
              search.placeholder="Search";
              search.addEventListener("keyup", searching);
              headerCell.appendChild(br);
              headerCell.appendChild(search);
            }
          else {
            if(i == 1)
            cellvalue = prompt("Enter Cell Value", "Text");
            var cell = obj_1[i].insertCell(columnIndex);
            cell.innerHTML = cellvalue;
            cell.addEventListener("mousedown",showOption);
            cell.addEventListener("click",cellSelect);
          }
        }
          optionsEle.style.display = "none";
        }
      }
        function deleteColumn()
        {
          var columnIndex =[...selectedCell.parentElement.children].indexOf(selectedCell);
          for(var i=0;i < obj_1.length ;i++)
          {
            var cell = obj_1[i].deleteCell(columnIndex);
          }
          optionsEle.style.display = "none";
        }

        function deleteRows() {
          var table = document.getElementsByTagName('table')[0];
          let rowIndex = [...table.children].indexOf(selectedCell.parentElement);
          obj_1.splice(((current_page-1)*records_per_page)+rowIndex,1);
          table.deleteRow(rowIndex);
          optionsEle.style.display = "none";
        }

        function downloadCSV() {
          var csv_data = [];
          var rows = obj_1; //document.getElementsByTagName('tr');
          for (var i = 0; i < rows.length; i++) {
              var cols = rows[i].querySelectorAll('td');
              var col = rows[i].querySelectorAll('th');
              var csvrow = [];
              for (var j = 0; j < col.length; j++) {
                  csvrow.push(col[j].innerText.replace("\n",""));
              }
              for (var j = 0; j < cols.length; j++) {
                  csvrow.push(cols[j].innerText);
              }
              csv_data.push(csvrow.join(","));
          }
          csv_data = csv_data.join('\n');

          var filename = prompt("Please Enter File name", "tabletocsv");
            if (filename != null) {
                CSVFile = "data:text/csv;charset=utf-8," + encodeURIComponent(csv_data);
                var downloadAnchorNode = document.createElement('a');
                downloadAnchorNode.setAttribute("href",CSVFile);
                downloadAnchorNode.setAttribute("download" , filename + ".csv");
                document.body.appendChild(downloadAnchorNode);
                downloadAnchorNode.click();
                downloadAnchorNode.remove();
            }
          
          optionsEle.style.display = "none";
        }

        function downloadJsonFile(){
          var rows = obj_1;//document.getElementsByTagName('tr');
          var data = [];
          var headers =[];
          for (var i=0; i< rows[0].cells.length; i++) {
            headers[i] = rows[0].cells[i].innerText;
          }
          for(var i=1 ; i< rows.length; i++)
          {
            var tableRow = rows[i];
            var rowData = {};
            for(var j=0;j<tableRow.cells.length;j++)
            {
              rowData[headers[j]] = tableRow.cells[j].innerText;
            }
            data.push(rowData);
          }
          var myjson = JSON.stringify(data,undefined,4);
          
          var json = myjson.replace(/\\n/g, '');
          var filename = prompt("Please Enter File name", "tabletojson");
            if (filename != null) {
            var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(json);
            var downloadAnchorNode = document.createElement('a');
            downloadAnchorNode.setAttribute("href",dataStr);
            downloadAnchorNode.setAttribute("download" , filename+".json");
            document.body.appendChild(downloadAnchorNode);
            downloadAnchorNode.click();
            downloadAnchorNode.remove();
            }
            optionsEle.style.display = "none";
        }
        function downloadXml() {
            var xml = "";
            var trItem = obj_1;
            var headings = trItem[0].querySelectorAll("th");
             xml = "<Root>\n"
            for (i = 1; i < trItem.length; i++) {
                let cells = trItem[i].children;
                xml += "<data>\n\t"
                for(let j=0;j<cells.length;j++){
                    let name = headings[j].innerText.replace("\n","");  //replace(/[^a-zA-Z0-9]/g,"")
                    if(name == null | name == "")
                      name = "null";
                    let value = cells[j].innerText;
                    xml += "\t"+`<${name}> ${value} </${name}>`+"\n";
                }
                xml += "</data>\n"
            }      
            xml += '</Root>';
            var filename = prompt("Please Enter File name", "tabletoxml");
            if (filename != null) {
            var dataStr = "data:text/xml;charset=utf-8," + encodeURIComponent(xml);
            var downloadAnchorNode = document.createElement('a');
            downloadAnchorNode.setAttribute("href",dataStr);
            downloadAnchorNode.setAttribute("download" , filename+".xml");
            document.body.appendChild(downloadAnchorNode);
            downloadAnchorNode.click();
            downloadAnchorNode.remove();
            }
            optionsEle.style.display = "none";
        }
        function downloadexcel(){
            var data = document.getElementsByTagName('table')[0];
            var file = XLSX.utils.table_to_book(data, {sheet: "sheet1"});
            var filename = prompt("Please Enter File name", "tabletoxlsx");
            if (filename != null) {
            XLSX.write(file, { bookType: 'xlsx', bookSST: true, type: 'base64' });
            XLSX.writeFile(file, filename+'.xlsx');
            }
            optionsEle.style.display = "none";
        }

        function ascsortTable() {
        var table, rows, i, x, y;
        var store = [];
        table = document.getElementById("myTable");
        var pos = selectedCell.cellIndex;

            for (i = 1; i < obj_1.length; i++) {
                var row = obj_1[i];
        var sortnr = isNaN(parseInt(row.cells[pos].innerText))?row.cells[pos].innerText.toLowerCase():parseInt(row.cells[pos].innerText);
        store.push([sortnr, row]);
            }
                  store.sort(function(x,y){
                    if(isNaN(x[0]))
                      return  x[0].localeCompare(y[0]);
                      else
                      return x[0] - y[0] ;               
                  });
                  obj_1 = [];
                  obj_1.push(table.rows[0]);
            for(var i=0, len=store.length; i<len; i++){
              obj_1.push(store[i][1]);
              changePage(current_page);
    }
        store = null;
        optionsEle.style.display = "none";
      }
      function dessortTable(){
        var table, rows, i, x, y;
        var store = [];
        table = document.getElementById("myTable");
        var pos = selectedCell.cellIndex;
            for (i = 1; i < obj_1.length; i++) {
                var row = obj_1[i];
        var sortnr = isNaN(parseInt(row.cells[pos].innerText))?row.cells[pos].innerText.toLowerCase():parseInt(row.cells[pos].innerText);
        store.push([sortnr, row]);
            }
                  store.sort(function(x,y){
                    if(isNaN(x[0]))
                      return  y[0].localeCompare(x[0]);
                      else
                      return y[0] - x[0] ;               
                  });
                  obj_1 = [];
                  obj_1.push(table.rows[0]);
            for(var i=0, len=store.length; i<len; i++){
              obj_1.push(store[i][1]);
              changePage(current_page);
    }
        store = null;
        optionsEle.style.display = "none";
      }
      function selectColoumn(){
        selectedCell = event.target;
        var table = document.getElementsByTagName('table')[0];
          var rows = table.children;
          var columnIndex = selectedCell.cellIndex;
          if(event.ctrlKey)
          {
            for(var i = 0; i < rows.length; i++){
                rows[i].children[columnIndex].setAttribute("class", "highlight");
            }
          }
          else{
            $(this).closest('table').find('td').not(this).removeClass('highlight');
            $(this).closest('table').find('th').not(this).removeClass('highlight');
            for(var i = 0; i < rows.length; i++){
                rows[i].children[columnIndex].setAttribute("class", "highlight");
            }
        }
      }
      function cellSelect(){
        selectedCell = null;
        console.log(event.target.tagName);
        if(event.target.tagName == "TH" || event.target.tagName == "TD")
        {
        if(event.ctrlKey)
        {
          if(event.target.getAttribute("class") === "highlight")
          {
            event.target.removeAttribute("class");
          } 
          else {
            event.target.setAttribute("class", "highlight");     
            }
        }
        else{
            if(event.target.getAttribute("class") === "highlight"){
              event.target.removeAttribute("class");
            } 
            else {
              $(this).closest('table').find('td').not(this).removeClass('highlight');
              $(this).closest('table').find('th').not(this).removeClass('highlight');          
              event.target.setAttribute("class", "highlight");     
              }
          }
        }
        }
        function rightAlign(){
          var tds = document.getElementsByClassName("highlight");
          for (var i = 0; i<tds.length; i++) {
              tds[i].style.textAlign ="right";
          }
        }
        function leftAlign(){
          var tds = document.getElementsByClassName("highlight");
          for (var i = 0; i<tds.length; i++) {
              tds[i].style.textAlign ="left";
          }
        }

        function centerAlign(){
          var tds = document.getElementsByClassName("highlight");
          for (var i = 0; i<tds.length; i++) {
              tds[i].style.textAlign ="center";
          }
        }
        function justify(){
          var tds = document.getElementsByClassName("highlight");
          for (var i = 0; i<tds.length; i++) {
              tds[i].style.textAlign ="inherit";
          }
        }
      var filterCount;
      var searchCount;
      var f = document.createElement("span");
      
        function filter() {
          filterCount = 0;
          var input, filter, table, tr, td, i, txtValue;
          input = document.getElementById("myInput");
          filter = input.value.toUpperCase();
          table = document.getElementById("myTable");
          rows = obj_1;
          for (let row of rows) {
            cells = row.getElementsByTagName("td");
            for (let cell of cells) {
              cell.innerHTML = (cell.textContent).replace(/(<([^>]+)>)/gi,'');
              if (cell.textContent.toUpperCase().indexOf(filter) > -1) {
                filterCount++;

                  let reges = new RegExp(filter,"gi");
                  cell.innerHTML = (cell.textContent).replace(reges,"<mark>$&</mark>");

              } 
            }
            }    
            if(filter == "")
           {
            filterCount = "";
            f.innerHTML = "";
           }
           else
            f.innerHTML = filterCount+" matches found";
            document.getElementById("searchtab").appendChild(f);   
          }
          function searching(){
            searchCount = 0;
            table = document.getElementById("myTable");
            var columnIndex = event.target.parentElement.cellIndex;
            var filter = event.target.value.toUpperCase();
            var rows = obj_1;
            for(var i=0;i<obj_1.length;i++){
              var cell = rows[i].getElementsByTagName("td")[columnIndex];
              if(cell){
                cell.innerHTML = (cell.textContent).replace(/(<([^>]+)>)/gi,'');
                if(cell.textContent.toUpperCase().indexOf(filter) > -1)
                {
                  searchCount++;
                  let reges = new RegExp(filter,"gi");
                  cell.innerHTML = (cell.textContent).replace(reges,"<mark>$&</mark>");
                }
              }
            }
          }
var current_page = 1;
var records_per_page = 5;

function prevPage()
{
    if (current_page > 1) {
        current_page--;
        changePage(current_page);
    }
}

function nextPage()
{
    if (current_page < numPages()) {
        current_page++;
        changePage(current_page);
    }
}
    
function changePage(page)
{
    var btn_next = document.getElementById("btn_next");
    var btn_prev = document.getElementById("btn_prev");
    var pagediv = document.getElementById("pagediv");
    pagediv.style.visibility = "visible";
    var listing_table = document.getElementById("TAB");
    var page_span = document.getElementById("page");
 var table = document.createElement("table");
 table.setAttribute("id","myTable");
        if (page < 1) {
            page = 1;
        } 
    if (page > numPages()) 
        page = numPages();

    listing_table.innerHTML = "";
    table.appendChild(obj_1[0]);
    listing_table.appendChild(table);
    for (var i = (page-1) * records_per_page; i < (page * records_per_page) && i < obj_1.length - 1 ; i++) {
        table.appendChild(obj_1[i + 1]);
    }
    page_span.innerHTML = page + "/" + numPages();
    resizableGrid(table);
    if (page == 1) {
        btn_prev.style.visibility = "hidden";
        btn_next.style.visibility = "visible";
    }   
    else if (page == numPages()) {
        btn_prev.style.visibility = "visible";
        btn_next.style.visibility = "hidden";
    } else {
        btn_next.style.visibility = "visible";
        btn_prev.style.visibility = "visible";
    }
}

function numPages()
{
    return Math.ceil((obj_1.length-1)/ records_per_page);
}

function limitshow(row){
  records_per_page = row;
  changePage(1);
  optionsEle.style.display = "none";
}


var tables = document.getElementsByTagName('table')[0];

function resizableGrid(table) {
 var row = table.getElementsByTagName('tr')[0];
 cols = row ? row.children : undefined;
 if (!cols) return;
 
 var tableHeight = table.offsetHeight;
 var tableWidth = table.offsetWidth;
 var tableLeft = table.offsetLeft;
 var div2;
var rows = table.getElementsByTagName('tr');

 table.style.overflow = 'hidden';
 
 for (var i=0;i<cols.length;i++){
  var div = createDiv(tableHeight);
  cols[i].appendChild(div);
  cols[i].style.position = 'relative';
  setListeners(div);
 }

 function setListeners(div){
  var pageX,curCol,nxtCol,curColWidth,nxtColWidth;

  div.addEventListener('mousedown', function (e) {
   curCol = e.target.parentElement;
   nxtCol = curCol.nextElementSibling;
   pageX = e.pageX; 
 
   var padding = paddingDiff(curCol);
 
   curColWidth = curCol.offsetWidth - padding;
   if (nxtCol)
    nxtColWidth = nxtCol.offsetWidth - padding;
  });

  div.addEventListener('mouseover', function (e) {
   e.target.style.borderRight = '2px solid #0000ff';
  })

  div.addEventListener('mouseout', function (e) {
   e.target.style.borderRight = '';
  })

  document.addEventListener('mousemove', function (e) {
   if (curCol) {
    var diffX = e.pageX - pageX;
 
    // if (nxtCol)
    //  nxtCol.style.width = (nxtColWidth - (diffX))+'px';

    curCol.style.width = (curColWidth + diffX)+'px';
   }
  });

  document.addEventListener('mouseup', function (e) { 
   curCol = undefined;
   nxtCol = undefined;
   pageX = undefined;
   nxtColWidth = undefined;
   curColWidth = undefined;
  });
 }
 
 function createDiv(height){
  var div = document.createElement('div');
  div.style.top = 0;
  div.style.right = 0;
  div.style.width = '2px';
  div.style.position = 'absolute';
  div.style.cursor = 'col-resize';
  div.style.userSelect = 'none';
  div.style.height = height + 'px';
  return div;
 }
 
 function paddingDiff(col){
  if (getStyleVal(col,'box-sizing') == 'border-box'){
   return 0;
  }
 
  var padLeft = getStyleVal(col,'padding-left');
  var padRight = getStyleVal(col,'padding-right');
  return (parseInt(padLeft) + parseInt(padRight));

 }

 function getStyleVal(elm,css) {
  return (window.getComputedStyle(elm, null).getPropertyValue(css))
 }
};
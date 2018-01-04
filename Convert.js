var myObj = [
{	
	"a":10,
	"b":20,
	"c":30
},
{
	"a":21,
	"b":31,
	"c":41
},
{
	"a":59,
	"b":69,
	"c":39
}
];

var myTitle = {
	a: 'aaaa',
	b: 'bbbb',
	c: 'cccc'
}

var tab_text;
var data_type = 'data:application/vnd.ms-excel';

function CreateTable(Obj) {
	var TableMarkup='<table id="myModifiedTable" class="visibilityHide">';

	TableMarkup += '<thead><tr>';
	for(x in Obj[0]){
		if($('#title')[0].checked)
			TableMarkup += '<td><b>'+myTitle[x]+'</b></td>';
		else
			TableMarkup += '<td><b>'+x+'</b></td>';
	}
	TableMarkup += '</tr></thead>';


	TableMarkup += '<tbody>';
	for( i=0; i<Obj.length; i++){
		TableMarkup += '<tr>';
		for(x in Obj[i]){
			TableMarkup += '<td>'+Obj[i][x]+'</td>';
		}
		TableMarkup += '</tr>';
	}
	TableMarkup += '</tbody></table>';

	//console.log(TableMarkup);
	$('#tableHolder').append(TableMarkup);
}

function CreateExcel() {
	CreateTable(myObj);
	tab_text = '<html xmlns:x="urn:schemas-microsoft-com:office:excel">';
	tab_text = tab_text + '<head><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet>';
	tab_text = tab_text + '<x:Name>Demo</x:Name>';
    tab_text = tab_text + '<x:WorksheetOptions><x:Panes></x:Panes></x:WorksheetOptions>';
    tab_text = tab_text + '</x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml></head><body>';

    tab_text = tab_text + "<table border='1px'>";
    tab_text = tab_text + $('#myModifiedTable').html();
    tab_text = tab_text + '</table></body></html>';

    data_type = 'data:application/vnd.ms-excel';

    ///----------------------------------------------------///
	//console.log(data_type);
	console.log(tab_text);
	$('#download')[0].click();
	$('#tableHolder').html("");
	///----------------------------------------------------///
}

$($("#download")[0]).click(function(){

	$("#download").attr('href', data_type + ', ' + encodeURIComponent(tab_text));
	$("#download").attr('download', 'some.xls');
});

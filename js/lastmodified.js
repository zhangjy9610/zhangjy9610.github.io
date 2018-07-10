function makeArray() { 
    for (i = 0; i < makeArray.arguments.length; i++) 
        this[i + 1] = makeArray.arguments[i]; 
}

var modifiedMonth = new makeArray('Jan','Feb','Mar','Apr',
        'May','Jun','Jul','Aug','Sept',
        'Oct','Nov','Dec');

var modifiedDate = new Date(document.lastModified); 

document.write('Last Modified : ' + modifiedMonth[modifiedDate.getMonth() + 1] + ' ' + 
        modifiedDate.getDate() + ', ' + 
        modifiedDate.getFullYear());



let quotes=[];
render()

function add(){
    let textbox=document.getElementById('quotext');
    let quote=textbox.value;
    quotes.push(quote);

    render();
}

function render(){
    document.getElementById('quotes-list').innerHTML='';
    
    
    quotes.forEach(function (title) {
        
        
        let element=document.createElement('div');
        element.innerText=title;
        let quoteList=document.getElementById('quotes-list')
        quoteList.appendChild(element);
    });
}

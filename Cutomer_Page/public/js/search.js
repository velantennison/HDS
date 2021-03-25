function search_animal() { 
    let input = document.getElementById('searchbar').value 
    input=input.toLowerCase(); 
    let x = document.getElementsByClassName('column'); 
      
    for (i = 0; i < x.length; i++) {  
        if (!x[i].innerHTML.toLowerCase().includes(input)) { 
            x[i].style.display="none";
						
			//x[i].style.list-style-type="none";
        } 
        else { 
            x[i].style.display="list-item";
			
    
			
			
             			
        } 
    } 
} 

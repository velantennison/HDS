window.addEventListener('load', () => {
	    const name = sessionStorage.getItem('BRANDNAME');
        const price = sessionStorage.getItem('PRICE');
		const main_image = sessionStorage.getItem('MAIN_IMAGE');	
		const image2 = sessionStorage.getItem('IMAGE2_PIC');
        const image3 = sessionStorage.getItem('IMAGE3_PIC');
        const image4 = sessionStorage.getItem('IMAGE4_PIC');		
		//const Img = sessionStorage.getItem('IMAGE');
		//const Desc = sessionStorage.getItem('DESCRIPTION');
		 document.getElementById('Name').innerHTML = name;
		 document.getElementById('Price').innerHTML = price;
		 document.getElementById('Main_image').src= main_image;
		  document.getElementById('Main_image1').src= main_image;
		  document.getElementById('2image_pic').src=image2;
		  document.getElementById('2image_pic1').src=image2;
		  document.getElementById('3image_pic').src=image3;
		  document.getElementById('3image_pic1').src=image3;
		  document.getElementById('4image_pic').src=image4;
		  document.getElementById('4image_pic1').src=image4;
		 //document.getElementById('image').src=Img;
		 //document.getElementById('desc1').innerHTML = Desc;
		  console.log(name);
		 
		 }
		 )
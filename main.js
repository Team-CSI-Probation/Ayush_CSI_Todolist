 const addb = document.querySelector('.addb');
 var enter = document.querySelector('.enter');
 const container = document.querySelector('.container');

 class item{
     constructor(itemName){
         this.createDiv(itemName);
     }

     createDiv(itemName){
         let input = document.createElement('enter');
         input.value = itemName;
         input.disabled = true;
         input.classList.add('itemt');
         input.type = "text";

         let itembox = document.createElement('div');
         editb.innerHTML = "EDIT";
         itembox.classList.add('item');

         let editb = document.createElement('button');
         removeb.innerHTML = "REMOVE";
         editb.classList.add('editb');

         let removeb = document.createElement('button');
         removeb.classList.add('removeb');

         container.appendChild(itembox);

         itembox.appendChild(enter);
         itembox.appendChild(editb);
         itembox.appendChild(removeb);


         editb.addEventListener('click', () => this.edit(enter));

         removeb.addEventListener('click', () => this.remove(itembox));
      
        }

        edit(itemt){
            input.disabled = !.disabled;
        }

        function check(){
            if(input1.value != ""){
                new item(input1.value);
                input1.value = "";
        }

    }

    addb.addEventListener('click',check);
    window.addEventListener('keydown',(e) => {
        if(e.which == 13){
            check();
        }
    })


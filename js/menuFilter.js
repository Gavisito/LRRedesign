//this function filter the menu section in menu.html
function filterMenu(){
        //this get each secton in the menu options
        var pastaSection = document.getElementById('pastasection');
        var breadSection = document.getElementById('breadsection');
        var latinoSection = document.getElementById('latinosection');

        //this gets the checkboxes in the sidebase
        var allCheckbox = document.getElementById('all');
        var pastaCheckbox = document.getElementById('pasta');
        var breadCheckbox = document.getElementById('bread');
        var latinoCheckbox = document.getElementById('latino');

        //when the All checkbox iw checked then all sections are shown
        if (allCheckbox.checked){
            console.log('checked');
            pastaSection.setAttribute('style', 'display:block');
            breadSection.setAttribute('style', 'display:block');
            latinoSection.setAttribute('style', 'display:block');
        }

        //otherwise, it will check if pasta, bread, or latino meals are checked or not
        else{
            console.log('not checked');
            if (pastaCheckbox.checked){ //show pasta section
                console.log('checked');
                pastaSection.setAttribute('style', 'display:block');
            }
            else{ //hide pasta section
                console.log('not checked');
                pastaSection.setAttribute('style', 'display:none');
            }
    
            if (breadCheckbox.checked){ //show bread section
                console.log('checked');
                breadSection.setAttribute('style', 'display:block');
            }
            else{ //hide bread section
                console.log('not checked');
                breadSection.setAttribute('style', 'display:none');
            }
    
            if (latinoCheckbox.checked){//show latino section
                console.log('checked');
                latinoSection.setAttribute('style', 'display:block');
            }
            else{ //hide latino section
                console.log('not checked');
                latinoSection.setAttribute('style', 'display:none');
            }
        }
}

//these are id event listener of the checkbox. when it is changes value between checked to unchecked and vice versa it will update its display
document.getElementById('all').addEventListener('change', filterMenu);
document.getElementById('pasta').addEventListener('change', filterMenu);
document.getElementById('bread').addEventListener('change', filterMenu);
document.getElementById('latino').addEventListener('change', filterMenu);
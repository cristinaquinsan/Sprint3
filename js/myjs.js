//cualquier duda, esto salió de ==> https://lengstorf.com/get-form-values-as-json/


const formToJSON = test_form => [].reduce.call(test_form, (data, element) => {

    data[element.name] = element.value;
    return data;

}, {});


//Funcion del listener de evento para eevitar submit
const handleFormSubmit = event => {

    //Evita el submit por default
    event.preventDefault();

    //Llamada a la funció que hace el store de información en el JSON
    const data = {};

    const dataContainer = document.getElementsByClassName('show_JSON')[0];
    dataContainer.textContent = JSON.stringify(data, null, " ");
};

const myForm = document.getElementById('test_form')[0];
myForm.addEventListener('submit', handleFormSubmit);

/*
function captureFORM(){

}
*/

/*******************************************************************************
                            localStorage MMETHODS
*******************************************************************************/


function saveJSON(){
        var myJSON ={'users':[
            {'id':1, 'name':'Anne', 'pass':'1111', 'rol':1 },
            {'id':2, 'name':'Bob', 'pass':'2222', 'rol':2 },
            {'id':3, 'name':'Charlie', 'pass':'3333', 'rol':2 },
            {'id':4, 'name':'Damien', 'pass':'4444', 'rol':3 }
        ]};

        localStorage.setItem('myJSONls', JSON.stringify(myJSON));

}

function loadJSON(){
        var myJSON = JSON.parse(localStorage.getItem('myJSONls'));
        $.each(myJSON.users, function(index, element){
                console.log("id: " + element.id);
        });


}


function eraseJSON(){

        localStorage.removeItem('myJSONls');

}

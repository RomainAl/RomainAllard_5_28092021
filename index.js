
async function check(api_link){
    const datas = await fetch(api_link)
        .then(function(res) {
        if (res.ok) {
            return res.json();
        }
        })
        .then(function(datas) {
            let cards_api = document.createElement("div");
            document.getElementById("cards").appendChild(cards_api);
            cards_api.classList.add('row');
            for (let data of datas){
                let card = document.createElement("div");
                cards_api.appendChild(card);
                card.classList.add('col-12');
                card.classList.add('col-lg-2');
                card.innerHTML = 
                '<div class="card mb-4 mb-lg-0 shadow-lg">' + 
                    '<img src='+ data.imageUrl +' alt= ' + data.name + ' class="card-img-top">' + 
                    '<div class="card-body>' +
                        '<h5 class="card-title">' + data.name + '</h5>' + 
                        '<p class="card-text">' + data.price + "$"+'</p>' +
                        '<p class="card-text">' + data.description + '</p>' +
                        '<a id ="'+ data._id + '"href="#" class="btn btn-primary stretched-link">Selectionnez</a>' +
                    '</div>' + 
                '</div>';
                document.getElementById(data._id).addEventListener('click', function(event){
                    console.log(event.currentTarget.id);
                })
            }
            return datas;
        })
        
        .catch(function(err) {
            if (err) throw err;
        });

    console.log(datas);
    return datas;
}

const datas_ted = check("http://localhost:3000/api/teddies");
const datas_cam = check("http://localhost:3000/api/cameras");
const datas_fur = check("http://localhost:3000/api/furniture");

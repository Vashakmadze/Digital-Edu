var dataContainer = document.getElementById("data-info"); // ვიღებთ ელემენტს აიდით და ვქმნით ცვლადს
var btn = document.getElementById("btn");
 // ვიღებთ ელემენტს აიდით და ვქმნით ცვლადს

function ajax() {
    btn.addEventListener("click", function() { // ვამატებთ ღილაკის კლიკზე ფუნქციას
        var ourRequest = new XMLHttpRequest(); // ვქმნით ცვლადს რათა წამოვიღოთ ინფორმაცია
        ourRequest.open('GET', 'https://jsonplaceholder.typicode.com/posts/'); // GET-ით სერვერს ინფორმაციას ვართმევთ და მეორე პარამეტრით ვუთითებთ ლინკს საიდანააც ინფორმაცია უნდა წამოვიღოთ
        ourRequest.onload = function() { // ინფორმაციის წამოღებისასვე შესრულდება ანონიმური ფუნქცია
            var ourData = JSON.parse(ourRequest.responseText); // ვქმნიით ცვლადს სადაც ვიყენებთ ჩაშენებულ ფუნქციას, რომელიც ჩვენს წამოღებულ ინფორმაციას სტრინგიდან გადაიყვნას მასივში ან ობიექტში
            createHTML(ourData); // ვიძახებთ ფუნქციას რომელსაც პარამეტრად გადეცემა ჩვენს მიერ შექმნილი ცვლაიდ
            console.log(ourData) // ვამოწმებ ინფორმაციას
        };
        ourRequest.send(); // ვაგზავნით შეთავაზებას
      });
      
}

window.onload = ajax();

function createHTML(data) { // ვქმნით ფუნქციას, რომელსაც პარამეტრად data-ს, რომელსაც გამოვიყენებთ ამავო ფუნქციაში 
    var htmlString = ""; // ვქმნით ცვლადს რომელიც html-ში ჩაწერს ჩვენს წამოღებულ ინფორმაციას

    for(i = 0; i < 3; i++) { // ვქმნით ციკლს სადაც ვატარებთ წამოღებული ინფორმაციის ნაწილს და ამ ნაწილებს ვუმატებთ სასურველ სტრინგს
        htmlString += "<p>" + data[i].title + "<span>" + " This is Title " + "</span>" + data[i].body + "<span>" + "This is body" + "</span> " + ".</p>"
    }
    dataContainer.insertAdjacentHTML('beforeend', htmlString); // ამ მეთოდით ჩვენ ვირჩევთ ელემენტს html-ში და ამ ელემენტში ვსვავთ ზემოთ მოცემულ ციკლს
}

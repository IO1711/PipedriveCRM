//base url = https://api.pipedrive.com/v2?5025672e38f7be0d749eb81bbe59c5e540707690


//API key = 5025672e38f7be0d749eb81bbe59c5e540707690   /dealFields?api_token=${apiToken}

import FetchWrapper from "./fetch-wrapper";

const testDiv = document.querySelector("#result");
const testBtn = document.querySelector("#testButton");
const API = new FetchWrapper("https://salesautomators23.pipedrive.com/api/v1");
const apiKey = "5025672e38f7be0d749eb81bbe59c5e540707690";
const form = document.querySelector("#create-job-form");

const test = () => {
    

    API.post("/deals?api_token=5025672e38f7be0d749eb81bbe59c5e540707690", {
        "title" : "New job",
        "698fb7a933051bbd9f507e74df8240e4ca2d8a4f" : "Bilolbek"
    }).then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error("Failure: " + error);
    });
}

testBtn.addEventListener("click", test);

form.addEventListener("submit", event => {
    event.preventDefault();

    const formData = new FormData(form);
    const jsonObject = Object.fromEntries(formData.entries());

    console.log(jsonObject);

    API.post("/deals?api_token=5025672e38f7be0d749eb81bbe59c5e540707690", {
        "title" : "Full job",
        ...jsonObject
    }).then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error("Failure: " + error);
    });
});
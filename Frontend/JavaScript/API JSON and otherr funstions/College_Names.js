let url = "http://universities.hipolabs.com/search?name="

let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
    let country = document.querySelector("input").valuev;
    console.log(country);
    let collArr = await getColleges(country) ;
    console.log(collArr);
});

async function getColleges(country) {
    try {
        let res = await axios.get(url + country);
        console.log(res)
    } catch(e) {
        console.log("Error found : ",e);
        return []
    }
}
var api1 = 'https://api.github.com/repos/pandas-dev/pandas/issues'
var api = 'https://restcountries.com/v3.1/all'


// v1 = fetch(api1)
// v1
// .then((res)=>res.json()) // res = response
// .then(data=>{
//     console.log('api.github.com');
//     console.log(data);
// })

// v2 = fetch(api)
// v2
// .then((res)=>res.json())
// .then(data=>{
//     console.log('rest country');
//     console.log(data);
// })

async function somerandom() {
    console.log(1);

    var prom = await new Promise((res, rej) => {
        setTimeout(() => {
            res()
            console.log('Hi hello');
        }, 2000)
    })
    // var rescheck = await prom
    console.log('Welcome');
}

async function somerandomApi() {
    v1 = await fetch(api1) // response
    checkv1 = v1.json() // promise
    checkv1
        .then(res => {
            console.log('api.github.com');
            console.log(res)
        })

    v1 = await fetch(api) // response
    checkv1 = v1.json() // promise
    checkv1
        .then(res => {
            console.log('rest country');
            console.log(res)
        })
    // v2 = await fetch(api)

}
// somerandomApi()

async function somerandomApi2() {
    v1 = await fetch(api1) // response
    checkv1 = await v1.json() // promise -> handle by using await to get the direct data
    console.log('api.github.com');
    console.log(checkv1);


    v1 = await fetch(api) // response
    checkv1 = await v1.json() // promise
    console.log('rest country');
    console.log(checkv1);
    // v2 = await fetch(api)

}
// somerandomApi2()

async function fetchingFunc(apiURL) {
    v1 = await fetch(apiURL) // response
    checkv1 = await v1.json()
    return checkv1
}

async function dontRepeatCode() {
    c1 = await fetchingFunc(api1)
    console.log('api.github.com');
    console.log(c1);


    c2 = await fetchingFunc(api)
    console.log('rest country');
    console.log(c2);

    c3 = await fetchingFunc(api1)
    console.log('api.github.com');
    console.log(c3);

}
// dontRepeatCode()

const API_key = '0b0aa88677a2a0bd9ef9b62b73cc73ec'
// const rest_countryAPI = 'https://restcountries.com/v3.1/all'
const rest_countryAPI = 'https://restcories.com/v3.1/all'

async function weatherAPI() {
    try {
        c1 = await fetchingFunc(rest_countryAPI)
        // console.log('rest country');
        var wholeParent = document.querySelector('.parent')
        console.log(c1);
        for (let i of c1) {
            var parentContainer = document.createElement('div')

            parentContainer.classList.add('supere')
            try {
                console.log('Country Name:', i.name.common);
                // console.log(i.latlng);
                [lat, lon] = i.latlng
                var weatherAPI = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}`
                // console.log(weatherAPI);
                c2 = await fetchingFunc(weatherAPI)
                // console.log('rest country');
                console.log("weather Data: ", c2.weather[0].description);
                console.log('*'.repeat(25));
                obj = {
                    "Country Name": i.name.common, "flag": i.flags.png, "Country Weather": c2.weather[0].description
                }
                // for (let j of [i.name.common,i.flags.png,c2.weather[0].description]){
                for (let j of Object.keys(obj)) {
                    if (obj[j].includes('.png')) {
                        var imgdata = document.createElement('img')
                        imgdata.setAttribute('src', obj[j])
                        parentContainer.append(imgdata)
                        continue
                    }
                    var para = document.createElement('p')
                    // para.innerText = `${j} : ${obj[j]}`
                    para.innerHTML = `<label>${j}</label> : ${obj[j]}`
                    parentContainer.append(para)

                }
                wholeParent.append(parentContainer)
                console.log(parentContainer);
                // break
            }

            catch {
                console.log('no data in country');
            }

        }
    }
    catch {
        console.log('error occured');
    }
}
// weatherAPI()

// https://api.openweathermap.org/data/2.5/weather?lat=47&lon=20&appid=b9e563408b68cf4faf5e8aff6b3bde4b



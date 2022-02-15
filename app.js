"use strict";

const BASE_URL = "http://numbersapi.com";

// part 1, 1
// async function luck_num(num){
//   const resp = await axios.get(`${BASE_URL}/${num}/trivia?json`);
//   console.log(resp.data.text);
// }

//part 1, 2
// async function luck_num(){
//   const resp = await axios.get(`${BASE_URL}/2..4,22/trivia?json`);
//   console.log(resp.data);
// }


// part 1, 3
async function luck_num(num){
  const p1 = axios.get(`${BASE_URL}/${num}/trivia?json`);
  const p2 = axios.get(`${BASE_URL}/${num}/trivia?json`);
  const p3 = axios.get(`${BASE_URL}/${num}/trivia?json`);
  const p4 = axios.get(`${BASE_URL}/${num}/trivia?json`);
  const results = [await p1, await p2, await p3, await p4];
  
  for(let p of results){
    let fact = $('<li>').text(p.data.text);
    $('#facts').append(fact);
  }
}

luck_num(22);
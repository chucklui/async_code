let DECK_ID;
// part1
// async function drawcard(){
//     const cards = await axios.get(
//         `http://deckofcardsapi.com/api/deck/new/draw/?count=1`);
//     const {suit,value} = cards.data.cards[0];
//     console.log(value, "of", suit);

// }

/**part2 */
// async function drawcard(){
//     const firstCard = await axios.get(
//         `http://deckofcardsapi.com/api/deck/new/draw/?count=1`);
//     const deckId = firstCard.data.deck_id;

//     const secondCard = await axios.get(
//         `http://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`);

//     for(let card of [firstCard, secondCard]){
//         const {suit, value} = card.data.cards[0];
//         console.log(value, "of", suit);
//     }
// }

/**part3 */

async function handleButtonClick(){
    let card = await axios.get(
        `http://deckofcardsapi.com/api/deck/${DECK_ID}/draw/?count=1`);
    let cardimg = card.data.cards[0].image;

    $("#cards").append(`<img src= ${cardimg}>`);

    if(card.data.remaining == 0){
        $("#button").hide();
    }
}

async function initial(){
    const deck = await axios.get(
        `http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`);

    DECK_ID = deck.data.deck_id;
    $("#button").on("click", handleButtonClick);

}

initial();



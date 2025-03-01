// import ReactGA4 from "react-ga4";

export function arrayShuffler(array: {type: string, content: string}[]) {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

// export const eventSenderGA = (category, action, label) => {
//   ReactGA4.event({
//     category,
//     action,
//     label,
//   });
// };
// category -> Paging, Submit, etc..
// action: ex. Click Test STart button
// label: 어디에서? Intro, Result, etc...
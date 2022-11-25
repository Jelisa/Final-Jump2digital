export const regex = {
  emptyInput: /^$/,
  cardholder: /^[a-zA-Z]{2,}\s[a-zA-Z]{2,}\s[a-zA-Z]{2,}$/i,
  number: /^[0-9]{16}$/,
  email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i,
  month: /(^[0][1-9]$)|(^[1][0-2]$)/,
  year: /(^[2][2-9]$)/,
  cvc: /^[0-9]{3}$/,
};

export function retrieveKeyStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

export function cleanObject(element) {
  let noData = "No data";
  return {
    id: element ?? noData,
  };
}

export async function fetchAnimals(url) {
  let result;
  try {
    result = await fetch(url)
      .then(function onFulfillment(responseObject) {
        let objectCleaned = responseObject.map((element) =>
          cleanObject(element)
        );
        return objectCleaned;
      })
      .catch(function onRejection(responseObject) {
        console.log(responseObject);
      });
  } catch (error) {
    throw new Error(error);
  }

  return result;
}

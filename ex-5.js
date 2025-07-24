// Exercise #5
let getJohnProfile = () => {
  return new Promise(function (_, reject) {
    setTimeout(
      () =>
        reject({
          errorCode: 500,
          message: "👿 Failed to request data from server",
        }),
      2000
    );
  });
};
// Start coding here

async function Profile () {
  try {
      let result = await getJohnProfile()
      console.log(result);
  } catch (error) {
    console.error(error);
  }
}

  Profile();

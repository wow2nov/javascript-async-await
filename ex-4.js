// Exercise #4
let getJohnProfile = () => {
  return new Promise(function (resolve) {
    setTimeout(
      () =>
        resolve({
          name: "John",
          age: 20,
          hobbies: ["Coding", "Football"],
        }),
      1000
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
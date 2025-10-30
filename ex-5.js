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
async function getJohnReport(){
  try{
    const firstOrders = await getJohnProfile();
    console.log(firstOrders);
  }catch (error){
    console.log("Error:", error);
  }
}

getJohnReport();
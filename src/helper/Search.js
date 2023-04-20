export const searchFilterFunction = (text, data) => {
  // Filter the masterDataSource and update FilteredDataSource
  let newData = data?.filter((item) => {
    console.log("item", item);
    // Applying filter for the inserted text in search bar
    const itemData = item.title ? item.title.toUpperCase() : "".toUpperCase();
    const textData = text.toUpperCase();
    return itemData.indexOf(textData) > -1;
  });
  return newData;
};

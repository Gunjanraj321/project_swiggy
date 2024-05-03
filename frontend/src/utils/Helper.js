export const filterData = (searchText, restaurant) => {
    const resFilterData = restaurant.filter((res)=>{
        res.info.name.toLowerCase().includes(searchText.toLowerCase())
    });
    return resFilterData;
}

export const filterDataonRating = (restaurants) => {
    const resFilterData = restaurants.filter((res) => {
        return res.info.avgRating >= 4.3;
    }).map((res) => {
        return res;
    });

    // console.log(`Filtered restaurants with rating >= 4:`, resFilterData);
    return resFilterData;
}

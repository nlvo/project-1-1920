function clean (oldData) {

    let newData = oldData.results;
    return newData = newData.map((data) => {
        return {
            id : data.frabl.value,
            title: data.titles[0],
            thumbnail: data.coverimages[1],
            author: data.author,
            isbn: data.isbn
        }
    });
}

export { clean };
function clean (oldData) {

    let newData = oldData.results;
    return newData = newData.map((data) => {
        return {
            id : data.id,
            title: data.titles[0],
            thumbnail: data.coverimages[1],
            isbn: data.isbn
        }
    });
}

export { clean };
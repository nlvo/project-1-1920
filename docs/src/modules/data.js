function clean(oldData) {
    let newData = oldData.results;
    if (oldData.results) {
        // console.log(oldData.results.coverimages[0])

        return newData.map((data) => {
            return {
                id: data.id,
                title: data.titles[0],
                thumbnail: data.coverimages[1],
                authors: data.authors,
                summaries: data.summaries || '',
                isbn: data.isbn
            }
        });
    } else {
        let data = oldData.record;
        return {
            id: data.id,
            title: data.titles[0],
            thumbnail: data.coverimages[1],
            authors: data.authors,
            summaries: data.summaries || '',
            isbn: data.isbn
        }
    }
}

export {
    clean
};
class Apifeatures {
  constructor(query, queryStr) {
    this.query = query;
    this.queryStr = queryStr;
  }

  search() {
    // console.log(this.queryStr);
    // console.log(this.query);
    const keyword = this.queryStr.keyword
      ? {
          name: {
            $regex: new RegExp(this.queryStr.keyword, "i"),
          },
        }
      : {}

    // console.log(keyword);
    this.query = this.query.find({ ...keyword });
    return this;
  }

  filter() {
    const queryCopy = { ...this.queryStr };
    //remove unwanted field
    // console.log(queryCopy);
    const removeField = ["keyword", "page", "limit"];

    removeField.forEach((key) => delete queryCopy[key]);

    //filter for price

    let queryStr = JSON.stringify(queryCopy);
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (key) => `$${key}`);

    this.query = this.query.find(JSON.parse(queryStr));

    // console.log(queryCopy);
    return this;
  }
  //pagination

  pagination(resultPerPage) {
    let currentPage = Number(this.queryStr.page) || 1;

    const skip = resultPerPage * (currentPage - 1);

    this.query = this.query.limit(resultPerPage).skip(skip);

    return this;
  }
}

module.exports = Apifeatures;

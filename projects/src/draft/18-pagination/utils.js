const paginate = (followers) => {
  /* get full data → return array of arrays */
  const itemPerPage = 9;
  const page = Math.ceil(followers.length / itemPerPage);

  const newFollowers = Array.from({ length: page }, (_, index) => {
    const start = index * itemPerPage; // 0,9,18,27...99
    return followers.slice(start, start + itemPerPage); // Array(12) [ (9) […], (9) […], ...]
  });
  console.log("newFollowers>>", newFollowers);
};

export default paginate;

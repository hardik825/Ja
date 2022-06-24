const posts = [
    { title: "post one", body: "this is post one" },
    { title: "post two", body: "this is post two" },
  ];
  
  function getPostes() {
    setTimeout(() => {
      let output = "";
      posts.forEach((post, index) => {
        output += `<li>${post.title}<li>`;
      });
      document.body.innerHTML = output;
    }, 2000);
  }
  
  function cretPost(post, callback) {

    return new Promise((resolve, reject)=>
    )
    setTimeout(() => {
      posts.push(post);
      callback();
    }, 3000);
  }
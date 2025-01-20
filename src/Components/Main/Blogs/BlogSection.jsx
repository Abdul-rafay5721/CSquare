import React from 'react';

const BlogSection = ({ blogs }) => {
  return (
    <section className="bg-[#F3F3F3] py-12 sm:px-10 md:px-20 lg:px-60 ">
      <div className="container mx-auto">
        <div className="row justify-center mb-10">
          <div className="col-md-7 text-center">
            <h2 className="text-4xl font-extrabold text-[#333333]">Recent Blog</h2>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {blogs.map((blog, index) => (
            <div key={index} className="flex">
              <div className="blog-entry justify-end w-full bg-white p-5 shadow-lg rounded-lg transition-transform duration-300 hover:-translate-y-2">
                <div className="text">
                  <h3 className="heading mb-3 text-xl font-semibold">
                    <a href={blog.link}>{blog.title}</a>
                  </h3>
                  <a href={blog.link} className="block mb-3">
  <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover rounded-md" />
</a>
                  <div className="meta mb-3 flex justify-between text-gray-500 text-sm">
                    <div>
                      <a href="#">{blog.date}</a>
                    </div>
                    <div>
                      <a href="#">{blog.author}</a>
                    </div>
                    <div>
                      <a href="#" className="flex items-center">
                        <span className="fa fa-comment mr-1"></span>
                        {blog.comments}
                      </a>
                    </div>
                  </div>
                  <p>{blog.excerpt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;

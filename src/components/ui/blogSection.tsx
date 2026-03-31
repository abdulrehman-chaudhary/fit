import BlogCard from './blogCard';
import { blogsData } from '../../data';

const BlogSection = () => {
  return (
    <section className="bg-white flex justify-center py-10 md:py-16 xl:py-22.5 xl:pt-[40px]">
      <div className="w-[95%] md:w-[88%] lg:w-[85%] xl:w-[67%] max-w-[1440px] flex flex-col gap-8 sm:gap-10 lg:gap-[40px]">
        {/* Header */}
        <div className="bg-primary rounded-2xl px-8 py-10 md:px-16 md:py-12 text-center w-full">
          <h2 className="font-gilroy font-[800] text-h3 md:text-h2 lg:text-[44px] capitalize text-black">
            Blogs | Articles | News
          </h2>
          <p className="font-[Inter] font-medium text-[14px] leading-normal text-black">
            Read our latest blogs and articles on different categories
          </p>
        </div>
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 md:gap-[20px] xl:gap-x-[16px] 2xl:gap-x-15 w-full">
          {blogsData.map((blog) => (
            <BlogCard
              key={blog.id}
              id={blog.id}
              image={blog.image}
              category={blog.category}
              title={blog.title}
              author={blog.author}
              date={blog.date}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;

import React from 'react';
import BlogCard from './blogCard';
import type { BlogType } from './blogMainContent';

interface RelatedBlogSectionProps {
  relatedBlogs: BlogType[];
}

const RelatedBlogSection: React.FC<RelatedBlogSectionProps> = ({ relatedBlogs }) => {
  return (
    <section className="bg-white flex justify-center pb-10 md:pb-16 xl:pb-24 w-full">
      <div className="w-[95%] md:w-[88%] lg:w-[85%] xl:w-[52%] max-w-360 flex gap-4 md:gap-10 xl:gap-[15px] relative flex-col sm:flex-row">
        
        {/* Spacer to match the width of the social sidebar in BlogMainContent */}
        <div className="hidden sm:flex w-10 md:w-12 flex-shrink-0"></div>

        {/* Grid Area */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {relatedBlogs.map((blog) => (
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

export default RelatedBlogSection;

import React from 'react';
import { Link } from 'react-router-dom';

interface BlogCardProps {
  id: number | string;
  image: string;
  category: string;
  title: string;
  author: string;
  date: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ id, image, category, title, author, date }) => {
  return (
    <Link to={`/blog/${id}`} className="flex flex-col bg-white rounded-[18px] w-full lg:max-w-[312px] overflow-hidden shadow-[0_2px_15px_rgba(0,0,0,0.04)] border border-[#E0E0E0] transition-all hover:shadow-[0_4px_25px_rgba(0,0,0,0.08)] cursor-pointer">
      <div className="w-full p-[20px]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover  lg:max-w-[278px] max-h-[175px] rounded-xl"
        />
      </div>
      <div className="px-5 pb-5 flex flex-col flex-grow gap-[12px] justify-between">
        <div className="flex flex-col gap-[2px]">
          <span className="text-gray-500 text-sm font-[Inter]">{category}</span>
          <h3 className="text-[16px] font-extrabold text-black font-gilroy leading-[1.2]">
            {title}
          </h3>
        </div>
        <div className="flex items-center text-sm text-gray-500 font-[Inter] gap-2">
          <span>{author}</span>
          <span>|</span>
          <span>{date}</span>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;

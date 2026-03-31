import { useParams } from 'react-router-dom';
import BlogMainContent from '../components/ui/blogMainContent';
import BlogSubContent from '../components/ui/blogSubContent';
import RelatedBlogSection from '../components/ui/relatedBlogSection';
import { blogsData } from '../data';

const SingleBlog = () => {
  const { id } = useParams();

  const blog = blogsData.find((b) => b.id.toString() === id);

  if (!blog) {
    return (
      <div className="flex justify-center items-center h-[50vh] bg-white w-full">
        <h1 className="font-gilroy font-[800] text-h3 text-black">Blog Not Found</h1>
      </div>
    );
  }

  // related blogs 
  const relatedBlogs = blogsData.filter(b => b.id !== blog.id).slice(0, 2);

  return (
    <main className="bg-white">
      <BlogMainContent blog={blog} />
      <BlogSubContent blog={blog} />
      <RelatedBlogSection relatedBlogs={relatedBlogs} />
    </main>
  );
};

export default SingleBlog;

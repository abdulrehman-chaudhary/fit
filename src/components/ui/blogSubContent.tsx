import type { BlogType } from './blogMainContent';

const BlogSubContent = ({ blog }: { blog: BlogType }) => {
  return (
    <section className="bg-white flex justify-center pb-10 md:pb-16 w-full">
      <div className="w-[95%] md:w-[88%] lg:w-[85%] xl:w-[52%] max-w-360 flex gap-4 md:gap-10 xl:gap-[15px] relative flex-col sm:flex-row">
        <div className="hidden sm:flex w-10 md:w-12 flex-shrink-0"></div>
        {/* Content*/}
        <div className="flex flex-col w-full gap-[30px]">
          <div className="w-full h-auto overflow-hidden rounded-[20px] md:rounded-[24px] shadow-[0_4px_25px_rgba(0,0,0,0.04)] lg:max-w-[520px] self-center">
            <img
              src={blog.image}
              alt="Blog Illustration"
              className="w-full h-auto object-cover max-h-[300px] md:max-h-[380px] "
            />
          </div>
          <div>
            <h2 className="font-gilroy font-[800] text-[18px] md:text-[24px] leading-[1.1] text-black">
              {blog.title}
            </h2>
          </div>
          <div className="flex flex-col text-[#666] font-[Inter] text-[14px] leading-[140%]">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <p>
              Why do we use it?
              <br />
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSubContent;

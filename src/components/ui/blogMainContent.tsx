
export interface BlogType {
  id: number | string;
  image: string;
  category: string;
  title: string;
  author: string;
  date: string;
}

const BlogMainContent = ({ blog }: { blog: BlogType }) => {
  return (
    <section className="bg-white flex justify-center py-10 md:py-16 xl:pt-[40px] w-full">
      <div className="w-[95%] md:w-[88%] lg:w-[85%] xl:w-[52%] max-w-360 flex gap-4 md:gap-10 xl:gap-[15px] relative flex-col sm:flex-row">

        {/* Social Share Sidebar */}
        <div className="hidden sm:flex flex-col gap-3 sticky top-28 h-max flex-shrink-0 pt-4">
          <SocialButton icon="facebook" active />
          <SocialButton icon="twitter" />
          <SocialButton icon="linkedin" />
          <SocialButton icon="whatsapp" />
        </div>

        {/* Mobile Social Share Horizontal Bar */}
        <div className="flex sm:hidden gap-3">
          <SocialButton icon="facebook" active />
          <SocialButton icon="twitter" />
          <SocialButton icon="linkedin" />
          <SocialButton icon="whatsapp" />
        </div>

        {/* Content Area */}
        <div className="flex flex-col w-full gap-[20px]">
          <div className="flex flex-col gap-[30px]">

            {/* Main Image */}
            <div className="w-full h-auto overflow-hidden rounded-2xl md:rounded-[30px] border border-gray-100 shadow-[0_4px_30px_rgba(0,0,0,0.04)]">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-auto object-cover max-h-[400px] md:max-h-[500px]"
              />
            </div>

            {/* Info */}
            <div className="flex justify-between items-center px-1 md:px-2">
              <span className="text-[#a1a1a1] text-[15px] font-[Inter]">{blog.category}</span>
              <span className="text-[#a1a1a1] text-[15px] font-[Inter]">{blog.author}</span>
            </div>
          </div>

          {/* Title */}
          <div>
            <h1 className="font-gilroy font-[800] text-[18px] md:text-[24px] leading-[1.1] text-black">
              {blog.title}
            </h1>

          </div>

          {/* Body Content */}
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

const SocialButton = ({ icon, active = false }: { icon: string; active?: boolean }) => {
  return (
    <button
      className={`w-10 h-10 md:w-12 md:h-12 border ${active
        ? "border-primary bg-transparent text-primary"
        : "border-gray-300 bg-transparent hover:bg-gray-50 text-gray-400"
        } rounded-lg flex items-center justify-center transition-colors cursor-pointer`}
      aria-label={`Share on ${icon}`}
    >
      {icon === "facebook" && (
        <svg fill="currentColor" viewBox="0 0 24 24" className="w-[18px] h-[18px] md:w-5 md:h-5">
          <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z" />
        </svg>
      )}
      {icon === "twitter" && (
        <svg fill="currentColor" viewBox="0 0 24 24" className="w-[18px] h-[18px] md:w-5 md:h-5">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      )}
      {icon === "linkedin" && (
        <svg fill="currentColor" viewBox="0 0 24 24" className="w-[18px] h-[18px] md:w-5 md:h-5">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      )}
      {icon === "whatsapp" && (
        <svg fill="currentColor" viewBox="0 0 24 24" className="w-[18px] h-[18px] md:w-[22px] md:h-[22px]">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.891-4.443 9.893-9.892.003-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.738-.974zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.347-.272.297-1.04 1.016-1.04 2.479 0 1.463 1.065 2.876 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
        </svg>
      )}
    </button>
  );
};

export default BlogMainContent;

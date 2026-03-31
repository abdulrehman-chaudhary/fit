const privacyPolicy = () => {
    return (
        <section className="bg-white flex justify-center py-10 md:py-16 xl:py-[48px]">
            <div className="w-[95%] md:w-[88%] lg:w-[85%] xl:w-[54%] max-w-360 flex flex-col justify-center items-center gap-[30px]">
                {/* Page Title */}
                <div className="text-center w-full">
                    <h1 className="font-gilroy font-extrabold text-h2 md:text-h1 capitalize text-primary">
                        Privacy Policy
                    </h1>
                </div>

                {/* Content Card */}
                <div className="w-full border border-primary rounded-2xl px-8 py-10 md:p-[40px] bg-white flex flex-col gap-[30px]">

                    {/* Section 1 */}
                    <div className="flex flex-col gap-[13px]">
                        <h2 className="font-gilroy font-bold text-[22px] md:text-h4 text-black">
                            The Standard Lorem Ipsum Passage, Used Since The 1500s
                        </h2>
                        <div className="flex flex-col gap-5 font-[Inter] font-medium text-[16px] text-body-text leading-relaxed">
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                has been the industry's standard dummy text ever since the 1500s, when an unknown
                                printer took a galley of type and scrambled it to make a type specimen book. It has
                                survived not only five centuries, but also the leap into electronic typesetting, remaining
                                essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
                                containing Lorem Ipsum passages, and more recently with desktop publishing software
                                like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                            <p>
                                Why do we use it?
                                <br />
                                It is a long established fact that a reader will be distracted by the readable content of a
                                page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less
                                normal distribution of letters, as opposed to using 'Content here, content here',
                                making it look like readable English. Many desktop publishing packages and web page
                                editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum'
                                will uncover many web sites still in their infancy. Various versions have evolved over the
                                years, sometimes by accident, sometimes on purpose (injected humour and the like).
                            </p>
                        </div>
                    </div>

                    {/* Section 2 */}
                    <div className="flex flex-col gap-[13px]">
                        <h2 className="font-gilroy font-bold text-[16px] text-black">
                            The Standard Lorem Ipsum Passage, Used Since The 1500s
                        </h2>
                        <div className="flex flex-col gap-5 font-[Inter] font-medium text-[16px] text-body-text leading-relaxed">
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                has been the industry's standard dummy text ever since the 1500s, when an unknown
                                printer took a galley of type and scrambled it to make a type specimen book. It has
                                survived not only five centuries, but also the leap into electronic typesetting, remaining
                                essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
                                containing Lorem Ipsum passages, and more recently with desktop publishing software
                                like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                            <p>
                                Why do we use it?
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default privacyPolicy;

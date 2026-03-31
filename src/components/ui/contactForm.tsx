import { useFormik } from "formik";
import * as Yup from "yup";
import { contactFormFields } from "../../data";

const ContactForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("First name is required"),
      lastName: Yup.string().required("Last name is required"),
      email: Yup.string().email("Invalid email address").required("Email is required"),
      subject: Yup.string().required("Subject is required"),
      message: Yup.string().required("Message is required"),
    }),
    onSubmit: (values) => {
      console.log("Form submitted:", values);
    },
  });

  return (
    <section
      className="relative bg-white flex justify-center pb-12 md:pb-16 xl:pb-24 pt-10 md:pt-16 xl:pt-20 overflow-hidden"
      id="contact"
    >
      {/* Top Yellow */}
      <div className="absolute top-0 left-0 w-full h-[240px] md:h-[260px] lg:h-[280px] xl:h-[250px] bg-primary z-0"></div>

      <div className="w-[95%] md:w-[88%] lg:w-[85%] xl:w-[67%] max-w-[1440px] relative z-10 flex flex-col lg:flex-row items-start gap-10 lg:gap-16 xl:gap-0">

        {/* Left Side */}
        <div className="w-full lg:w-[55%] xl:w-[82%] flex flex-col gap-8 md:gap-10 xl:gap-12">
          {/* Title */}
          <h1
            className="font-gilroy font-[800] text-h2 md:text-h1 leading-tight text-black capitalize"
            data-aos="fade-right"
          >
            Support Ticket
          </h1>

          {/* Form Card */}
          <div
            className="bg-white rounded-[20px] shadow-[0px_4px_14px_0px_#1E1E1E14] flex flex-col gap-[30px] px-5 py-8 md:px-10 md:py-10"
            data-aos="fade-up"
          >
            <div>
              <h2 className="font-gilroy font-[800] text-[24px] md:text-[28px] text-black capitalize">
                Fill In The Form
              </h2>
            </div>

            <form onSubmit={formik.handleSubmit} className="flex flex-col gap-6 md:gap-8">
              <div className="flex flex-wrap gap-5 md:gap-6">
                {contactFormFields.map((field) => {
                  const hasError = formik.touched[field.name as keyof typeof formik.values] && formik.errors[field.name as keyof typeof formik.values];

                  return (
                    <div
                      key={field.name}
                      className={`${field.halfWidth ? "w-full sm:w-[calc(50%-10px)] md:w-[calc(50%-12px)]" : "w-full"
                        } flex flex-col gap-1`}
                    >
                      {field.type === "textarea" ? (
                        <textarea
                          name={field.name}
                          placeholder={field.placeholder}
                          rows={10}
                          value={formik.values[field.name as keyof typeof formik.values]}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          className={`w-full h-[220px] md:h-[260px] border ${hasError ? 'border-red-500' : 'border-[#D9D9D9]'} rounded-[8px] px-5 py-5 text-[15px] font-[Inter] text-black placeholder:text-[#999] outline-none ${hasError ? 'focus:border-red-500' : 'focus:border-primary'} transition-colors resize-none`}
                        />
                      ) : (
                        <input
                          type={field.type}
                          name={field.name}
                          placeholder={field.placeholder}
                          value={formik.values[field.name as keyof typeof formik.values]}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          className={`w-full h-[56px] md:h-[60px] border ${hasError ? 'border-red-500' : 'border-[#D9D9D9]'} rounded-[8px] px-5 text-[15px] font-[Inter] text-black placeholder:text-[#999] outline-none ${hasError ? 'focus:border-red-500' : 'focus:border-primary'} transition-colors`}
                        />
                      )}
                      {hasError ? (
                        <div className="text-red-500 text-xs">
                          {formik.errors[field.name as keyof typeof formik.values]}
                        </div>
                      ) : null}
                    </div>
                  )
                })}
              </div>

              {/* Submit Button */}
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-primary hover:bg-[#d4a800] text-black font-gilroy font-[800] text-[16px] px-12 py-4 rounded-[8px] transition-all duration-300 hover:scale-105 cursor-pointer leading-none"
                >
                  Submit Ticket
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Right Side */}
        <div
          className="hidden lg:flex w-full lg:w-[35%] justify-end lg:pt-0 xl:pt-4"
          data-aos="fade-left"
        >
          <img
            src="/assets/images/support-circle.png"
            alt="Customer Support"
            className="w-full max-w-[340px] xl:max-w-[366px] h-auto object-contain translate-x-[5%] xl:translate-x-[8%]"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

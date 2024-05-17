import blogdata from "@/components/blogpagecomponents/blogdata.json";
import Link from "next/link";
import dynamic from "next/dynamic";
import { LuMessagesSquare } from "react-icons/lu";
import { BiTimeFive } from "react-icons/bi";
import { FaUser, FaArrowLeft, FaArrowUp } from "react-icons/fa";
// import ContactForm from "@/components/common/form/ContactForm";
import { Metadata } from "next";

type Props = {
  params: { slug: string };
};

let blogID: number;
export const generateMetadata = ({ params }: Props): Metadata => {
  const desc = `${blogdata.articles[blogID].SEOdesc}`;
  return {
    title: `${blogdata.articles[blogID].title}`,
    description: `${desc}`,
    keywords: `${blogdata.articles[blogID].SEOkeywords}`,
    robots: "index, follow",
    formatDetection: { telephone: false },
    viewport:
      "initial-scale=1.0, maximum-scale=1.0, user-scalable=0, width=device-width",
    authors: [
      {
        name: "University of Debrecen Southasia Regional Office",
        url: "https://www.facebook.com/UODHROSA/",
      },
    ],
    publisher: "https://www.facebook.com/UODHROSA/",
  };
};

const ContactForm = dynamic(
  () => import("@/components/common/form/ContactForm"),
  { ssr: false }
);
export const dynamicParams = false;

export async function generateStaticParams() {
  const paths = blogdata.articles.map((article) => ({
    slug: `${article.slug}`,
  }));
  return paths;
}

const ArticleDetailPage = ({ params }: { params: { slug: string } }) => {
  const replaceTextWithLinks = (text: any, links: any) => {
    if (!links) return text;

    let newText = text;

    Object.keys(links).forEach((key) => {
      const link = links[key];
      const linkPattern = new RegExp(`\\[${link.title}\\]\\(${key}\\)`, "g");
      newText = newText.replace(
        linkPattern,
        `<a class="text-[#F5B418] font-semibold hover:underline" href="${link.url}" target="_blank" rel="noopener noreferrer">${link.title}</a>`
      );
    });

    return newText;
  };

  const { slug } = params;

  // const [showScrollButton, setShowScrollButton] = useState(false);
  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY > 300) {
  //       setShowScrollButton(true);
  //     } else {
  //       setShowScrollButton(false);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);
  // const { id } = params;

  let article = null;

  if (slug) {
    for (let i = 0; i < blogdata.articles.length; i++) {
      if (blogdata.articles[i].slug === slug) {
        article = blogdata.articles[i];
        blogID = i;
        break;
      }
    }
  }

  if (!article) {
    return <div>Article not found</div>;
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="font-nunito mx-4 lg:mx-10">
      <div className="flex my-4 ml-6">
        <h2 className="text-[18px] font-normal text-[#f5b418] flex items-center mt-2">
          <Link
            href={"/blog"}
            className="cursor-pointer flex pt-4 items-center text-[#144438] hover:text-[#f5b418]"
          >
            <FaArrowLeft className="mr-2" />
            Back
          </Link>
        </h2>
      </div>
      <div className="lg:flex items-center justify-between p-6">
        <div className="flex-1">
          <h1 className="lg:text-[50px] text-[30px] font-extrabold lg:leading-[60px] text-[#f5b418] font-nunito">
            {article.title}
          </h1>
          <div className="flex items-center gap-3 pt-4 text-[#f5b418] font-nunito">
            <div className="flex items-center">
              <div className="pr-2">
                <img
                  src={article.authorpic}
                  alt="Author Picture"
                  height={1000}
                  width={1000}
                  className="rounded-full h-[130px] object-cover w-[130px]"
                />
              </div>
            </div>
            <div className="flex flex-col item-start 1  justify-between gap-y-2">
              <h1 className="hover:text-[#155744] flex cursor-pointer">
                <span className="pr-2">
                  <FaUser size={20} />
                </span>
                {article.author}
              </h1>
              <h1 className="flex hover:text-[#155744] cursor-pointer">
                <span className="pr-2">
                  <BiTimeFive size={20} />
                </span>
                {article.readTime}
              </h1>
              <h1 className="flex hover:text-[#155744] cursor-pointer">
                <span className="pr-2">
                  <LuMessagesSquare size={20} />
                </span>
                {article.comments} Comments
              </h1>
            </div>
          </div>
        </div>
        <div className="w-full pt-4 lg:pt-0 flex-1 lg:pl-4 h-full hidden lg:block">
          <img
            src={article.innerimage}
            alt={article.title}
            className="w-full h-[400px] object-cover rounded"
            width={5000}
            height={5000}
          />
        </div>
      </div>

      <div className="px-8 text-[18px] text-[#64686d] leading-7 pr-1 lg:pt-10">
        {article.content.map((section, index) => (
          <div key={index} className="mb-4">
            {section.heading && (
              <h2 className="lg:text-[40px] text-[25px] pb-4 pt-6 font-extrabold lg:leading-[50px] text-[#f5b418] font-nunito">
                {section.heading}
              </h2>
            )}
            <p
              className={`text-justify text-[24px] ${
                !section.heading ? "pb-2" : "pb-6"
              }`}
            >
              <strong>
                <span
                  dangerouslySetInnerHTML={{
                    __html: replaceTextWithLinks(
                      section.boldtext,
                      section.links
                    ),
                  }}
                />
              </strong>
            </p>
            <p
              className={`text-justify ${!section.heading ? "pb-2" : "pb-6"}`}
              dangerouslySetInnerHTML={{
                __html: replaceTextWithLinks(section.text, section.links),
              }}
            />
            <div className="mx-4">
              {section["bullets,"] && (
                <ul className="text-[16px] gap-2 lg:text-[18px] flex flex-col list-disc">
                  {Object.values(section["bullets,"]).map(
                    (bullet: string, bulletIndex: number) => (
                      <li key={bulletIndex}>{bullet}</li>
                    )
                  )}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="lg:mx-[10%] mx-4 pb-10 pt-6">
        <h1 className="text-[35px] pb-8 font-extrabold text-[#f5b418] underline flex justify-center lg:justify-start">
          Leave a Reply
        </h1>
        <ContactForm />
      </div>
      {/* {showScrollButton && (
        <button
          className="fixed bottom-4 right-4 text-white bg-[#f5b418] py-4 px-4 rounded-full"
          onClick={scrollToTop}
        >
          <FaArrowUp />
        </button>
      )} */}
    </div>
  );
};

export default ArticleDetailPage;

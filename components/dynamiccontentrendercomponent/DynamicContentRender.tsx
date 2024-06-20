import React from "react";

interface Content {
  heading: string;
  subheading: string;
  yellowheading: string;
  links:
    | {
        [key: string]: {
          title: string;
          url: string;
        };
      }
    | {};
  text: string;
  bullets: string[];
}

interface DataWithContent {
  title: string;
  image: string;
  content: Content[];
}

interface PagePropsWithData {
  data: DataWithContent;
}

const DynamicContentRender: React.FC<PagePropsWithData> = ({ data }) => {
  const renderYellowHeadingWithLinks = (contentItem: Content) => {
    if (contentItem.yellowheading) {
      let yellowheadingWithLinks = contentItem.yellowheading;

      // Replace occurrences of titles with clickable links
      Object.values(contentItem.links)?.forEach((link) => {
        const regex = new RegExp(
          link.title.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"),
          "g"
        );
        yellowheadingWithLinks = yellowheadingWithLinks.replace(
          regex,
          `${link.title}`
        ); // Replace link with plain text
      });

      // Convert the yellow heading with links to a React element
      const headingElement = <span>{yellowheadingWithLinks}</span>;

      // Convert links to React elements
      const linkElements = Object.values(contentItem.links)?.map(
        (link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#F5B418", fontWeight: "bold" }}
          >
            {link.title}
          </a>
        )
      );

      // Merge yellow heading with links and text into a single array
      const elements = [];
      let lastIndex = 0;
      linkElements.forEach((linkElement, index) => {
        // Find the index of the link title in the text
        const linkTitleIndex = yellowheadingWithLinks.indexOf(
          linkElement.props.children,
          lastIndex
        );
        if (linkTitleIndex !== -1) {
          // Add the text before the link
          const textBeforeLink = yellowheadingWithLinks.substring(
            lastIndex,
            linkTitleIndex
          );
          elements.push(<span key={`text-${index}`}>{textBeforeLink}</span>);
          // Add the link
          elements.push(linkElement);
          // Update the lastIndex
          lastIndex = linkTitleIndex + linkElement.props.children.length;
        }
      });

      // Add any remaining text after the last link
      if (lastIndex < yellowheadingWithLinks.length) {
        const remainingText = yellowheadingWithLinks.substring(lastIndex);
        elements.push(<span key="text-after">{remainingText}</span>);
      }

      return <>{elements}</>;
    }
    return null;
  };

  const renderTextWithLinks = (contentItem: Content) => {
    if (contentItem.text) {
      let textWithLinks = contentItem.text;

      // Replace occurrences of titles with clickable links
      Object.values(contentItem.links)?.forEach((link) => {
        const regex = new RegExp(
          link.title.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"),
          "g"
        );
        textWithLinks = textWithLinks.replace(regex, `${link.title}`); // Replace link with plain text
      });

      // Convert the text with links to a React element
      const textElement = <span>{textWithLinks}</span>;

      // Convert links to React elements
      const linkElements = Object.values(contentItem.links)?.map(
        (link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            style={{ color: "#F5B418", fontWeight: "bold" }}
          >
            {link.title}
          </a>
        )
      );

      // Merge text and links into a single array
      const elements = [];
      let lastIndex = 0;
      linkElements.forEach((linkElement, index) => {
        // Find the index of the link title in the text
        const linkTitleIndex = textWithLinks.indexOf(
          linkElement.props.children,
          lastIndex
        );
        if (linkTitleIndex !== -1) {
          // Add the text before the link
          const textBeforeLink = textWithLinks.substring(
            lastIndex,
            linkTitleIndex
          );
          elements.push(<span key={`text-${index}`}>{textBeforeLink}</span>);
          // Add the link
          elements.push(linkElement);
          // Update the lastIndex
          lastIndex = linkTitleIndex + linkElement.props.children.length;
        }
      });

      // Add any remaining text after the last link
      if (lastIndex < textWithLinks.length) {
        const remainingText = textWithLinks.substring(lastIndex);
        elements.push(<span key="text-after">{remainingText}</span>);
      }

      return <>{elements}</>;
    }
    return null;
  };

  const renderBulletsWithLinks = (contentItem: Content) => {
    if (contentItem.bullets.length > 0) {
      return (
        <ul className="list-disc px-8">
          {contentItem.bullets.map((bullet, index) => {
            Object.values(contentItem.links)?.forEach((link) => {
              const regex = new RegExp(link.title, "g");
              bullet = bullet.replace(
                regex,
                `<a href="${link.url}" target="_blank">${link.title}</a>`
              );
            });
            return (
              <li
                className="my-1 text-[#155744]"
                key={index}
                dangerouslySetInnerHTML={{ __html: bullet }}
              />
            );
          })}
        </ul>
      );
    }
    return null;
  };

  return (
    <div className="">
      <p className="my-10 text-[#F5B418] text-2xl sm:text-4xl font-semibold">
        {data.title}
      </p>
      <div className="w-full flex justify-center">
        <img
          src={data.image}
          alt=""
          className="w-full sm:w-5/6 sm:rounded-3xl"
        />
      </div>
      {data.content.map((contentItem, index) => (
        <div key={index}>
          <p className="my-4 text-[#155744] text-xl sm:text-2xl font-semibold">
            {contentItem.heading}
          </p>

          <p className="my-4 text-[#155744] font-semibold">
            {contentItem.subheading}
          </p>

          <p className="text-[#F5B418] my-2 text-xl font-semibold">
            {renderYellowHeadingWithLinks(contentItem)}
          </p>
          <p className="my-2 text-[#155744]">
            {renderTextWithLinks(contentItem)}
          </p>
          {renderBulletsWithLinks(contentItem)}
        </div>
      ))}
    </div>
  );
};

export default DynamicContentRender;

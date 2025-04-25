import Link from "next/link";
interface SamplePaperData {
  name: string;
  subcategories: {
    label: string;
    samplePaper: string;
    examTopics: string;
  }[];
}

const Table: React.FC<{ data: SamplePaperData[] }> = ({ data }) => {
  return (
    <div className="overflow-x-auto text-[16px]">
      <table className="min-w-full border border-gray-300">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 text-left border">Subject</th>
            <th className="p-3 text-left border">Subcategory</th>
            <th className="p-3 text-left border">Exam Topics</th>
            <th className="p-3 text-left border">Sample Paper</th>
          </tr>
        </thead>
        <tbody>
          {data.map((subject, index) => (
            <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : ""}>
              <td className="p-3 border">{subject.name}</td>
              <td className="p-3 border text-justify">
                {subject.subcategories.map((subcategory, subIndex) => (
                  <p className="text-[14px]" key={subIndex}>
                    {subcategory.label}
                  </p>
                ))}
              </td>
              <td className="p-3 border">
                {subject.subcategories.map((subcategory, subIndex) => (
                  <div key={subIndex}>
                    <Link
                      href={subcategory.examTopics}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <p className="text-[#F5B417] pb-2 hover:text-[#155744] hover:underline italic">
                        Download
                      </p>
                    </Link>
                  </div>
                ))}
              </td>
              <td className="p-3 border">
                {subject.subcategories.map((subcategory, subIndex) => (
                  <div key={subIndex}>
                    {subcategory.samplePaper === "" ? (
                      <p className="text-[#F5B417] pb-2 hover:text-[#155744] hover:underline italic">
                        --
                      </p>
                    ) : (
                      <Link
                        href={subcategory.samplePaper}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <p className="text-[#F5B417] pb-2 hover:text-[#155744] hover:underline italic">
                          Download
                        </p>
                      </Link>
                    )}
                  </div>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

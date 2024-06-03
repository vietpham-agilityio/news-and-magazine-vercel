// mocks
import { listPostItems } from "@/mocks";

// components
import { TitleSection, PaperPost } from "@/ui/components";

// types
import { IPostItem } from "@/types";

interface IProps {
  listPosts?: IPostItem[];
}

export const SidebarCard = ({ listPosts = listPostItems }: IProps) => (
  <div className="px-[15px] py-5 bg-white-90 rounded-xl">
    <TitleSection title="Top Posts" />
    <div className="mt-5">
      {listPosts.map((post, index) => {
        const { id, content, title, imageUrl, alt } = post;

        return (
          <div
            key={id}
            className={`${index !== listPosts.length - 1 && "mb-5"}`}
          >
            <PaperPost
              title={title}
              content={content}
              imageSrc={imageUrl}
              alt={alt}
            />
          </div>
        );
      })}
    </div>
  </div>
);

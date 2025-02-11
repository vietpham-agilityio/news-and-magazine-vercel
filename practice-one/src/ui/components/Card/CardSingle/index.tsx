// components
import Image, { StaticImageData } from 'next/image';
import { Typography } from '@/ui/components';

// types
import { FontWeight, Size } from '@/types';
import Link from 'next/link';

interface IProps {
  id: string;
  title: string;
  content: string;
  imageSrc: string | StaticImageData;
  alt?: string;
}

export const CardSingle = ({
  id,
  title,
  content,
  imageSrc,
  alt = 'Image cover',
}: IProps) => (
  <Link href={`articles/${id}`}>
    <div className="h-113 w-75 relative rounded-xl flex items-end justify-end bg-transparent p-2.5 hover:cursor-pointer xl:w-90">
      <Image
        className="rounded-xl absolute"
        src={imageSrc}
        alt="car image"
        fill
        objectFit="cover"
        sizes="(max-width: 1279px) 300px,
        (min-width: 1280px) 360px"
      />
      {/* card body */}
      <div className="absolute left-[9px] p-4 w-[95%] bg-white-75 rounded-xl opacity-90">
        <Typography
          tag="h2"
          textSize={Size.LG}
          weight={FontWeight.Normal}
          additionalClasses="text-black-100"
        >
          {title}
        </Typography>
        <Typography
          tag="h3"
          textSize={Size.XSM}
          weight={FontWeight.Light}
          additionalClasses="text-dark-100 h-10 w-82 leading-5 text-ellipsis overflow-hidden "
        >
          {content}
        </Typography>
      </div>
    </div>
  </Link>
);

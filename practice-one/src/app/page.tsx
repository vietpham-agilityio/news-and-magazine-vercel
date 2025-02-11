import { Suspense } from 'react';
import type { Metadata } from 'next';

// static images
import ImageStore from '@/constants/images';

// components
import Image from 'next/image';
import {
  Carousel,
  CardSingle,
  Title,
  CardPostSkeleton,
  Typography,
  PaperPost,
  Button,
  TitleSection,
} from '@/ui/components';
import { HashtagGroup, PostsByAttribute, PostsGrid } from '@/ui/features';

// HOC
import ComponentInView from '@/HOC/InView';

// icons
import { ArrowRight, Triangle } from '@/ui/components/Icons';

// mocks data
import { listHashtagsItem, listSlider } from '@/mocks';

// types
import { PostVariant, CardType, FontWeight, Size } from '@/types';

export const metadata: Metadata = {
  title: 'Home - News & Magazine',
  description:
    'Welcome to News & Magazine. Stay updated with the latest headlines, in-depth articles, and trending topics from around the world.',
};

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      {/* category */}
      <section className="container bg-white-90 items-center justify-center rounded-xl hidden lg:mt-11 xl:flex">
        <HashtagGroup listHashtags={listHashtagsItem} />
      </section>

      {/* fantastic posts */}
      <section className="w-full hidden items-center gap-6 bg-white-100 h-113 mt-9 mb-12.5 sm:flex lg:my-15 lg:container">
        {/* first card */}
        <div className="hidden xl:block h-full">
          <CardSingle
            id="33"
            title="Go Home After Long Time"
            content="Download torrents from verified or trusted uploaders. If you're a BitTorrent user looking for safety tips, use this method. Both of the big-name BitTorrent indexers (The Pirate Bay and KickAssTorrents) use symbols to highlight torrents uploaded by verified users. "
            imageSrc="https://images.unsplash.com/photo-1716223996696-ad6252a7fe7c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D"
          />
        </div>
        {/* second card */}
        <div className="hidden xl:block h-full">
          <CardSingle
            id="34"
            title="Street Way To The Conner"
            content="Download torrents from verified or trusted uploaders. If you're a BitTorrent user looking for safety tips, use this method. Both of the big-name BitTorrent indexers (The Pirate Bay and KickAssTorrents) use symbols to highlight torrents uploaded by verified users. "
            imageSrc="https://images.unsplash.com/photo-1716223996699-9738f0f12805?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D"
          />
        </div>
        {/* slide card */}
        <div className="h-full mx-6 flex flex-1 items-center justify-center lg:mx-0">
          <Carousel listSlider={listSlider} />
        </div>
      </section>

      {/* popular posts */}
      <section className="bg-white-100 mt-7.5 sm:mt-0 w-full lg:container">
        <TitleSection title="Popular Posts" />
        <Suspense fallback={<CardPostSkeleton count={4} />}>
          <PostsByAttribute
            isMarginSmall
            attribute={PostVariant.POPULAR}
            cardType={CardType.VERTICAL}
          />
        </Suspense>
      </section>

      {/* scheduler */}
      <section className="w-full flex items-center justify-center my-10 sm:mt-9 sm:mb-12.5 lg:my-17.5">
        <Image
          src={ImageStore.ScheduleLargeImage}
          alt="schedule"
          className="hidden lg:block"
          sizes="(min-width: 1024px) 100vw"
          style={{
            width: 'full',
            height: 'auto',
          }}
        />
        <Image
          src={ImageStore.ScheduleMediumImage}
          alt="schedule"
          className="block lg:hidden"
          sizes="(min-width: 604px) and (max-width: 1023px) 100vw"
          style={{
            width: 'full',
            height: 'auto',
          }}
        />
      </section>

      {/* new posts */}
      <section className="flex flex-col justify-between bg-white-100 w-full lg:container">
        <div className="mx-6 mb-5 flex justify-between sm:mb-10 lg:mx-0">
          <Title title="New Posts" />
          <Button
            label="Show All"
            rightIcon={<ArrowRight />}
            textColor="text-dark-75"
            bgColor="bg-white-90"
          />
        </div>
        <PostsGrid attribute={PostVariant.NEW} cardType={CardType.HORIZONTAL} />
      </section>

      {/* latest videos */}
      <section className="w-full bg-white-90 my-10 py-11 sm:py-16 sm:my-12.5 lg:my-17.5">
        <div className="mx-6 lg:mx-auto lg:container">
          <div className="mb-5 sm:mb-10">
            <Title title="Latest Videos" />
          </div>
          <div className="grid grid-cols-12 grid-rows-2 sm:gap-6">
            <div className="row-span-2 col-span-12 lg:col-span-6">
              {/* Video */}
              <div className="relative h-[295px] sm:h-111 rounded-xl flex items-center justify-center bg-transparent hover:cursor-pointer">
                <Image
                  fill
                  objectFit="cover"
                  className="rounded-xl"
                  src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="panel of video"
                  sizes="(max-width: 1023px) 98vw,
                  (min-width: 1024px) and (max-width: 1279px) 500px,
                  (min-width: 1280px) 628px"
                />
                <div className="hidden absolute left-2 bottom-4 p-4 w-[97%] bg-white-75 rounded-xl opacity-90 sm:block xl:left-2.5">
                  <Typography
                    tag="h2"
                    textSize={Size.MD}
                    weight={FontWeight.Medium}
                    additionalClasses="text-black-100"
                  >
                    How Music Affects Your Brain (Plus 11 Artists To Listen To
                    At Work)
                  </Typography>
                  <Typography
                    tag="h3"
                    textSize={Size.XSM}
                    weight={FontWeight.Light}
                    additionalClasses="text-dark-100 h-10 w-full pr-10 leading-5 text-ellipsis overflow-hidden"
                  >
                    You’ve Read All Your Free Member-Only Stories, Become A
                    Member To Get Unlimited Access. Your Membership Fee Supports
                    The Voices You Want To Hear More From.
                  </Typography>
                </div>
                <div className="absolute flex items-center justify-center w-24 h-24 bg-white-90 opacity-85 rounded-full hover:cursor-pointer sm:w-30 sm:h-30">
                  <div className="ml-1">
                    <Triangle />
                  </div>
                </div>
              </div>
            </div>

            {/* card first */}
            <div className="h-52.5 hidden lg:grid lg:col-span-6">
              <PaperPost
                isLargePaper
                title="5 reasons why you should wrap your hands when boxing"
                content="So, you finally went to your first boxing class and learned the basics of the sport. You also learned that it’s recommended to wrap your hands before putting on the gloves. But there are times when you just don’t feel like wrapping them and you wonder why you even need them. Well, this blog is going to explain the benefits of wrapping your hands."
                alt="boxing-article"
                imageSrc="https://images.unsplash.com/photo-1622599511051-16f55a1234d0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJveGluZ3xlbnwwfHwwfHx8MA%3D%3D"
              />
            </div>
            {/* card secondary */}
            <div className="h-52.5 hidden lg:grid lg:col-span-6">
              <PaperPost
                isLargePaper
                title="The Health Benefits and Joys of Sunlight"
                content="Sunlight is a spectrum of electromagnetic radiation that includes visible light, ultraviolet (UV) rays, and infrared radiation. Our bodies respond to these rays in various ways, producing essential vitamins and hormones that regulate numerous bodily functions. The most well-known benefit of sunlight is its role in the synthesis of vitamin D, a critical nutrient for bone health and immune function."
                alt="boxing-article"
                imageSrc="https://images.unsplash.com/photo-1717196214681-0a66168248cf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMzR8fHxlbnwwfHx8fHw%3D"
              />
            </div>
          </div>
        </div>
      </section>

      {/* trendy posts */}
      <ComponentInView>
        <section className="mx-auto bg-white-100 lg:container">
          <TitleSection title="Trendy Posts" />
          <Suspense fallback={<CardPostSkeleton count={4} />}>
            <PostsByAttribute
              isMarginSmall
              attribute={PostVariant.TRENDY}
              cardType={CardType.VERTICAL}
            />
          </Suspense>
        </section>
      </ComponentInView>

      {/* weather */}
      <section className="w-full flex items-center justify-center bg-white-90 p-16 my-10 sm:mt-7.5 sm:mb-12.5 lg:my-17.5">
        <div className="container mx-auto">
          <div className="card-group grid grid-cols-12 grid-rows-2 gap-6">
            {/* card first */}
            <div className="row-span-2 col-span-6 bg-white-90 hidden rounded-xl lg:block">
              <Image
                src={ImageStore.WeatherWidget}
                alt="weather widget"
                style={{
                  width: '100%',
                  height: '100%',
                }}
              />
            </div>
            {/* Weather Ankara */}
            <div className="bg-white-90 rounded-xl col-span-12 row-span-2 block sm:hidden lg:block lg:col-span-3 lg:row-span-1">
              <Image
                src={ImageStore.CityWeatherAnkara}
                alt="weather city widget"
                style={{
                  width: '100%',
                  height: '100%',
                }}
              />
            </div>
            {/* Weather Alaska */}
            <div className="col-span-3 bg-white-90 rounded-xl hidden lg:block">
              <Image
                src={ImageStore.CityWeatherAlaska}
                alt="weather city widget"
                style={{
                  width: '100%',
                  height: '100%',
                }}
              />
            </div>
            {/* Weather Paris */}
            <div className="col-span-3 bg-white-90 rounded-xl hidden lg:block">
              <Image
                src={ImageStore.CityWeatherParis}
                alt="weather city widget"
                style={{
                  width: '100%',
                  height: '100%',
                }}
              />
            </div>
            {/* Weather Berlin */}
            <div className="col-span-3 bg-white-90 rounded-xl hidden lg:block">
              <Image
                src={ImageStore.CityWeatherBerlin}
                alt="weather city widget"
                style={{
                  width: '100%',
                  height: '100%',
                }}
              />
            </div>
            <div className="col-span-12 row-span-2 bg-white-90 rounded-xl hidden sm:block lg:hidden">
              <Image
                src={ImageStore.CityWeatherAnkaraLarge}
                alt="weather city widget"
                style={{
                  width: '100%',
                  height: '100%',
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* top posts */}
      <ComponentInView>
        <section className="mx-auto flex flex-col justify-between bg-white-100 mb-30 sm:mb-7.5 lg:mb-25 lg:container">
          <TitleSection title="Top Posts" />
          <Suspense fallback={<CardPostSkeleton count={4} />}>
            <PostsByAttribute
              isMarginSmall
              attribute={PostVariant.TOP}
              cardType={CardType.VERTICAL}
            />
          </Suspense>
        </section>
      </ComponentInView>
    </main>
  );
}

import { Slide } from "../animation/Slide";
import Image from "next/image";
import { Metadata } from "next";
import { sanityFetch } from "@/lib/sanity.client";
import { singleImageItemQuery } from "@/lib/sanity.query";
import { ImageItemType } from "@/types";
import dynamic from 'next/dynamic';

const PageHeading = dynamic(
  () => import('@/app/components/shared/PageHeading'),
  { ssr: false }
);

export const metadata: Metadata = {
  title: "Photos | Ansh Modi",
  metadataBase: new URL("https://anshmodi.tech/photos"),
  description: "Explore photos taken by Ansh Modi",
  openGraph: {
    title: "Photos | Ansh Modi",
    url: "https://anshmodi.tech/photos",
    description: "Explore photos taken by Ansh Modi",
  },
};

export default async function Photos() {
  const imageItems: ImageItemType[] = await sanityFetch({
    query: singleImageItemQuery,
    tags: ["photos"],
  });

  return (
    <main className="max-w-7xl mx-auto md:px-16 px-6 lg:mt-32 mt-20">
      <PageHeading
        title="Photos"
        description="Here are some awesome photos"
      />
      <figure className="my-6">
        <Slide delay={0.12} className="flex flex-wrap gap-2">
          {imageItems.map((image) => (
            <Image
              key={image._id}
              src={image.src}
              alt={"Image"}
              width={350}
              height={800}
              className="dark:bg-primary-bg bg-secondary-bg"
            />
          ))}
        </Slide>
      </figure>
    </main>
  );
}

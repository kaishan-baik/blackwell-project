import Image from 'next/image';

export default function Downloads() {
  return (
    <div className="relative flex flex-wrap justify-center items-center gap-4 mb-8 w-full mt-5">
      {/* Store buttons with flex layout that will wrap on small screens */}
      <div className="flex flex-wrap items-center gap-4 z-10">
        <Image
          src="/images/google-play.jpg"
          alt="Get it on Google Play"
          width={100}
          height={50}
          className="rounded-lg"
        />
        <Image
          src="/images/app-store.jpg"
          alt="Download on App Store"
          width={100}
          height={50}
          className="rounded-lg"
        />
      </div>
    </div>
  );
}

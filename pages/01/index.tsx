import Image from 'next/image';

export default function Page01() {
  return (
    <div className="container mx-auto">
      <div className="text-center text-red px-20">
        <h1 className="text-4xl">Discover the beauty around the world</h1>
        <p className="pt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero
          risus semper habitant arcu eget. Et integer facillsi eget diam.</p>
        <button className="rounded-2xl bg-black text-white mt-6 py-[18px] px-12">Explore</button>
      </div>
      <div className="grid grid-cols-4 gap-4 pt-12">
        <Image src="/images/1.png" width={200} height={200} alt="photo1" />
        <Image src="/images/2.png" width={200} height={200} alt="photo1" />
        <Image src="/images/3.png" width={200} height={200} alt="photo1" />
        <Image src="/images/4.png" width={200} height={200} alt="photo1" />
        <Image src="/images/5.png" width={200} height={200} alt="photo1" />
        <Image src="/images/6.png" width={200} height={200} alt="photo1" />
        <Image src="/images/7.png" width={200} height={200} alt="photo1" />
        <Image src="/images/8.png" width={200} height={200} alt="photo1" />
      </div>
    </div>
  )
}

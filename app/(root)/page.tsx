import { Collection } from "@/components/shared/Collection";
import { navLinks } from "@/constants";
import { getAllImages } from "@/lib/actions/image.actions";
import Image from "next/image";
import Link from "next/link";
import React from "react";


const Home = async ({searchParams}: SearchParamProps) => {

    const page = Number(searchParams?.page) || 1;
    const searchQuery = (searchParams?.query as string) || ''

    const images = await getAllImages({page, searchQuery})
    return (
    <div>
      <section className="home bg-gradient-to-r from-[#0095FF] to-[#24D6FF]">
        <h1 className="text-white text-5xl font-semibold text-center p-5">
          Change your images using AI!
        </h1>
        <ul className="flex-center w-full gap-20">
          {navLinks.slice(1,5).map((link)=>(
            <Link 
              key={link.route}
              href={link.route}
              className="flex-center flex-col gap-2">

              <li className="flex-center w-fit rounded-full bg-white p-4">
                <Image
                  src={link.icon}
                  alt="image"
                  width={24}
                  height={24}/>
              </li>
              <p className="text-white text-center p-14-medium">{link.label}</p>
            </Link>
          ))}
        </ul>
      </section>

      <section className="sm:mt-12"> 
        <Collection 
          hasSearch={true}
          images={images?.data}
          totalPages={images?.totalPages}
          page={page}
        />
      </section>
    </div>
  ) 
}


export default Home;

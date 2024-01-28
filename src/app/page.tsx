import { Carousel } from "@/components/carousel";
import { Header } from "@/components/header";
import {
  IconClock,
  IconMail,
  IconMapPin,
  IconPhone,
} from "@tabler/icons-react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />
      <main className="snap-y snap-mandatory w-full h-screen overflow-scroll">
        <section className="snap-start h-screen  flex flex-col items-center gap-8">
          <h2 className="text-4xl  text-white text-center z-20 relative pt-48">
            Beautify Lashes
          </h2>

          <Link
            className="border-2 font-medium p-2 text-lg z-20 relative text-white"
            href={""}
          >
            BOOK NOW
          </Link>
        </section>

        <section className=" pt-10  h-screen snap-start px-8  overflow-x-hidden">
          <h2 className="text-white text-4xl text-center mb-10">Services</h2>
          <Carousel />
        </section>
        <section className="flex flex-col items-center snap-start h-screen pt-20 text-white">
          <h2>MEET THE LASH ARTIST</h2>
          <h3>Britany Mero</h3>
        </section>
        <section className="flex flex-col snap-start h-screen bg-[#333] text-white items-center pt-20 px-3">
          <h2 className="text-4xl">Information</h2>
          <ul className="flex flex-col gap-5 mt-10">
            <li className="flex gap-2 items-center ">
              <IconMapPin size={30} /> 85 N Hillside Ave, Kenvil, NJ 07847, EE.
              UU.
            </li>
            <li className="flex gap-2 items-center ">
              <IconPhone />
              +1 000-000-000
            </li>
            <li className="flex gap-2 items-center ">
              <IconMail />
              example@gmail.com
            </li>
            <li className="flex gap-2 items-center ">
              <IconClock />
              Appointment Only{" "}
            </li>
          </ul>
          <iframe
            className="mx-auto mt-10"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2536.6966320027764!2d-74.6362751929763!3d40.879385957141736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c39fd3d7a6a82f%3A0x462c5d84e7d9df1f!2s85%20N%20Hillside%20Ave%2C%20Kenvil%2C%20NJ%2007847%2C%20EE.%20UU.!5e0!3m2!1ses!2sco!4v1706481743028!5m2!1ses!2sco"
            width="100%"
            height="320"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>
      </main>
    </>
  );
}

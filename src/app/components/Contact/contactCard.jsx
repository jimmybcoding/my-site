"use client";

import Image from "next/image";

const ContactCard = ({ handleOpenEmailModal }) => {
  return (
    <div className="flex flex-col min-h-screen text-white bg-black">
      <div className="pt-10 pb-6">
        <h1
          className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-purple-500 py-5 ml-6 text-5xl text-white font-bold"
          id="contact"
        >
          Contact
        </h1>
      </div>
      <div className="flex flex-col items-center gap-5 mx-auto">
        <div className="p-4">
          <h1 className="text-3xl text-blue-500 font-mono">James Barbour</h1>
          <p>Let&apos;s Connect!</p>
          <p className="">Email: jameskbarbour1@gmail.com</p>
          <button
            className="my-6 px-2 py-4 text-center font-mono border-2 border-blue-500 border-dashed text-white hover:text-blue-500"
            onClick={handleOpenEmailModal}
          >
            Shoot me a message
          </button>
        </div>
        <div className=" bg-black text-white font-mono">
          <Image
            src="/maisy.jpg"
            alt="my apricot coloured baby, the GOAT puppy."
            width={100}
            height={100}
            sizes="100vw"
            className="rounded-full hover:animate-bounce"
          ></Image>
          <p className="text-med">Maisy</p>
          <p className="text-xs skew-y-2">
            She jumps when petted -- IRL and virtually
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;

import Link from "next/link";
import { whatsappLink } from "@/constants/data";

export const WhatsappButton = () => {
  return (
    <Link
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar no WhatsApp"
      className="right-6 bottom-6 z-50 fixed flex justify-center items-center bg-transparent rounded-full w-14 md:w-20 h-14 md:h-20 transition"
    >
      <span className="inline-flex absolute bg-green-500 opacity-75 rounded-full w-full h-full animate-ping"></span>
      <img src={"/button.svg"} alt="Botão do WhatsApp" />
    </Link>
  );
};

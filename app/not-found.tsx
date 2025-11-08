import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import notFoundImg from "../public/images/404.png";

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <Image
        src={notFoundImg}
        alt="Not Found"
        className="object-cover size-80"
      />
      <h2 className="text-primary font-semibold text-2xl">
        {" "}
        404 ! Page Not Found !!
      </h2>
      <p className="text-sm text-center mt-4 w-full sm:w-[475px] text-dim">
        It&apos;s look that your requested page of SarafCard could not be found.
        The link is broken or the page is removed.
      </p>
      <div className="mt-4">
        <Link href="/">
          <button className="flex items-center gap-1  bg-gradient-to-r from-silver/10 to-silver/20 backdrop-blur-sm border border-silver/30 rounded-xl px-6 py-3 group-hover:from-silver/20 group-hover:to-silver/30 transition-all duration-300">
            <span>Back to Home</span> <FaArrowRightLong />
          </button>
        </Link>
      </div>
    </div>
  );
}

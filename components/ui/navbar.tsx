import Link from "next/link";
import { IconChevronDown } from '@tabler/icons-react';

export const Navbar = () => {
    return <div className="bg-white">
        <div className="border-b border-b-[#dbdbdb]">
            <div className="flex items-center mx-auto p-4 container">
                <div className="w-[calc(50%-80px)]">
                    <div className="relative pr-4 w-full max-w-96">
                        <input className="bg-[#f1f1f1] pr-2 pl-11 rounded-[4px] w-full h-[42px]" placeholder="What are you looking for?" />
                        <div className="top-0 bottom-0 left-0 absolute place-items-center grid aspect-square">
                            <img src="/icon-search.svg" />
                        </div>
                    </div>
                </div>

                <Link href="/">
                    <img src="/logo.avif" className="grow-0 w-40 h-[30px] shrink-0" />
                </Link>

                <div className="w-[calc(50%-80px)]">
                    <div className="flex justify-end items-center gap-4">
                        <img src="/icon-user.svg" width={30} height={30} />
                        <div className="relative">
                            <img src="/icon-motorcycle.webp" width={30} height={30} />
                            <div className="-top-0.5 -right-2.5 absolute border-white bg-[#2765A4] border rounded-full w-[17px] h-[17px] text-center text-white text-xs">0</div>
                        </div>
                        <div className="relative">
                            <img src="/icon-cart.svg" width={30} height={30} />
                            <div className="-top-0.5 -right-1.5 absolute border-white bg-[#000] border rounded-full w-[17px] h-[17px] text-center text-white text-xs">0</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="top-0 sticky flex justify-center bg-[#F0F0F0] shadow-lg h-14">
            <div className="flex items-center gap-2 hover:bg-white px-4 h-14 font-bold text-sm cursor-pointer">
                MOTORCYCLES
                <IconChevronDown size={18} />
            </div>

            <div className="flex items-center gap-2 hover:bg-white px-4 h-14 font-bold text-sm cursor-pointer">
                ATV/UTV
                <IconChevronDown size={18} />
            </div>

            <div className="flex items-center gap-2 hover:bg-white px-4 h-14 font-bold text-sm cursor-pointer">
                SNOW
                <IconChevronDown size={18} />
            </div>

            <div className="flex items-center gap-2 hover:bg-white px-4 h-14 font-bold text-sm cursor-pointer">
                ELECTRIC
                <IconChevronDown size={18} />
            </div>

            <div className="flex items-center gap-2 hover:bg-white px-4 h-14 font-bold text-sm cursor-pointer">
                SERVICE
                <IconChevronDown size={18} />
            </div>

            <div className="flex items-center gap-2 hover:bg-white px-4 h-14 font-bold text-sm cursor-pointer">
                SUPPORT
                <IconChevronDown size={18} />
            </div>

            <div className="flex items-center gap-2 hover:bg-white px-4 h-14 font-bold text-sm cursor-pointer">
                EXPLORE
                <IconChevronDown size={18} />
            </div>

            <div className="flex items-center gap-2 hover:bg-white px-4 h-14 font-bold text-sm cursor-pointer">
                SALE
                <IconChevronDown size={18} />
            </div>
        </div>
    </div>
}

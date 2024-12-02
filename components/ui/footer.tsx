import { IconBrandFacebookFilled, IconBrandYoutubeFilled, IconBrandInstagram } from "@tabler/icons-react"

export const Footer = () => {
    return <div className="bg-[#202020] py-16 text-white">
        <div className="grid grid-cols-5 mx-auto mb-24 container">
            <div className="flex flex-col items-center">
                <img src="/footer-logo.webp" width={252} height={47} className="mb-6" />
                <div className="flex justify-center items-center gap-6 mb-6">
                    <IconBrandFacebookFilled size={22} color="#fff" />
                    <IconBrandYoutubeFilled size={24} color="#fff" />
                    <IconBrandInstagram size={30} color="#fff" />
                </div>
                <p className="mb-6 text-sm">POWERED BY <b>TRACTION</b></p>
                <p className="font-bold">CALL TODAY</p>
                <p className="text-lg">(888) 640-2209</p>
            </div>
            <div>
                <div className="mx-auto w-min">
                    <p className="mb-4 font-bold text-lg">MACHINES</p>
                    <p className="mb-2 text-lg">Motorcycles</p>
                    <p className="mb-2 text-lg">ATV</p>
                    <p className="mb-2 text-lg">UTV</p>
                    <p className="mb-2 text-lg">Snow</p>
                    <p className="mb-2 text-lg">Electric</p>
                    <p className="mb-2 text-lg">Pre-Owned</p>
                </div>
            </div>
            <div>
                <div className="mx-auto w-min">
                <p className="mb-4 font-bold text-lg">CONTACT</p>
                    <p className="mb-2 text-lg">Contact Us</p>
                    <p className="mb-2 text-lg">About Us</p>
                </div>
            </div>
            <div>
                <div className="mx-auto w-min">
                <p className="mb-4 font-bold text-lg">EXPLORE</p>
                    <p className="mb-2 text-lg">SALE</p>
                    <p className="mb-2 text-lg">Hiring</p>
                    <p className="mb-2 text-lg">Events</p>
                    <p className="mb-2 text-lg">Blog</p>
                </div>
            </div>
            <div>
                <div className="mx-auto">
                    <p className="mb-4 text-lg">SIGN UP AND SAVE</p>
                    <p className="mb-4 text-lg">Subscribe to get special offers, free giveaways, and one in a life time deals</p>
                    <input className="mb-1 px-4 py-3 border rounded-sm w-full" placeholder="Email Address"/>
                    <button className="bg-[#276598] w-full h-14">SUBSCRIBE</button>
                </div>
            </div>
        </div>

        <div className="flex justify-between mx-auto text-white text-xs container">
            <p>Copyright © 2024 Traction Demo.</p>
            <div className="flex gap-2">
                <p className="hover:underline cursor-pointer">Accessibility</p>
                <p>|</p>
                <p className="hover:underline cursor-pointer">Privacy</p>
                <p>|</p>
                <p className="hover:underline cursor-pointer">Policy</p>
                <p>|</p>
                <p className="hover:underline cursor-pointer">Terms</p>
            </div>
        </div>
    </div>
}
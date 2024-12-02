export const Section2 = () => {
    return <div className="bg-[url('/section-bg1.webp')] bg-cover bg-center h-[496px] md:h-[680px]">
        <div className="mx-auto px-4 pt-52 h-full container">
            <div>
                <p className="mb-4 pl-3 text-4xl text-white">Capture Attention</p>
                <p className="mb-8 font-black text-3xl text-white">PROMOTE NEW MODELS</p>
                <div className="flex gap-6">
                    <button className="border-[2px] border-white bg-black px-8 py-3 skew-x-[-25deg] text-sm text-white">
                        <p className="skew-x-[25deg]">SHOP NOW</p>
                    </button>
                    <button className="border-[2px] border-white bg-[#fff2] px-8 py-3 skew-x-[-25deg] text-sm text-white" style={{backdropFilter: "blur(2px)"}}>
                        <p className="skew-x-[25deg]">LEARN MORE</p>
                    </button>
                </div>
            </div>
        </div>
    </div>
}
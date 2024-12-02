import ProductSlider from "./slide2"

export const Section5 = () => {
    return <div className="py-16">
        <div className="flex gap-6 mx-auto container">
            <div className="relative bg-[url('/card2.jpg')] bg-cover bg-center px-8 pt-80 grow-0 w-[450px] h-[500px] shrink-0">
                <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(66, 66, 66, 0.13) 52.6%, rgba(66, 66, 66, 0.70) 81.25%)" }}></div>

                <div className="relative z-10 text-white">
                    <p className="mb-4 text-2xl">LETS GET</p>
                    <p className="mb-4 font-bold text-3xl">CATEGORY SPECIFIC</p>
                    <p className="max-w-80 text-[15px]">Sell specific types of inventory you want to highlight. Here you can push categories that need attention in the store.</p>
                </div>
            </div>

            <div className="w-[calc(100%-474px)] pr-12">
            <ProductSlider />
          </div>
        </div>
    </div>
}
export const Section3 = () => {
    return <div className="px-4 py-16">
        <div className="grid grid-cols-4 mx-auto container">
            <div className="relative col-span-2 bg-[url('/section-card1.webp')] bg-cover bg-center h-96">
                <div className="bottom-8 left-8 absolute font-bold text-white">SIDE X SIDE</div>
            </div>
            <div className="relative bg-[url('/section-card2.webp')] bg-cover bg-center">
                <div className="bottom-8 left-8 absolute font-bold text-white">MORTOCROSS</div>
            </div>
            <div className="relative bg-[url('/section-card3.webp')] bg-cover bg-center">
                <div className="bottom-8 left-8 absolute font-bold text-white">ENDURO</div>
            </div>
        </div>
        <div className="grid grid-cols-4 mx-auto container">
            <div className="relative bg-[url('/section-card4.webp')] bg-cover bg-center h-96">
                <div className="bottom-8 left-8 absolute font-bold text-white">MORTOCROSS</div>
            </div>
            <div className="relative bg-[url('/section-card5.webp')] bg-cover bg-center">
                <div className="bottom-8 left-8 absolute font-bold text-white">ENDURO</div>
            </div>
            <div className="relative col-span-2 bg-[url('/section-card6.webp')] bg-cover bg-center">
                <div className="bottom-8 left-8 absolute font-bold text-white">SIDE X SIDE</div>
            </div>
        </div>
    </div>
}
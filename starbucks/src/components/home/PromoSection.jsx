export const PromoSection = ({
    imageurl,
    title,
    description,
    buttonText,
    bgColor,
    reverse = false,
}) => {
    return(
        <section className={`flex flex-col md:flex-row ${
            reverse ? "md:flex-row-reverse" : ""
        }`}>
            {/* image  */}
            <div className="md:w-1/2">
                <img 
                src={imageurl}
                alt={title}
                className="w-full h-full object-cover"/>
            </div>

            {/* content */}
            <div className={`md:w-1/2 ${bgColor} text-white 
            flex flex-col justify-center items-center
            text-center px-10 py-16`}>
                <h2 className="text-2xl font-bold mb-4">
                    {title}
                </h2>

                <p className=" max-w-md mb-6 text-1xl  leading-5">
                    {description}
                </p>

                <button className="
                bg-amber-50 text-[#006241]
                px-4 py-2
                rounded-full
                font-semibold
                hover:scale-105
                transition">
                    {buttonText}
                </button>
            </div>
        </section>
    )
}
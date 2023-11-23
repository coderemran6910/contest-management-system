
const SectionTitle = ({title, subTitle}) => {
    return (
        <div className="text-center w-6/12 mx-auto pt-20 pb-10">
            <h2 className="text-3xl md:text-4xl font-bold uppercase text-[#FFA439] mb-2">| {title} |</h2>
            <p className="text-lg  text-[#FBB464] ">----{subTitle}----</p>
        </div>
    );
};

export default SectionTitle;
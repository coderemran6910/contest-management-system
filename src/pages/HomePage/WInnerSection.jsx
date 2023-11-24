import StyledButton from "../../components/shared/StyledButton";
import bg from '../../assets/winner.svg'
import SectionTitle from "../../components/shared/SectionTitle";
const WinnerSection = () => {


    const winner = {
        "winner": {
          "name": "Alice Smith",
          "image": "https://i.ibb.co/fp5h1vj/winner.jpg",
          "description": "Alice is an exceptional designer whose creativity knows no bounds. Her winning entry amazed everyone with its originality and brilliance."
        },
        "participationCount": 2500
      }
      


  return (
    <section style={{ backgroundImage: `url(${bg})` }} className=" from-purple-400 via-pink-500 to-red-500  gap-10 text-white bg-cover bg-center h-screen flex justify-center items-center">
      
     <div className="max-w-7xl mx-auto flex justify-center items-center">
     <div className="container mx-auto px-4 text-black flex-1">
        {/* Winner Spotlight */}
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contest Winner</h2>
         
          <div className="flex items-center">
            <img src="https://i.ibb.co/fp5h1vj/winner.jpg" alt={winner.name} className="w-16 h-16 rounded-full mr-4" />
            <div>
              <h3 className="text-lg md:text-xl font-semibold">{winner.name}</h3>
              <p className="text-sm md:text-base">{winner.description}</p>
              
            </div>
          </div>
        </div>

        {/* Participation Count */}
        <div className="mb-8">
          <p className="text-xl md:text-2xl font-semibold">Join Over {winner.participationCount} Participants!</p>
          <p className="text-sm md:text-base">Be part of the creative community!</p>
        </div>

        {/* Call to Action */}
        <div>
          <p className="text-lg md:text-xl mb-4">Ready to Showcase Your Talent?</p>
          
          <StyledButton  text={"Join Contest"}></StyledButton>
        </div>
      </div>
      <div className="flex-1">
        <img src="https://i.ibb.co/fp5h1vj/winner.jpg" alt={winner.name} className="w-full h-auto object-cover rounded-2xl" />
      </div>
     </div>
    </section>
  );
};

export default WinnerSection;

import TextType from "./components/TextType";


export default function Heading () {
    return (
        <>
        <div className="fixed top-10 right-14 w-80">

            <div className=" text-[#BC241B] text-5xl orbitron-700">
                ARNAV            
            </div>
            <div className=" text-[#ffffff] text-3xl orbitron-700">
                GUPTA            
            </div>

            <div className=" text-[#BC241B] text-3xl orbitron-500 mt-32">
                I craft the digital world through            
            </div>

        
            <div className=" text-[#BC241B] text-3xl orbitron-500 mr-2 ">
                <TextType 
                    text={[
                            "code",
                            "design",
                            "motion",
                            "stories",
                            "smart contracts",
                            "systems that breathe",
                            "the future, one commit at a time"
                        ]}
                    typingSpeed={75}
                    pauseDuration={1500}
                    showCursor={true}
                    cursorCharacter="|"
                />
            </div>

            {/* <div className="text-[#BC241B] text-3xl orbitron-500">
                shaping ideas into interfaces, systems, and decentralized experiences.
            </div> */}
        </div>
        </>
    );
}
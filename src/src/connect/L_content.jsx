import Button from "./Button";
import Horizonlal_nav from "../Home/components/Horizonlal_nav";
import ContactForm from "./ContactForm";

export default function L_content() {
    return (
        <>
            <div className='w-full flex justify-around p-0 m-0'>
                
            <div className="flex flex-col items-center">
                <div>
                    <Horizonlal_nav/>
                </div>
                <div className="w-40 mt-10">
                    <Button/>
                </div>
            </div>
                <div className="mb-15">
                    <ContactForm/>
                </div>
                
            </div>
        </>
    );
}
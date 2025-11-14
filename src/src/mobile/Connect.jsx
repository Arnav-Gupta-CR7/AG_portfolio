import InputEmail from "./components/Input_email";
import Linkdin from "./components/buttons/Linkdin";
import Github from "./components/buttons/Github";
import Twitter from "./components/buttons/Twitter";

export default function Connect() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
            <div style={{ display: 'flex', gap: '1rem' }}>
                <a href="https://www.linkedin.com/in/arnav-gupta-7636752b7" target="_blank" rel="noopener noreferrer">
                    <Linkdin />
                </a>
                <a href="https://github.com/Arnav-Gupta-CR7" target="_blank" rel="noopener noreferrer">
                    <Github />
                </a>
                <a href="https://x.com/Arnav_Gupta_7" target="_blank" rel="noopener noreferrer">
                    <Twitter />
                </a>
            </div>
            <div className="mx-10">
                <InputEmail />
            </div>
            
        </div>
    );
}



export default function Baground_about() {
    return (
        <>
            <div className="relative w-full h-screen">
            {/* Fixed GIF Background */}
            <div
                className="fixed inset-0 -z-10 bg-cover bg-center"
                style={{
                    backgroundImage: `url('/download.gif')`,
                }}
            />
            </div>
        </>
    );
}
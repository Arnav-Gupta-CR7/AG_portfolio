export default function Baground() {
    return (
        <div className="relative w-full h-screen">
            {/* Fixed GIF Background */}
            <div
                className="fixed inset-0 -z-10 bg-cover bg-center"
                style={{
                    backgroundImage: `url('/building.gif')`,
                }}
            />
        </div>
    );
}

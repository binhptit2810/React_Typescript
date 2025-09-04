

export default function Bai07() {
    return (
        <div className="grid grid-cols-3 gap-4 w-[600px] mx-auto">
            {Array.from({ length: 9 }, (_, i) => (
                <div
                    key={i}
                    className="bg-[rgb(217,70,239)] text-white font-semibold text-center py-6 rounded-lg shadow-md"
                >
                    {String(i + 1).padStart(2, '0')}
                </div>
            ))}
        </div>
    )
}

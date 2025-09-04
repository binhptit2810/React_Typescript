

export default function Bai05() {
    return (
        <div className="relative w-80 h-40 bg-sky-200 rounded-lg p-4">
            <div >
                <p className="text-sky-900 font-medium">Relative parent</p>
                <div className="absolute bottom-2 left-2 bg-sky-500 text-white font-semibold px-4 py-2 rounded-lg shadow-md">
                    Absolute child
                </div>
            </div>
        </div>
    )
}

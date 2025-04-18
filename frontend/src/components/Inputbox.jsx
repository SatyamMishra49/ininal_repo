export default function Inputbox({ label, placeholder }) {
    return (
        <div className="py-1">
            <div className="text-left text-gray-500 py-1">{label}</div>
            <input
                placeholder={placeholder}
                className="w-full px-1 py-2 border rounded border-slate-300"
            ></input>
        </div>
    );
}

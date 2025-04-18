export default function Button({ text }) {
    return (
        <button
            type="button"
            className="w-full bg-purple-800 text-white rounded px-5 py-2.5 me-2 mb-2 text-center text-xl text-bold"
        >
            {text}
        </button>
    );
}

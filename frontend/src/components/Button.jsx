export default function Button({ text }) {
    return (
        <button
            type="button"
            className="w-full bg-primaryPurple text-white rounded-full px-5 py-2.5 me-2 mb-2 text-center text-bold"
        >
            {text}
        </button>
    );
}

export default function DefaultButton({ text, onClick, color = 'bg-blue-500' }) {
    return (
        <button
            className={`${color} hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}
            onClick={onClick}
        >
            { text }
        </button>
    );
}

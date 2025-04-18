import Appbar from '../components/Appbar';

export default function Dashboard() {
    return (
        <div>
            <Appbar />

            <div className="ml-2 mt-2">
                <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-xl"></div>
            </div>
            <div className="ml-2 mr-2 mt-4">
                <div class="max-w-sm p-3 bg-white border border-gray-200 rounded-lg shadow-xl"></div>
            </div>
        </div>
    );
}

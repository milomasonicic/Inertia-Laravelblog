export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white p-4 mt-24">
            <div className="w-[100%] mx-auto text-center">
                <p>&copy; {new Date().getFullYear()} Our Blog</p>
            </div>
        </footer>
    );
}
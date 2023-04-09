export default function BlogPost() {
    return(
        <div>
            <div>
                <p className="text-gray-400">Date: 00/00/0000</p>
                <h1 className="text-4xl font-semibold tracking-tight py-2 pb-6">Lorem ipsum dolor sit amet</h1>
                <div className="flex items-center gap-2">
                    <img src="/profile.png" alt="profile pic" className="w-10 h-10"/>
                    <div className="flex flex-col items-start">
                        <p>Author name</p>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                            <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                            <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                        </svg>
                    </div>
                </div>
            </div>
            <img src="/media/team.jpg" alt="cover pic" className="w-screen" />
        </div>
    );
}
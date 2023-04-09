export default function ComSpotlightItem() {
    return (
        <div className="grid grid-cols-2 justify-items-center items-center">
            <img src="/media/team.jpg" alt="vietq team" className="w-3/4 h-full rounded-xl overflow-hidden bg-green-300"/>

            <div className="text-white bg-blue-300 pr">
                <h3 className="font-semibold text-xl">Lorem ipsum</h3>
                <p className="font-thin">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                    labore et dolore magna aliqua. Integer id turpis sapien.
                </p>
                <div className="flex">
                    <img src="/socials/instagram.svg" alt="insta" className="w-6 h-6"/>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-7 h-7" alt="mail">
                        <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                        <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                    </svg>
                    <p className="font-thin">vietqorganization@gmail.com</p>
                </div>
            </div>
        </div>
    );
}
/*
        <div className="grid grid-cols-2 items-center px-28 pb-12 gap-x-0">
            <div className="">
                <img src="/media/team.jpg" alt="vietq team" className="w-3/4 h-full rounded-xl overflow-hidden"/>
            </div>
            <div className="text-white">
                <h3 className="font-semibold text-xl">Lorem ipsum</h3>
                <p className="font-thin">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                    labore et dolore magna aliqua. Integer id turpis sapien.
                </p>
                <div className="flex items-center justify-start space-x-4 p-4">
                    <img src="/socials/instagram.svg" alt="insta" className="w-6 h-6"/>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-7 h-7" alt="mail">
                        <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                        <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                    </svg>
                    <p className="font-thin">vietqorganization@gmail.com</p>
                </div>
            </div>
        </div>
*/
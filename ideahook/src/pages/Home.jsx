import React from 'react';
function Home(){
    return(
        <div className="flex flex-1 justify-center screenc pt-20">
                <div className="flex flex-col items-center">
                    <div className="md:text-center text-left">
                        <h2 className="md:text-8xl text-4xl text-primary">Where Ideas Know <br/> No Limits</h2>
                        <p>Join a vibrant community of creatives and developers. Share your stories, collaborate in real-time, and showcase your projects.</p>
                        <button className="bg-primary py-2 px-5 mt-3 rounded-2xl text-secondary">Join Now</button>
                    </div>
                </div>
            </div>
    );
}
export default Home;
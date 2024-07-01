import YouTube from 'react-youtube';

function Video() {
    const videoId = 'rbROwXJ-AIE';
    const opts = {
        height: '100%',
        width: '100%',
        playerVars: {
            autoplay: 0,
        },
    };
    return (
        <>
            <div className="flex justify-center mt-5 mb-5 h-[300px] sm:h-[450px] md:h-[500px] lg:h-[600px] lg:w-[80%] md:w-full">
                <YouTube videoId={videoId} opts={opts} className="rounded-lg w-full shadow-lg" />
            </div>
        </>
    );
}

export default Video;

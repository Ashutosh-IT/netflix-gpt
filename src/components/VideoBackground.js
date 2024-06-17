import { useSelector } from "react-redux";
import useTrailerVideo from "../hooks/useTrailerVideo";

const VideoBackground = ({ movieId }) => {
  useTrailerVideo(movieId);
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  const key = trailerVideo?.key;

  return (
    <div className="">
      <iframe
        className="w-screen aspect-video relative top-[-100px]"
        src={"https://www.youtube-nocookie.com/embed/"+key+"?autoplay=1&mute=1&controls=0&loop=1&showinfo=0&modestbranding=1&rel=0"}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
